import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 35%;
  height: 100vh;
  background: #ededed;
  padding-left: 8.8%;
  padding-right: 8.8%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 100vh;
`;

export const Text = styled.h2`
  margin-top: 30px;
  margin-bottom: 90px;
  color: #4e4e4e;
  font-size: 36px;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 5px;
`;
