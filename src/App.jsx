import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import Solutions from './components/Solutions.jsx';
import Industries from './components/Industries.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import DemoChat from './components/DemoChat.jsx';
import Differentials from './components/Differentials.jsx';
import Implementation from './components/Implementation.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <Solutions />
        <Industries />
        <HowItWorks />
        <DemoChat />
        <Differentials />
        <Implementation />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
