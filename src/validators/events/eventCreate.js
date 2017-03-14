import yup from 'yup';
import { transformYupValidationErrors } from '../../helpers/index';

export const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().required(),
  groupId: yup.string().required(),
  startDate: yup.string().nullable(true),
  endDate: yup.string().nullable(true),
  locationId: yup.string().required(),
}).required();

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
