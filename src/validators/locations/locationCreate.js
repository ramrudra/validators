import yup from 'yup';
import { transformYupValidationErrors } from '../../helpers/index';

export const schema = yup.object().shape({
  address: yup.string().required(),
  latitude: yup.string().required(),
  longitude: yup.string().required(),
  sw_lat: yup.string().required(),
  sw_lng: yup.string().required(),
  ne_lat: yup.string().required(),
  google_place_id: yup.string().required(),
  groupId: yup.string().required(),
}).required();

export const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch((res) => { throw transformYupValidationErrors(res); });

export const shouldAsyncValidate = () => true;

export const asyncBlurFields = [];
