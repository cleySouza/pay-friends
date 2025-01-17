import React from 'react';
import { usePayment, IPayment } from '../../hooks/usePayment';
import {
  Container,
  Header,
  Content,
  Title,
  Box,
  Table,
  ContentRowImpar,
  ContentRowPar,
  TableHeaderContent,
  Checkbox,
  Linha,
  ButtonAdd,
} from './styled';
import { Image } from '../../components';
import logoWhite from '../../assets/PayFriendsWhite.svg';

interface IHomeProps {
  handleOpenAddPaymentModal: (payment: IPayment | null) => void;
}

export function Home({ handleOpenAddPaymentModal }: IHomeProps) {
  const context = usePayment();
  const paymentList = context?.listPayment();

  function HandleRowClick(payment: IPayment) {
    handleOpenAddPaymentModal(payment);
  }

  return (
    <Container>
      <Header>
        <Image src={logoWhite} alt="PayFriends" width={'12.8%'} height={'25.5%'} />
      </Header>
      <Content>
        <Title>Meus pagamentos</Title>
        <ButtonAdd onClick={() => handleOpenAddPaymentModal(null)}>ADICIONAR PAGAMENTO</ButtonAdd>
      </Content>
      <Box>
        <Table>
          <thead>
            <tr>
              <TableHeaderContent>Usuário</TableHeaderContent>
              <TableHeaderContent>Título</TableHeaderContent>
              <TableHeaderContent>Data</TableHeaderContent>
              <TableHeaderContent>value</TableHeaderContent>
              <TableHeaderContent>Pago</TableHeaderContent>
            </tr>
          </thead>
        </Table>
        <Linha />
        <Table>
          <tbody>
            {paymentList?.map((item, index) => (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <tr onClick={() => HandleRowClick(item)}>
                    <ContentRowImpar>{item.user}</ContentRowImpar>
                    <ContentRowImpar>{item.title}</ContentRowImpar>
                    <ContentRowImpar>{item.data}</ContentRowImpar>
                    <ContentRowImpar>R$ {item.value}</ContentRowImpar>
                    <ContentRowImpar>
                      <Checkbox type="checkbox" />
                    </ContentRowImpar>
                  </tr>
                ) : (
                  <tr style={{ background: '#c1c1c1' }} onClick={() => HandleRowClick(item)}>
                    <ContentRowPar>{item.user}</ContentRowPar>
                    <ContentRowPar>{item.title}</ContentRowPar>
                    <ContentRowPar>{item.data}</ContentRowPar>
                    <ContentRowPar>R$ {item.value}</ContentRowPar>
                    <ContentRowPar>
                      <Checkbox type="checkbox" />
                    </ContentRowPar>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Box>
    </Container>
  );
}
