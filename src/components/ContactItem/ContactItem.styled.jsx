import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 65px;
`;

export const Name = styled.span`
  font-size: 18px;
  text-align: left;
  width: 150px;
`;

export const Number = styled.span`
  font-size: 16px;
  color: #666;
  width: 120px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  transition: 0.3s ease;

  &:hover {
    background-color: #ff6347;
  }

  &:focus {
    box-shadow: 0 0 3px #ff6347;
  }
`;
