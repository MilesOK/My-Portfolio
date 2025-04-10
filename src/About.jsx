import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Styled Components
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: #2c3e50;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

// New Button styling
const Button = styled.button`
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none; // Removed border
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #2980b9, #3498db);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const BoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
  
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(50px)'};
  
  &:hover {
    transform: ${props => props.inView ? 'translateY(-5px)' : 'translateY(50px)'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BoxTitle = styled.h3`
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const BoxContent = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  margin: 0;
`;

const SkillTag = styled.span`
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin: 0.3rem;
`;

const About = () => {


  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });

 

  useEffect(() => {
    setSkills(['JavaScript', 'React', 'CSS', 'HTML']);
    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading...</div>;


  return (
    <AboutContainer>
      <Title>About Me</Title>
      <BoxesContainer>
        <Box ref={ref1} inView={inView1}>
          <BoxTitle>Experience</BoxTitle>
          <BoxContent>
            <small>Less than 2 years</small>
            <p>Frontend Development</p>
          </BoxContent>
        </Box>

        <Box ref={ref2} inView={inView2}>
          <BoxTitle>Projects</BoxTitle>
          <BoxContent>
            <strong>1 Completed</strong>
            <p>Currently in progress</p>
          </BoxContent>
        </Box>

        <Box ref={ref3} inView={inView3}>
          <BoxTitle>Skills</BoxTitle>
          <BoxContent>
            {skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </BoxContent>
        </Box>
      </BoxesContainer>

    </AboutContainer>
  );
};

export default About;