import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin: 0 auto;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 15px;
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: currentColor;
  font-size: 13px;
`;

export const InputWrapper = styled.div`
  position: relative;
  &:focus-within ${InputIcon} {
    color: #007bff;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  padding-left: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #007bff;
  }
`;
