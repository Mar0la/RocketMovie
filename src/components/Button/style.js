import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  border: 0;
  border-radius: 10px;

  padding: 0 16px;
  margin-top: 16px;

  background-color: ${({ theme, isNew }) => isNew ? `${theme.COLORS.BACKGROUND_1100}` : `${theme.COLORS.PINK}`};
  color: ${({ theme, isNew }) => !isNew ? `${theme.COLORS.BACKGROUND_1100}` : `${theme.COLORS.PINK}`};

  font-weight: bold;

  &:disabled {
    opacity: 0.5;
  }
`;
