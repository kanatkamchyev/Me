import { Header } from "./components/Header/Header";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
