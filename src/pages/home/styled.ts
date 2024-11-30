import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* height: 100%; */
`;

export const ContentForm = styled.div`
  height: 100vh;
  width: 35%;
  background: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 8.8%;
  padding-left: 8.8%;
`;

export const ContentBrand = styled.div`
  height: 100vh;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.img``;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 87px;
  font-family: 'Roboto';
  font-size: 36px;
  color: #4e4e4e;
`;

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  padding: 15px;
  border-radius: 10px;
  outline: none;
`;

export const Button = styled.button`
  background: #8cb1f5;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
`;
