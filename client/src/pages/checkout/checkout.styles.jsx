import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 90vh;
  width: 65%;

  button {
    margin-left: 10px;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #a9a9a9;
  display: flex;
  height: 40px;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 36px;
  margin-left: auto;
  margin-top: 30px;
  text-transform: uppercase;
`;

export const WarningContainer = styled.div`
  color: #d80f0f;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;
