import { Field as FormikField, Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
`;

export const Field = styled(FormikField)`
  width: 170px;
  height: 20px;
  margin-left: 5px;
  background-color: #d9d9d9;
  border: none;
  box-shadow: 0px 1px 0px rgb(0 0 0), 0px 1px 4px rgb(0 0 0 / 63%),
    0px 2px 3px rgb(0 0 0 / 42%);
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #5eb164;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 35px;
  background-color: #5eb164;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  border: none;
  box-shadow: 0px 1px 7px rgb(0 0 0), 0px 1px 8px rgb(0 0 0 / 67%),
    0px 2px 3px rgb(0 0 0 / 47%);
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: white;
    color: #217a0b;
  }
`;
