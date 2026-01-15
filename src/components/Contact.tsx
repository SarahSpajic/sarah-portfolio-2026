export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Let's build something meaningful</h2>
        <p className="contact-description">
          I am looking for frontend roles in healthcare technology where I can 
          apply my React and accessibility expertise to improve patient experiences. 
          If you are working on health tech or just want to connect, I would love 
          to hear from you.
        </p>
        <div className="contact-links">
          <a href="mailto:sarahspajic@gmail.com" className="btn btn-primary btn-lg">
            Send an Email
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/sarahspajic" target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
            LinkedIn
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
