import * as React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import ResumeComponent from '../components/resume';
import { jsPDF } from 'jspdf';
import { Link } from 'react-router-dom';

const Background = styled.div`
  @media screen {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;

    padding: 50px;
    box-sizing: border-box;
  }
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ResumePageSimulator = styled.div`
  @media screen {
    position: relative;

    width: 850px;
    height: 1100px;
    overflow: hidden;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);

    background-color: white;
  }
`;

const Links = styled.div`
  margin-top: 20px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  @media print {
    display: none;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.Colors.re};
    &:hover {
      color: ${(props) => props.theme.Colors.re};
    }
    cursor: pointer;
  }
`;

const Resume = () => {
  const [queryParams, _] = useSearchParams();

  let filter: 'web' | 'game' | 'all' = 'all';
  if (queryParams.has('web')) {
    filter = 'web';
  }
  if (queryParams.has('games')) {
    filter = 'game';
  }

  const save = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const doc = new jsPDF('p', 'in', [8.5, 11]);
    doc.html(document.getElementById('resume')!, { html2canvas: { scale: 1 / 100 } }).then(() => {
      const now = new Date();
      doc.save(`resume-kyle-windsor-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}.pdf`);
    });
  };

  return (
    <Background>
      <VerticalContainer>
        <ResumePageSimulator>
          <ResumeComponent filter={filter} />
        </ResumePageSimulator>
        <Links>
          <a onClick={save}>Save to PDF</a> | <Link to="/">Back</Link>
        </Links>
      </VerticalContainer>
    </Background>
  );
};

export default Resume;
