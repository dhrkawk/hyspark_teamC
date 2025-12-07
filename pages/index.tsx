import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MockupFlow from '../components/MockupFlow';
import Pricing from '../components/Pricing';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <MockupFlow />
      <Pricing />
      <Contact />
    </Layout>
  );
}
