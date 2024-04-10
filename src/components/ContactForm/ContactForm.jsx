import { Formik, Form, Field, ErrorMessage } from 'formik';


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
    <div>
      <h2>Add New Contact</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}

