import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  width: 500px;
  margin-left: 10px;
  padding: 20px 10px;
  border: 1px solid #2a2a2a;
`;

export const Input = styled(Field)`
  margin-left: 10px;
`;

export const ErrorText = styled(ErrorMessage)`
  margin: 5px 0;
  color: red;
`;

export const FormBtn = styled.button`
  margin: 10px 0 0 auto;
  padding: 5px 10px;
  border: 1px solid black;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #4369f5;
    color: white;
  }
`;
