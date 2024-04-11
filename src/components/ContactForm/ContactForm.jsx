import { Formik, Form, Field, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import css from "./ContactForm.module.css"

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const onSubmit = (values, actions) => {
    const newContact = {
      id: uuidv4(),
      name: values.name,
      number: values.number
    };
    addContact(newContact);
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must not exceed 50 characters'),
    number: Yup.string().required('Number is required').min(3, 'Number must be at least 3 characters').max(50, 'Number must not exceed 50 characters')
  });

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={css.input}>
            <label htmlFor="name">Name</label>
            <Field type="text" id={uuidv4()} name="name" />
            <ErrorMessage name="name" component="div" className={css.err} />
          </div>
          <div className={css.input}>
            <label htmlFor="number">Number</label>
            <Field type="text" id={uuidv4()} name="number" />
            <ErrorMessage name="number" component="div" className={css.err} />
          </div>
          <button className={css.button} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;