import * as React from 'react';
import { H3, ResumeHeader } from '../components/typography';
import styled from 'styled-components';
import { ESkillLocus, SKILLS } from '../data/skills';
import { EWorkExperienceRealm, WORK_EXPERIENCES } from '../data/workExperience';
import { useSearchParams } from 'react-router-dom';

const Background = styled.div`
  @media screen {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;

    padding: 100px;
    box-sizing: border-box;
  }
`;

const ResumePageSimulator = styled.div`
  @media screen {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;

    width: 850px;
    height: 1100px;
    overflow: hidden;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);

    background-color: white;
  }
`;

const ResumeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  width: 100%;
  height: 100%;

  font-family: Arial, sans-serif;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;

  font-size: 12px;
`;

const Sidebar = styled.div`
  width: 350px;
  background: ${(props) => props.theme.Colors.re};
  height: 100%;
  color: white;

  @media print {
    background: transparent;
    color: black;
  }
`;

const Profile = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.Colors.bg2};
  padding: 30px;
  box-sizing: border-box;

  @media print {
    background-color: transparent;
    padding: 10px;
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 20px;

  @media print {
    width: 80%;
  }
`;

const ProfileName = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  line-break: anywhere;
  font-size: 1.5em;
`;

const ProfileLine = styled.div`
  margin-bottom: 4px;
  max-width: 100%;
  line-break: anywhere;
`;

const SidebarDetails = styled.div`
  padding: 30px;
  box-sizing: border-box;
  @media print {
    padding: 10px;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

const WorkExperience = styled.div`
  margin-bottom: 20px;
`;
const WorkExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 4px;
`;
const WorkExperienceName = styled.div`
  font-size: 1.2em;
`;
const WorkExperienceURL = styled.div`
  opacity: 0.7;
`;
const WorkExperienceDate = styled.div`
  color: ${(props) => props.theme.Colors.ui3};
`;
const WorkExperienceDescription = styled.div`
  color: ${(props) => props.theme.Colors.ui1};
  max-width: 90%;
`;

const Resume = () => {
  const [queryParams, _] = useSearchParams();

  return (
    <Background>
      <ResumePageSimulator>
        <ResumeContainer>
          <Sidebar>
            <Profile>
              <ProfileImageContainer>
                <ProfileImage src="/profile.jpg" alt="Headshot" />
              </ProfileImageContainer>
              <ProfileName>Kyle Windsor</ProfileName>
              <ProfileLine>kyle@kylewindsor.io</ProfileLine>
              <ProfileLine>kylewindsor.io</ProfileLine>
              <ProfileLine>linkedin.com/in/disseminate/</ProfileLine>
              <ProfileLine>github.com/disseminate/</ProfileLine>
            </Profile>
            <SidebarDetails>
              <ResumeHeader>Skills</ResumeHeader>
              <ResumeHeader>Front-end</ResumeHeader>
              <ul>
                {SKILLS.filter((skill) => skill.locus == ESkillLocus.FrontEnd).map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
              <ResumeHeader>Back-end</ResumeHeader>
              <ul>
                {SKILLS.filter((skill) => skill.locus == ESkillLocus.BackEnd).map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
              <>
                <ResumeHeader>Games & Low-Level</ResumeHeader>
                <ul>
                  {SKILLS.filter((skill) => skill.locus == ESkillLocus.Games).map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
                </ul>
              </>
            </SidebarDetails>
          </Sidebar>
          <Main>
            <ResumeHeader>Employment Experience</ResumeHeader>
            {WORK_EXPERIENCES.filter((experience) => {
              if (queryParams.has('web')) {
                return experience.realm.includes(EWorkExperienceRealm.Web);
              }
              if (queryParams.has('games')) {
                return experience.realm.includes(EWorkExperienceRealm.Games);
              }
              if (queryParams.has('minimal')) {
                return !experience.omitFromResumeIfNeeded;
              }
              return true;
            }).map((experience) => (
              <WorkExperience key={experience.name}>
                <WorkExperienceHeader>
                  <div>
                    <WorkExperienceName>{experience.name}</WorkExperienceName>
                    <WorkExperienceURL>{experience.url}</WorkExperienceURL>
                  </div>
                  {experience.startYear ? (
                    <WorkExperienceDate>
                      {experience.startYear === experience.endYear
                        ? experience.startYear
                        : `${experience.startYear} — ${experience.endYear || 'Present'}`}
                    </WorkExperienceDate>
                  ) : (
                    <div></div>
                  )}
                </WorkExperienceHeader>
                <WorkExperienceDescription>{experience.description}</WorkExperienceDescription>
              </WorkExperience>
            ))}
            <ResumeHeader>Education</ResumeHeader>
            <WorkExperience>
              <WorkExperienceHeader>
                <div>
                  <WorkExperienceName>University of Western Ontario</WorkExperienceName>
                  <WorkExperienceURL>https://uwo.ca/</WorkExperienceURL>
                </div>
                <WorkExperienceDate>2011 — 2017</WorkExperienceDate>
              </WorkExperienceHeader>
              <WorkExperienceDescription>
                BSc, Computer Science; MSc, Computer Vision &amp; Artificial Intelligence
              </WorkExperienceDescription>
            </WorkExperience>
            <ResumeHeader>Projects</ResumeHeader>
            <WorkExperience>
              <WorkExperienceHeader>
                <div>
                  <WorkExperienceName>VEIN</WorkExperienceName>
                  <WorkExperienceURL>https://vein.gg/</WorkExperienceURL>
                </div>
                <div></div>
              </WorkExperienceHeader>
              <WorkExperienceDescription>
                Multiplayer open-world survival game. 70,000 Steam wishlist preorders and counting.
              </WorkExperienceDescription>
            </WorkExperience>
            <WorkExperience>
              <WorkExperienceHeader>
                <div>
                  <WorkExperienceName>Pomelo</WorkExperienceName>
                  <WorkExperienceURL>https://pomelolanguage.com/</WorkExperienceURL>
                </div>
                <div></div>
              </WorkExperienceHeader>
              <WorkExperienceDescription>Language-learning platform designed as an Anki replacement.</WorkExperienceDescription>
            </WorkExperience>
          </Main>
        </ResumeContainer>
      </ResumePageSimulator>
    </Background>
  );
};

export default Resume;
