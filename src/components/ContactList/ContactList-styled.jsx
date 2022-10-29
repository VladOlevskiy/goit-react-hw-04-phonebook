import styled from 'styled-components';

export const Message = styled.span`
  margin-bottom: 30px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-left: 8px;
  width: 88px;
  height: 26px;
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

export const Li = styled.li`
  list-style: none;
`;

export const Info = styled.p`
  display: inline-flex;
  align-items: center;
`;
