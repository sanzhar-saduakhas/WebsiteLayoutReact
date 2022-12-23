import About from "./components/About";
import Categories from "./components/Categories";
import Clients from "./components/Clients";
import Contacts from "./components/Contacts";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shipping from "./components/Shipping";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Shipping />
      <About />
      <Description />
      <Work />
      <Categories />
      <Feedback />
      <Clients />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
