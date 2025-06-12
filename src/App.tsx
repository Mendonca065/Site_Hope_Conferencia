import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
//import { Merchandise } from "./components/sections/Merchandise";
import { Countdown } from "./components/sections/Countdown";
import { Sponsors } from "./components/sections/Sponsors";
import { Donations } from "./components/sections/Donations";

function App() {
  return (
    <Layout title="HOPE '25">
      <Hero />
      <Countdown />
      {/*<Merchandise />*/}
      <Sponsors />
      <Donations />
    </Layout>
  );
}

export default App;
