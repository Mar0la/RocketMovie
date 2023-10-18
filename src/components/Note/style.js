import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ $isDetails, theme }) => !$isDetails ? `${theme.COLORS.BACKGROUND_PINK}`: 'transparent'};

  border: none;
  border-radius: 10px;

  padding: ${({$isDetails}) => $isDetails ? '0' : '32px'};
  text-align: left;
  display: flex;
  flex-direction: column;
  p {
    color: ${({theme}) => theme.COLORS.WHITE}
  }

  .header {
    order: -1;
    display: ${({$isDetails}) => $isDetails ? 'flex' : 'initial'};
    align-items: center;

    > h1 {
      text-align: left;
      margin-bottom: 8px;
      margin-right:  ${({$isDetails}) => $isDetails ? '19px' : '0'};;
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > svg {
      color: ${({theme}) => theme.COLORS.PINK};
      margin-bottom:${({$isDetails}) => !$isDetails ? '15px' : ' 8px'};
    }

      > svg + svg {
        margin-left: 6px;
      }
    }

  .created_at {
    position: ${({$isDetails}) => !$isDetails ? 'absolute' : 'initial'};
    visibility: ${({$isDetails}) => !$isDetails ? 'hidden' : 'visibility'};
    order: -1;
    display:flex;
    align-items: center;
    margin-top: 24px;
   
    color: ${({theme}) => theme.COLORS.WHITE};

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 1.5px
    }

    strong {
      margin-right: 8px
    }

    svg {
      color: ${({theme}) => theme.COLORS.PINK};
      margin-right: 1.5px    
    }
    
  }

  footer {
    order: ${({$isDetails}) => !$isDetails ? '0' : '-1'};
    display: flex;
    gap: 8px;
    margin: ${({$isDetails}) => $isDetails ? '40px 0' : '15px 0'};
  }
`