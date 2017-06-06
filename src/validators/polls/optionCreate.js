import yup from 'yup';
import _ from 'lodash';
import moment from 'moment';
import { transformYupValidationErrors } from '../../helpers/index';

export const schema = yup.object().shape({
  text: yup.mixed().required().test('options', 'Invalid Options', function (value) { // eslint-disable-line
    if (!_.isNull(value)) {
      if (_.isString(value)) {
        return true;
      } else if (_.isArray(value)) {
        let isDateArray = true;
        _.each(value, (ele) => {
          if (!moment(ele).isValid()) {
            isDateArray = true;
          }
          return isDateArray;
        });
      }
    }
    return false;
  }),
});

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
