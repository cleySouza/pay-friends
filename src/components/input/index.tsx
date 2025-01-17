import { InputHTMLAttributes } from 'react';
import { Container } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

export function Input({ isError, ...res }: IInputProps) {
  return <Container isError={isError} {...res} />;
}
