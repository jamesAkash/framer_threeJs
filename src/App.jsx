import { Hero, Services } from "./components";
import Test3d from "./components/Test3d";

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
};

export default App;
