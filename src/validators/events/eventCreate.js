import yup from 'yup';
import { transformYupValidationErrors, checkEndDate, checkEndDateGreater } from '../../helpers/index';


export const createSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().nullable(true).url(),
  groupId: yup.number().integer().required(),
  startDate: yup.string().nullable(true),
  endDate: yup.string().nullable(true)
  .test('event-dates', 'End Date is required', checkEndDate)
  .test('event-dates', 'End Date should be greated than Start Date', checkEndDateGreater),
  locationId: yup.string().required('Location is needed to create an event'),
}).required();

export const asyncValidate = values => createSchema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
