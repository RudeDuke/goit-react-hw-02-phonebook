import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 250px;
  min-width: 250px;
  gap: 15px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: currentColor;
`;

export const InputWrapper = styled.div`
  position: relative;
  &:focus-within ${InputIcon} {
    color: #007bff;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #007bff;
  }
`;

export const Button = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  width: 100%;
  transition: 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    background-color: #0056b3;
    box-shadow: 0 0 5px #007bff;
  }
`;
