import yup from 'yup';
import { transformYupValidationErrors, validPollOption } from '../../helpers/index';

export const schema = yup.object().shape({
  text: yup.mixed().required().test('options', 'Invalid Options', validPollOption),
});

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
