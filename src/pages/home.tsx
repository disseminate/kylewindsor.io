import * as React from 'react';
import { Link } from 'react-router-dom';
import { H1, H2, H3, P } from '../components/typography';
import styled from 'styled-components';
import { EmploymentEntry, EmploymentTable, EmploymentTags, Tag } from '../components/employment';
import { TechnologiesTable } from '../components/skills';
import { HR } from '../components/rule';
import { Section } from '../components/whitespace';
import { WORK_EXPERIENCES } from '../data/workExperience';
import { ESkillLocus, SKILLS } from '../data/skills';

const MainPage = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;

  background: ${(props) => props.theme.Colors.bg};
  color: ${(props) => props.theme.Colors.tx};
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: ${(props) => props.theme.fontSizeBaseline};
  font-weight: ${(props) => props.theme.textWeight};

  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props) => props.theme.bodyPadding};

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    padding: ${(props) => props.theme.phoneLandscape.bodyPadding};
  }
  @media screen and (max-width: ${(props) => props.theme.phonePortrait.width}) {
    padding: ${(props) => props.theme.phonePortrait.bodyPadding};
  }
`;

const CenterColumn = styled.div`
  max-width: ${(props) => props.theme.pageWidth};

  @media screen and (max-width: ${(props) => props.theme.phoneLandscape.width}) {
    max-width: ${(props) => props.theme.phoneLandscape.pageWidth};
  }
`;

interface ISkillColumnProps {
  name: string;
  locus: ESkillLocus;
}

const SkillColumn = (props: ISkillColumnProps) => {
  return (
    <div className="technologies-table-column">
      <H3>{props.name}</H3>
      <ul>
        {SKILLS.filter((skill) => skill.locus == props.locus).map((skill) => (
          <li key={skill.name}>
            {skill.name}
            {skill.subskills ? (
              <ul>
                {skill.subskills.map((subskill) => (
                  <li key={subskill}>{subskill}</li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  const [years, _] = React.useState(new Date().getFullYear() - 2013);

  return (
    <MainPage>
      <CenterColumn>
        <header>
          <H1>Kyle Windsor</H1>
        </header>
        <HR />
        <Section aria-labelledby="about">
          <P>I'm a programmer. I've been programming professionally for {years} years and unprofessionally for many more.</P>
          <P>I'm proficient in various web technologies and game engines.</P>
          <P>
            For something more concise, please see <Link to="/resume">my printable resume</Link>.
          </P>
          <TechnologiesTable>
            <SkillColumn name="Front-end" locus={ESkillLocus.FrontEnd} />
            <SkillColumn name="Back-end" locus={ESkillLocus.BackEnd} />
            <SkillColumn name="Games & Low-Level" locus={ESkillLocus.Games} />
          </TechnologiesTable>
        </Section>
        <Section aria-labelledby="work-experience">
          <H2 id="work-experience">Work Experience</H2>
          <EmploymentTable>
            {WORK_EXPERIENCES.filter((experience) => !experience.omitFromResumeIfNeeded).map((experience) => (
              <EmploymentEntry key={experience.name}>
                <div>
                  <a href={experience.url}>{experience.name}</a>
                </div>
                {experience.startYear === experience.endYear ? (
                  <div className="tx2">{experience.startYear}</div>
                ) : (
                  <div className="tx2">
                    {experience.startYear} &mdash; {experience.endYear || 'Present'}
                  </div>
                )}
                <div>
                  <div>{experience.description}</div>
                  <EmploymentTags>
                    {experience.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </EmploymentTags>
                </div>
              </EmploymentEntry>
            ))}
          </EmploymentTable>
        </Section>
        <Section aria-labelledby="projects">
          <H2 id="projects">Ongoing Projects</H2>
          <ul>
            <li>
              <a href="https://vein.gg/">VEIN</a>, multiplayer open-world survival game. Nearly 1,000,000 Steam wishlist adds and over 300,000 sales. C++, Node.
            </li>
            <li>
              <a href="https://pomelolanguage.com/">Pomelo</a>, language-learning platform designed as an{' '}
              <a href="https://apps.ankiweb.net/">Anki</a> replacement. React, Node, Typescript, PostgreSQL.
            </li>
          </ul>
          <P>There are too many projects I've worked on prior to these to list. If you're curious please get in contact.</P>
          <P>
            You can also take a look at my <a href="https://github.com/disseminate">GitHub</a> but most of my projects are private.
          </P>
        </Section>
        <Section aria-labelledby="education">
          <H2 id="education">Education</H2>
          <P>
            I attended <a href="https://uwo.ca/">the University of Western Ontario</a> for 7 years. I earned my BSc in computer science and
            astrophysics, followed by my MSc in computer science. I had a brief period of astrophysics study at the{' '}
            <a href="https://www.hku.hk/">University of Hong Kong</a>.
          </P>
          <P>
            You can read <a href="/bachelor-thesis.pdf">my bachelor's thesis here</a>. My{' '}
            <a href="https://uwo.scholaris.ca/items/d282b9b7-6366-4a20-a2d5-4d1e1b715a98"> master's thesis is available here</a>.
          </P>
        </Section>
        <Section aria-labelledby="personal">
          <H2 id="personal">Personal</H2>
          <P>
            My hobbies include language learning (studying Chinese, Cantonese, Spanish, Thai, and Hindi) and collecting
            geodes.
          </P>
          <P>I watch a ton of movies, especially dramas, thrillers, and sci-fi, and maintain a somewhat large personal collection.</P>
          <P>
            My favorite music genres include electronic (drum and bass, Y2K, industrial, house, trip hop, bass), folk, and progressive rock.
            You can <a href="https://open.spotify.com/user/22ayc3ifl5r2rm2qbn232yqzi?si=2a21a8e1568c4a55"> view my Spotify profile here</a>.
          </P>
          <P>
            My favorite author is <a href="https://www.gregegan.net/">Greg Egan</a>. You should buy some of his anthologies if you're at all
            interested in hard sci-fi.
          </P>
          <P>
            My favorite games include <a href="https://en.wikipedia.org/wiki/Subnautica">Subnautica</a>, the{' '}
            <a href="https://en.wikipedia.org/wiki/Half-Life_(series)">Half-Life</a> series,{' '}
            <a href="https://en.wikipedia.org/wiki/Left_4_Dead_(franchise)">Left 4 Dead 1 &amp; 2</a>, the{' '}
            <a href="https://en.wikipedia.org/wiki/Mass_Effect">Mass Effect</a> series,{' '}
            <a href="https://en.wikipedia.org/wiki/Fallout:_New_Vegas">Fallout: New Vegas</a>, and{' '}
            <a href="https://en.wikipedia.org/wiki/Project_Zomboid">Project Zomboid</a>. Generally I enjoy first-person shooters, RPGs, and
            simulation games. I also play a lot of games in VR.
          </P>
          <P>
            My <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator">MBTI</a> is ENTJ.
          </P>
        </Section>
        <Section aria-labelledby="contact">
          <H2 id="contact">Contact</H2>
          <P>
            Send an email to <a href="mailto:kyle@kylewindsor.io">kyle@kylewindsor.io</a>.
          </P>
        </Section>
        <Section aria-label="Website Source Code">
          <P>
            This site is written in <a href="https://react.dev/">React</a> via <a href="https://www.typescriptlang.org/">TypeScript</a>{' '}
            using the excellent <a href="https://styled-components.com/">styled-components</a> library. You can{' '}
            <a href="https://github.com/disseminate/kylewindsor.io">find the source here</a>.
          </P>
        </Section>
      </CenterColumn>
    </MainPage>
  );
};

export default Home;
