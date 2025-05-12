import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Plans } from "./components/sections/Plans";
import { Services } from "./components/sections/Services";
import { Support } from "./components/sections/Support";

function App() {
  return (
    <Layout title="G3NET">
      <Hero />
      <Plans />
      <Services />
      <Support />
    </Layout>
  );
}

export default App;
