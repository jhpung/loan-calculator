import styled from '@emotion/styled';
import css from 'styled-jsx/css';

const Spacing = {
  margin: (unit: number) => css`margin: ${4}`,
};

const ButtonBase = styled.button`
  height: 48px;
`;

export const Button = () => {
  return <ButtonBase css={[]}></ButtonBase>;
};
