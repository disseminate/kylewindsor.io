import styled from 'styled-components';

export const EmploymentTable = styled.div`
  width: 100%;
`;

export const EmploymentEntry = styled.div`
  display: grid;
  grid-template: ${(props) => props.theme.employmentTemplate};
  gap: ${(props) => props.theme.employmentGap};
  margin-bottom: 14px;

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    grid-template: ${(props) => props.theme.phoneLandscape.employmentTemplate};
  }
  @media screen and (max-width: ${(props) => props.theme.phonePortrait.width}) {
    gap: ${(props) => props.theme.phonePortrait.employmentGap};
  }
`;
export const EmploymentTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  margin-top: 10px;
  max-width: 100%;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  padding: 4px;
  border-radius: 4px;
  font-size: 0.9em;
  border: 1px solid ${(props) => props.theme.Colors.ui2};
  margin-right: 4px;
  margin-bottom: 4px;
  white-space: nowrap;
`;
