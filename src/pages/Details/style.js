import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  padding: 0 80px;

  display: flex;
  flex-direction: column;


  .link {
    display: flex;
    align-items: center;

    margin-top: 40px;
    margin-bottom: 24px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.PINK};
    > svg {
      height: 20px;
      width: 20px;
      margin-right: 8px;
    }
  }

  > Section {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap:24px;
  
    
    h2 {
      position: absolute;
      visibility: hidden;
      border: none;
    }
  }
`;
