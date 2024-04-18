import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0;
  font-size: ${(props) => props.theme.headerFontSize};
  max-width: ${(props) => props.theme.pageWidth};
  font-weight: ${(props) => props.theme.titleWeight};

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    font-size: ${(props) => props.theme.phoneLandscape.headerFontSize};
    max-width: ${(props) => props.theme.phoneLandscape.pageWidth};
  }
`;

export const H2 = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.subheaderFontSize};
  max-width: ${(props) => props.theme.pageWidth};
  font-weight: ${(props) => props.theme.headerWeight};

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    max-width: ${(props) => props.theme.phoneLandscape.pageWidth};
  }
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: ${(props) => props.theme.subsubheaderFontSize};
  max-width: ${(props) => props.theme.pageWidth};
  font-weight: ${(props) => props.theme.headerWeight};

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    max-width: ${(props) => props.theme.phoneLandscape.pageWidth};
  }
`;

export const P = styled.p`
  margin-top: 0;

  max-width: ${(props) => props.theme.pageWidth};
  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    max-width: ${(props) => props.theme.phoneLandscape.pageWidth};
  }
`;

export const ResumeHeader = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.subsubheaderFontSize};
  font-weight: ${(props) => props.theme.headerWeight};
`;

export const ResumeSubheader = styled(ResumeHeader)`
  font-size: 1.3em;
`;
