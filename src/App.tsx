import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { WhatToExpect } from "./components/sections/WhatToExpect";
import { Schedule } from "./components/sections/Schedule";
//import { Merchandise } from "./components/sections/Merchandise";
import { Countdown } from "./components/sections/Countdown";
import { Sponsors } from "./components/sections/Sponsors";
import { Donations } from "./components/sections/Donations";
import { Faq } from "./components/sections/Faq";

function App() {
  return (
    <Layout title="HOPE '25">
      <Hero />
      <WhatToExpect />
      <Schedule />
      <Countdown />
      {/*<Merchandise />*/}
      <Sponsors />
      <Donations />
      <Faq />
    </Layout>
  );
}

export default App;
