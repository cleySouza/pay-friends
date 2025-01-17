import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '../../components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ededed;
`;

export const Title = styled.h1`
  color: #4e4e4e;
  font-family: 'Roboto';
  font-size: 36px;
`;

export const Header = styled.div`
  background: #153250;
  padding: 74px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 102px;
  padding-right: 88px;
  padding-left: 80px;
  padding-bottom: 80px;
  background: #ededed;
`;

export const Box = styled.div`
  background: #ffffff;
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 80px;
  padding-top: 27px;
  border-radius: 10px;
  overflow-y: auto;
`;

export const Table = styled.table`
  min-width: 100%;
  border-spacing: 0;
  text-align: start;
`;

export const TableHeaderContent = styled.th`
  text-align: start;
  padding: 15px 25px;
`;

export const ContentRowImpar = styled.td`
  background: #fff;
  padding: 15px 25px;
`;

export const ContentRowPar = styled.td`
  background: #c1c1c1;
  padding: 15px 25px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  /* accent-color: #8cb1f5; */
  background-color: #000;
  border: 1px solid red;
`;
export const Linha = styled.div`
  width: 100%;
  height: 1px;
  //display: flex;
  background: #c1c1c1;
  margin: 0;
  border: 0;
`;

export const Busca = styled.div`
  border-color: #ededed;
  background: #ffffff;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ededed;
  outline: none;
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    width: 333px;
    background-color: transparent;
  }

  &::placeholder {
    color: #d1d1d1;
  }
`;

export const Lupa = styled(SearchIcon).attrs({
  sx: { fontSize: 18 },
})`
  color: #d1d1d1;
  //font-size: 18px;
`;

export const ButtonAdd = styled(Button)`
  background: #4079c0;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Buttonfilter = styled(Button)`
  margin-left: 19px;
  align-items: center;
  display: flex;
`;

export const ContentFilter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;
