import { Button, Container, ContentBrand, ContentForm, Form, Image, Input, Title } from './styled';
import ImageBrand from '../../assets/brand.svg';
import ImageLogo from '../../assets/logo.svg';

export function Home() {
  return (
    <Container>
      <ContentForm>
        <Form>
          <Image src={ImageLogo} width={160} height={30} />
          <Title>Bem vindo de volta</Title>
          <Input placeholder="Email" />
          <Input
            placeholder="Senha"
            style={{
              marginTop: '15px',
              marginBottom: '30px',
            }}
          />
          <Button>ENTRAR</Button>
        </Form>
      </ContentForm>
      <ContentBrand>
        <Image src={ImageBrand} width={'87%'} height={'87%'} />
      </ContentBrand>
    </Container>
  );
}
