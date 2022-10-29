import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  display: flex;
`;

export const Input = styled.input`
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
