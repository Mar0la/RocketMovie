import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 80px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0 40px 0;

    Button {
      width: max-content;
      height: 48px;
      display: flex;
      gap: 3px;
      align-items: center;
    }
  }



  > main > Section {
   display: flex;
    flex-direction: column;
    gap: 24px;
 
    h2 {
      position: absolute;
      visibility: hidden;
      border: none;
    }
  }
`
