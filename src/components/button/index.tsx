import { ButtonHTMLAttributes } from 'react';
import { Container } from './styled';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...res }: IButtonProps) {
  return <Container {...res} />;
}
