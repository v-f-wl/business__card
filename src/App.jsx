import About from "./components/About"
import Header from "./components/Header"
import Interconnection from "./components/Interconnection"
import Projects from "./components/Projects"
import WelcomeSection from "./components/WelcomeSection"

function App() {

  return (
    <main>
      <Header/>
      <WelcomeSection/>
      <Projects/>
      <About/>
      <Interconnection/>
      <div className="h-[200dvh]"></div>
    </main>
  )
}

export default App
