import type { SiteVariant } from '../variants';
import HeroScene from './HeroScene';

interface HeroProps {
  variant: SiteVariant;
}

export default function Hero({ variant }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <HeroScene />
      <div className="hero-content">
        <span className="hero-label">{variant.badge}</span>
        <h1 className="hero-name">Sarah Spajic</h1>
        <p className="hero-subtitle">{variant.headline}</p>
        <p className="hero-description">{variant.description}</p>
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary">
            View Selected Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
