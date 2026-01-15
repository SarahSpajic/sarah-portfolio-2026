export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">Sarah Spajic</h1>
        <span className="hero-badge">Frontend Engineer • Healthcare Tech • Accessibility</span>
        <h2 className="hero-headline">Building Digital Health Experiences That Work for Everyone</h2>
        <p className="hero-description">
          I build accessible, user-centered web applications with React and TypeScript.
          Currently pursuing my MS in Computer Science at Georgia Tech, specializing in 
          Human-Computer Interaction with a focus on digital health equity.
        </p>
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
        <div className="floating-card card-1">
          <div className="card-icon">🏥</div>
          <span>Health Tech</span>
        </div>
        <div className="floating-card card-2">
          <div className="card-icon">♿</div>
          <span>Accessibility</span>
        </div>
        <div className="floating-card card-3">
          <div className="card-icon">⚛️</div>
          <span>React</span>
        </div>
      </div>
    </section>
  );
}
