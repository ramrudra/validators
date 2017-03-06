import yup from 'yup';
import { transformYupValidationErrors } from '../../helpers/index';

export const schema = yup.object().shape({
  name: yup.string().required(),
  company: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
}).required();

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
