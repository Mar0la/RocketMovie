import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  background-color: ${({ isDetailsTag ,theme }) => isDetailsTag ? `${theme.COLORS.BACKGROUND_PINK}` : `${theme.COLORS.BACKGROUND_800}`};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
