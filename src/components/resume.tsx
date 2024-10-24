import * as React from 'react';
import styled from 'styled-components';
import { ResumeHeader, ResumeSubheader } from './typography';
import { ESkillLocus, SKILLS } from '../data/skills';
import { EWorkExperienceRealm, WORK_EXPERIENCES } from '../data/workExperience';

const PADDING = 50;

const ResumeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  width: 100%;
  height: auto;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  font-family: Arial, sans-serif;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;

  font-size: 12px;

  padding: ${PADDING}px;
  box-sizing: border-box;
`;

const Sidebar = styled.div`
  width: 300px;
  height: 100%;
  color: black;
`;

const Profile = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const ProfileName = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  line-break: anywhere;
  font-size: 1.5em;
`;

const ProfileContactBox = styled.div`
  margin-bottom: 30px;
`;

const ProfileLine = styled.div`
  margin-bottom: 6px;
  max-width: 100%;
  line-break: anywhere;
  opacity: 0.8;
`;

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
  margin-left: ${PADDING}px;
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
  font-weight: bold;
`;
const WorkExperienceURL = styled.div`
  opacity: 0.7;
`;
const WorkExperienceDate = styled.div`
  color: ${(props) => props.theme.Colors.ui3};
`;
const WorkExperienceDescription = styled.div`
  color: ${(props) => props.theme.Colors.ui1};
  max-width: 80%;
`;

interface IResumeComponentProps {
  filter: 'web' | 'game' | 'all';
  veinWishlists?: number;
}

const ResumeComponent = (props: IResumeComponentProps) => {
  return (
    <ResumeContainer id="resume">
      <Sidebar>
        <Profile>
          <ProfileName>Kyle Windsor</ProfileName>
          <ProfileContactBox>
            <ProfileLine>kyle@kylewindsor.io</ProfileLine>
            <ProfileLine>kylewindsor.io</ProfileLine>
            <ProfileLine>linkedin.com/in/disseminate/</ProfileLine>
            <ProfileLine>github.com/disseminate/</ProfileLine>
          </ProfileContactBox>
          <ResumeHeader>Skills</ResumeHeader>
          <ResumeSubheader>Front-end</ResumeSubheader>
          <ul>
            {SKILLS.filter((skill) => skill.locus == ESkillLocus.FrontEnd).map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
          <ResumeSubheader>Back-end</ResumeSubheader>
          <ul>
            {SKILLS.filter((skill) => skill.locus == ESkillLocus.BackEnd).map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
          <>
            <ResumeSubheader>Games & Low-Level</ResumeSubheader>
            <ul>
              {SKILLS.filter((skill) => skill.locus == ESkillLocus.Games).map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </>
        </Profile>
      </Sidebar>
      <Main>
        <ResumeHeader>Employment Experience</ResumeHeader>
        {WORK_EXPERIENCES.filter((experience) => {
          if (props.filter === 'web') {
            return experience.realm.includes(EWorkExperienceRealm.Web);
          }
          if (props.filter === 'game') {
            return experience.realm.includes(EWorkExperienceRealm.Games);
          }
          return !experience.omitFromResumeIfNeeded;
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
              <WorkExperienceName>Master of Science, Computer Vision &amp; Artificial Intelligence</WorkExperienceName>
              <WorkExperienceURL>https://uwo.ca/</WorkExperienceURL>
            </div>
            <WorkExperienceDate>2015 — 2017</WorkExperienceDate>
          </WorkExperienceHeader>
          <WorkExperienceDescription>University of Western Ontario</WorkExperienceDescription>
        </WorkExperience>
        <WorkExperience>
          <WorkExperienceHeader>
            <div>
              <WorkExperienceName>Bachelor of Science, Computer Science &amp; Astrophysics</WorkExperienceName>
              <WorkExperienceURL>https://uwo.ca/</WorkExperienceURL>
            </div>
            <WorkExperienceDate>2011 — 2015</WorkExperienceDate>
          </WorkExperienceHeader>
          <WorkExperienceDescription>University of Western Ontario</WorkExperienceDescription>
        </WorkExperience>
        <ResumeHeader>Ongoing Projects</ResumeHeader>
        <WorkExperience>
          <WorkExperienceHeader>
            <div>
              <WorkExperienceName>VEIN</WorkExperienceName>
              <WorkExperienceURL>https://vein.gg/</WorkExperienceURL>
            </div>
            <div></div>
          </WorkExperienceHeader>
          <WorkExperienceDescription>
            Multiplayer open-world survival game. {(props.veinWishlists || 84000).toLocaleString()} Steam wishlist preorders and counting.
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
  );
};

export default ResumeComponent;
