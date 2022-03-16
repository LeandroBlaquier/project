import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Cover from "./components/cover/Cover";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Cover />
      <About />
      <Footer />
      <Experience />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
