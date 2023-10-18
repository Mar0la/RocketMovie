import styled from "styled-components";
import backgroundImg from "../../assets/background.png";


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    display: flex;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  p {
    font-size: 14px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin: 0 auto;
    display: flex;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 2.5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
