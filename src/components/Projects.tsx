import { navigateTo } from '../router';

const rtoTechStack = ['Landing Pages', 'Email Templates', 'After Effects', 'Photoshop', 'Illustrator', 'HTML/CSS', 'Campaign Design'];

const foodfinderTechStack = ['Figma', 'User Research', 'Surveys', 'Statistical Analysis', 'Prototyping'];
const boaTechStack = ['Figma', 'Android Studio', 'A/B Testing', 'Heuristic Evaluation', 'Prototyping'];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Selected work</h2>

        <div className="projects-list">
          <article
            className="project-showcase project-showcase--clickable"
            onClick={() => navigateTo('#/projects/rto')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('#/projects/rto')}
          >
            <div className="project-showcase-split">
              <div className="project-showcase-split-text">
                <div className="project-showcase-header">
                  <div>
                    <h3 className="project-showcase-title">Landing Pages, Email Campaigns & Digital Brand</h3>
                    <p className="project-showcase-client">Rise To Offend Podcast</p>
                  </div>
                  <span className="project-showcase-arrow">→</span>
                </div>

                <p className="project-showcase-description">
                  Eight years of landing pages, email campaigns, motion graphics, and brand assets for a media brand.
                </p>

                <div className="project-showcase-tech">
                  {rtoTechStack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-showcase-split-img">
                <img src="/rto/18513733_1845174079080366_993463804291448832_a.jpg" alt="Rise To Offend yellow logo" />
              </div>
            </div>
          </article>
          <article
            className="project-showcase project-showcase--clickable"
            onClick={() => navigateTo('#/projects/foodfinder')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('#/projects/foodfinder')}
          >
            <div className="project-showcase-split">
              <div className="project-showcase-split-text">
                <div className="project-showcase-header">
                  <div>
                    <h3 className="project-showcase-title">Reducing Restaurant Decision Fatigue</h3>
                    <p className="project-showcase-client">Foodfinder · Georgia Tech CS6750</p>
                  </div>
                  <span className="project-showcase-arrow">→</span>
                </div>

                <p className="project-showcase-description">
                  Needfinding, prototyping, and evaluation of three design alternatives for a personalized restaurant recommendation system.
                </p>

                <div className="project-showcase-tech">
                  {foodfinderTechStack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-showcase-split-img">
                <img src="/foodfinder-preview.png" alt="Foodfinder prototype showing personalized restaurant suggestions" />
              </div>
            </div>
          </article>

          <article
            className="project-showcase project-showcase--clickable"
            onClick={() => navigateTo('#/projects/boa')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('#/projects/boa')}
          >
            <div className="project-showcase-split">
              <div className="project-showcase-split-text">
                <div className="project-showcase-header">
                  <div>
                    <h3 className="project-showcase-title">Improving Mobile Banking Usability</h3>
                    <p className="project-showcase-client">Bank of America · Georgia Tech CS6750</p>
                  </div>
                  <span className="project-showcase-arrow">→</span>
                </div>

                <p className="project-showcase-description">
                  Two design iterations on the BoA mobile app with A/B testing, heuristic evaluation, and a high-fidelity Android Studio prototype.
                </p>

                <div className="project-showcase-tech">
                  {boaTechStack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-showcase-split-img">
                <img src="/boa-preview.png" alt="Bank of America prototype screenshot" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
