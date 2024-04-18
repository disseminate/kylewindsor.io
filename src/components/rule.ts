import styled from 'styled-components';

export const HR = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  border: none;
  background: ${(props) => props.theme.Colors.ui};
  margin-bottom: ${(props) => props.theme.sectionSpacing};
`;
