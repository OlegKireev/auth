import { type useFormik } from 'formik';

type Formik = ReturnType<typeof useFormik<any>>;

export const setFormError = (form: Formik, error: string) => {
  form.setStatus(error);
};
