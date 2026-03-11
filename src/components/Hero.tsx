import type { SiteVariant } from '../variants';

interface HeroProps {
  variant: SiteVariant;
}

export default function Hero({ variant }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">Sarah Spajic</h1>
        <span className="hero-badge">{variant.badge}</span>
        <h2 className="hero-headline">{variant.headline}</h2>
        <p className="hero-description">{variant.description}</p>
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-glass">Get in Touch</a>
        </div>
      </div>
      <div className="hero-visual">
        {variant.floatingCards.map((card, index) => (
          <div key={card.label} className={`floating-card card-${index + 1}`}>
            <div className="card-icon">{card.icon}</div>
            <span>{card.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
