import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};

  > main {
    grid-area: content;
    overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PINK};
    border-radius: 8px;
    
  }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    flex: 1;
    padding: 15px;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1100};
  }
  .tags:first-child {
    width: 113px;
  }

  .link {
    display: flex;
    align-items: center;

    margin-top: 40px;
    margin-bottom: 24px;
    padding: 0 80px;

    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.PINK};
    > svg {
      height: 20px;
      width: 20px;
      margin-right: 8px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 80px;
  margin: 24px auto;

  > div {
    display: flex;
    gap: 40px;
    
  }

  Section {
    margin: 0;
    padding: 0;
  }

  TextArea {
    height: 274px;
  }
  
  

`

