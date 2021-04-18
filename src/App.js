import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';


const AppContainer = styled.div `
  box-sizing: border-box;
  /*position: fixed; change just in case*/
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
  /*border: 3px solid black;*/
  position: absolute;
`;

function App() {
  return (
    <AppContainer> 
      <AccountBox />
    </AppContainer>
  );
}

export default App;
