import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "./ContactForm.module.css"



export default function ContactForm({ addContact }) {
  const initialValues = {
    name: '',
    number: ''
  };

  const onSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.number) {
      errors.number = 'Required';
    }
    return errors;
  };

  return (
    <div className={css.formContainer}>
    
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div className={css.input}>
            <label   htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className={css.err}/>
          </div>
          <div className={css.input}>
            <label  htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" className={css.err} />
          </div>
          <button className={css.button} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}

