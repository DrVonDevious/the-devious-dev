import Header from "./components/Header"
import Navbar from "./components/Navbar"
import WorkContainer from "./components/WorkContainer"
import StoryContainer from "./components/StoryContainer"
import ContactContainer from "./components/ContactContainer"
import smoothscroll from "smoothscroll-polyfill"
import styled from "styled-components"

const App = () => {
  smoothscroll.polyfill()

  const AppWrapper = styled.div`
    overflow-x: hidden;
  `

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AppWrapper>
        <Header/>
        <WorkContainer/>
        <StoryContainer/>
        <ContactContainer/>
        <Navbar/>
      </AppWrapper>
    </div>
  )
}

export default App
