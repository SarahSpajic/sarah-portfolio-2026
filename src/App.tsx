import { useEffect, useMemo, useState, useCallback } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RTOProject from './components/RTOProject';
import FoodfinderProject from './components/FoodfinderProject';
import BoAProject from './components/BoAProject';
import { getVariant, type SiteVariant } from './variants';
import { navigateTo } from './router';
import './App.css';

type Page = 'home' | 'project-rto' | 'project-foodfinder' | 'project-boa';

function getPageFromHash(): Page {
  const hash = window.location.hash;
  if (hash === '#/projects/rto') return 'project-rto';
  if (hash === '#/projects/foodfinder') return 'project-foodfinder';
  if (hash === '#/projects/boa') return 'project-boa';
  return 'home';
}

export default function App() {
  const variant: SiteVariant = useMemo(() => getVariant(), []);
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goHome = useCallback(() => navigateTo(''), []);

  useEffect(() => {
    if (page !== 'home') return;

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash && !target.hash.startsWith('#/')) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          const navHeight = document.querySelector('.nav')?.clientHeight || 0;
          const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 20;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [page]);

  if (page === 'project-rto') {
    return (
      <>
        <Nav />
        <main>
          <RTOProject onBack={goHome} />
        </main>
        <Footer />
      </>
    );
  }

  if (page === 'project-foodfinder') {
    return (
      <>
        <Nav />
        <main>
          <FoodfinderProject onBack={goHome} />
        </main>
        <Footer />
      </>
    );
  }

  if (page === 'project-boa') {
    return (
      <>
        <Nav />
        <main>
          <BoAProject onBack={goHome} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Hero variant={variant} />
        <Work />
        <Projects />
        <About variant={variant} />
        <Contact variant={variant} />
      </main>
      <Footer />
    </>
  );
}
