import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import HeroAnimation from './HeroAnimation';
import Lottie from "lottie-react";
import animationData from '../assets/animation/Animation.json'

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;

  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
`;


const HeroBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroRight = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const HeroLeft = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Name = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.black};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(50, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(50, 100%, 50%, 1) 0%, hsla(70, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(50, 100%, 50%, 1) 0%, hsla(70, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(50, 100%, 50%, 1) 0%, hsla(70, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
const Img = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {

  const roles=["React Developer","Programmer","Frontend Developer"]
  const bio="I am a passionate Front-End Developer specializing in crafting intuitive, responsive websites using HTML5, CSS3, and JavaScript frameworks. I collaborate seamlessly with design teams, staying updated with emerging trends to continuously push the boundaries of web development."
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBackground>
          <HeroAnimation/>
        </HeroBackground>
        <HeroInnerContainer>
          <HeroLeft>
            <Name>
              Hi, I am <br/> Mohan I
            </Name>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{bio}</SubTitle>
            <ResumeButton target='display' href='https://drive.google.com/file/d/1-G3sS-kL68qlva0vXTGsJcyKWXg1Bbqu/view?usp=sharing'>Check Resume</ResumeButton>
          </HeroLeft>
          <HeroRight>
                <Img>
                    <Lottie animationData={animationData} loop={true} />
                </Img>
          </HeroRight>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero