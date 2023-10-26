import styled from 'styled-components'
import  { Link } from 'react-router-dom'


export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  padding: 0 80px;

  > h2 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
    padding-bottom: 12px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:hover {
      filter: none;
  }

   img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  
  img:hover {
    border: 2px solid ${({theme}) => theme.COLORS.PINK}
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;
    text-align: right;
  }

  > div strong {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  text-align: right;
  > span {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
  > span:hover {
    color: ${({theme}) => theme.COLORS.PINK}
  }
`