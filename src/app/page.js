import Layout from "../components/layout/Layout";
import Hero from "../components/sections/home/Hero";
import Section1 from "../components/sections/home/Section1";
import Section2 from "../components/sections/home/Section2";
import Section3 from "../components/sections/home/Section3";
import Section4 from "../components/sections/home/Section4";

export default function Home() {
  return (
    <Layout footerStyle={1} noHeaderBg>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
}
