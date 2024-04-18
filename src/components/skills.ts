import styled from 'styled-components';

export const TechnologiesTable = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: ${(props) => props.theme.techTableColumns};
  column-gap: 50px;
  max-width: ${(props) => props.theme.pageWidth};

  padding: ${(props) => props.theme.technologiesPadding};
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.technologiesBorderRadius};
  border: 1px solid ${(props) => props.theme.Colors.ui};

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    max-width: ${(props) => props.theme.phoneLandscape.pageWidth};
  }
  @media screen and (max-width: ${(props) => props.theme.phonePortrait.width}) {
    grid-template-columns: ${(props) => props.theme.phonePortrait.techTableColumns};
    padding: ${(props) => props.theme.phonePortrait.technologiesPadding};
    border-radius: ${(props) => props.theme.phonePortrait.technologiesBorderRadius};
  }
`;
