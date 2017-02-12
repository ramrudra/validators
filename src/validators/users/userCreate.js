import yup from 'yup';
import { transformYupValidationErrors } from '../../helpers/index';

export const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().required(),
}).required();

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
