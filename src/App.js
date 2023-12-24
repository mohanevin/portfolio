
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme } from './utils/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';

const Body = styled.div`
  background-color:${({ theme }) => theme.bg};
  width:100%;
  overflow-x:hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #333333);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);

`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience/>
          </Wrapper>
          <Wrapper>
            <Projects/>
            <Contact />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
