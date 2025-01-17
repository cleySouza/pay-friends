import { ImgHTMLAttributes } from 'react';
import { Container } from './styled';

type IImgProps = ImgHTMLAttributes<HTMLImageElement>;

export function Image({ ...res }: IImgProps) {
  return <Container {...res} />;
}
