import { Contact, Hero, Portfolio, Services } from "./components";

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
