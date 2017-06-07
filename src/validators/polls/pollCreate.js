import yup from 'yup';
import { transformYupValidationErrors, checkEndDate, checkEndDateGreater, checkPollType } from '../../helpers/index';

export const createSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().nullable(true).url(),
  groupId: yup.number().integer().required(),
  startDate: yup.string().nullable(true),
  endDate: yup.string().nullable(true)
  .test('poll-dates', 'End Date is required', checkEndDate)
  .test('poll-dates', 'End Date should be greated than Start Date', checkEndDateGreater),
  locationId: yup.string().required(),
  pollDataType: yup.string().required().test('poll-type', 'Invalid Poll Type', checkPollType),
  isPrivate: yup.boolean().default(false),
}).required();

export const asyncValidate = values => createSchema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
