const videos = [
  { src: '/rto/videos/logo-reveal-1.mp4', tag: 'Episode · promo', title: 'Episode promo animation', desc: 'Short animated promo to promote a podcast episode on social feeds.' },
  { src: '/rto/videos/woodstock-3-rto.mp4', tag: 'Campaign · Woodstock', title: 'Woodstock, short', desc: 'Promo cut tied to the Woodstock-themed episode run.' },
  { src: '/rto/videos/jerry-springer-01.mp4', tag: 'Episode · talk', title: 'Jerry Springer episode', desc: 'Hook / promo clip for a Springer-themed episode.' },
  { src: '/rto/videos/charles-bukowski.mp4', tag: 'Episode · literature', title: 'Charles Bukowski', desc: 'Promo motion for the Bukowski episode. Typography and pacing tuned for feed scroll.' },
  { src: '/rto/videos/rto-the-joker.mp4', tag: 'Episode · film', title: 'The Joker', desc: 'Animation for a documentary series episode about The Joker.' },
];

interface SocialImage {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
}

const socialImages: SocialImage[] = [
  { src: '/rto/18513733_1845174079080366_993463804291448832_a.jpg', alt: 'RTO brand logo', caption: 'Brand logo, primary social identity' },
  { src: '/rto/southpark.png', alt: 'South Park themed episode graphic', caption: 'Trey Parker & Matt Stone episode promo' },
];

const techStack = ['Landing Pages', 'Email Templates', 'After Effects', 'Photoshop', 'Illustrator', 'HTML/CSS', 'Campaign Design'];

const workflow = [
  { label: 'Tooling', text: 'After Effects for motion; Photoshop for stills and plate art; Illustrator for SVG assets.' },
  { label: 'Structure', text: 'Episode-based promos (Springer, Bukowski, Joker) vs. campaign threads (Woodstock, ICP). Same template discipline as brand marketing: reusable layers, consistent safe zones.' },
  { label: 'Formats', text: '1080p master exports; platform-ready crops where needed.' },
];

export default function RTOProject({ onBack }: { onBack: () => void }) {
  return (
    <section className="project-detail">
      <div className="section-container">
        <button className="project-back" onClick={onBack}>← Back to portfolio</button>

        <div className="project-detail-header">
          <span className="section-label">Project</span>
          <h1 className="project-detail-title">Landing Pages & Digital Brand</h1>
          <p className="project-detail-client">Rise To Offend Podcast</p>
        </div>

        <p className="project-detail-description">
          Eight years owning web design,  motion content, and brand consistency for a podcast.
        </p>

    
        {/* Motion & Video */}
        <div className="project-detail-section">
          <h2>Motion & video</h2>
          <p className="project-detail-section-lede">
            All clips play in the browser. Same files used for social delivery.
          </p>
          <div className="rto-video-grid">
            {videos.map((v) => (
              <figure key={v.src} className="rto-video-card">
                <span className="rto-tag">{v.tag}</span>
                <video controls playsInline preload="metadata" src={`${v.src}#t=0.5`} />
                <figcaption>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Social & Static Graphics */}
        <div className="project-detail-section">
          <h2>Social & static graphics</h2>
          <p className="project-detail-section-lede">
            PNG exports used for Facebook / Instagram / Twitter-era posts and story templates.
          </p>
          <div className="rto-gallery">
            {socialImages.map((img) => (
              <figure key={img.src} className={`rto-gallery-item ${img.credit ? 'rto-gallery-item--credited' : ''}`}>
                <div className="rto-gallery-img-wrap">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  {img.credit && (
                    <div className="rto-credit-overlay">
                      <span>{img.credit}</span>
                    </div>
                  )}
                </div>
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="project-detail-section">
          <h2>Process & workflow</h2>
          <ul className="project-detail-highlights">
            {workflow.map((w) => (
              <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail-tech">
          {techStack.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
