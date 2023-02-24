import { Formik } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { FormikForm, Input, ErrorText, FormBtn } from './ContactForm.styled';

export const ContactForm = ({ onFormSubmit }) => {
  const initialValues = {
    name: '',
  };

  const FormScheme = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormScheme}
      onSubmit={(values, actions) => {
        onFormSubmit(values, actions);
      }}
    >
      <FormikForm autoComplete="off">
        <label>
          Name
          <Input type="text" name="name" />
          <ErrorText name="name" component="p" />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormikForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
