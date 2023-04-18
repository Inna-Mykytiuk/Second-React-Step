import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const FormField = styled.div`
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40%;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  margin: 0px auto;

  button {
    padding: 10px 20px;
    background-color: orange;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;

    &:hover,
    &:focus {
      opacity: 1;
      color: #000;
    }

    &:active {
      scale: 0.95;
    }
  }
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Field = styled(FormikField)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
