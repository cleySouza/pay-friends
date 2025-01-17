import styled from 'styled-components';

export const Container = styled.input<{ isError: boolean }>`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${({ isError }) => (isError ? '#ff4d4d' : '#d9d9d9')};
  outline: none;

  &::placeholder {
    color: #d1d1d1;
  }
`;
