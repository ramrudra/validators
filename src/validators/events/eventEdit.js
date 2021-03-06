import yup from 'yup';
import { transformYupValidationErrors } from '../../helpers/index';
import { createSchema } from './eventCreate';

export const schema = yup.object();

const editSchema = createSchema.concat(schema);

export const asyncValidate = values => editSchema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
