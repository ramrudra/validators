import yup from 'yup';
import { transformYupValidationErrors } from '../../helpers/index';

const schema = yup.object().shape({
  text: yup.string().required(),
}).required();

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
