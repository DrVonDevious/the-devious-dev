import Header from "./components/Header"
import Navbar from "./components/Navbar"
import styled from "styled-components"

const App = () => {
  const AppWrapper = styled.div`
    overflow-x: hidden;
    height: 100vh;
  `

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AppWrapper>
        <Header/>
        <Navbar/>
      </AppWrapper>
    </div>
  )
}

export default App
