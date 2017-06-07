import yup from 'yup';
import { transformYupValidationErrors, checkEndDate, checkEndDateGreater, checkPollType } from '../../helpers/index';

export const editSchema = yup.object().shape({
  title: yup.string().nullable(true),
  description: yup.string().nullable(true),
  image: yup.string().nullable(true).url(),
  groupId: yup.number().integer().nullable(true),
  startDate: yup.string().nullable(true),
  endDate: yup.string().nullable(true)
  .test('poll-dates', 'End Date is required', checkEndDate)
  .test('poll-dates', 'End Date should be greated than Start Date', checkEndDateGreater),
  locationId: yup.string().nullable(true),
  pollDataType: yup.string().required().test('poll-type', 'Invalid Poll Type', checkPollType),
  isPrivate: yup.boolean().default(false),
});

export const asyncValidate = values => editSchema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
