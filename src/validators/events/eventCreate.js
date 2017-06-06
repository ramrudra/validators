import yup from 'yup';
import moment from 'moment';
import _ from 'lodash';
import { transformYupValidationErrors } from '../../helpers/index';


export const createSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().nullable(true).url(),
  groupId: yup.string().required(),
  startDate: yup.string().nullable(true),
  endDate: yup.string().nullable(true).test('event-dates', 'End Date is required', function (value) { // eslint-disable-line
    const parent = this.parent;
    const startDate = parent.startDate;
    if (!_.isNull(startDate)) {
      if (_.isNull(value)) {
        return false;
      }
    }
    return true;
  }).test('event-dates', 'End Date should be greated than Start Date', function (value) {// eslint-disable-line
    const parent = this.parent;
    const startDate = parent.startDate;
    if (_.isNull(startDate)) {
      return true;
    }
    if (moment(value).isValid() && moment(startDate).isValid()) {
      if (moment(value).diff(moment(startDate), 'days') > 0) {
        return true;
      }
      return false;
    }
    return false;
  }),
  locationId: yup.string().required('Location is needed to create an event'),
}).required();

export const asyncValidate = values => createSchema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
