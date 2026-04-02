const techStack = ['Figma', 'Android Studio', 'User Research', 'Surveys', 'A/B Testing', 'Heuristic Evaluation', 'Statistical Analysis', 'Prototyping'];

const prototypes = [
  {
    title: 'Redesigned Voice Assistant (Erica)',
    description: 'Replaced the confusing notification-style badge with a universally recognized microphone icon, improving discoverability.',
    result: 'Intuitiveness rated M=4.0/5. Likelihood to use rated M=3.6/5.',
  },
  {
    title: 'Real-Time Account Overview',
    description: 'Balances update immediately after transactions with visual "Refreshing..." indicators. Account section moved to top of home screen.',
    result: 'Clarity rated M=3.8/5. Confidence in real-time data rated M=4.1/5.',
  },
  {
    title: 'Unified Transfer & Zelle Interface',
    description: 'Merged separate Transfer and Zelle flows into a single hub that auto-selects ACH or Zelle based on recipient type.',
    result: 'Transfer clarity rated M=4.0/5. Navigation ease rated M=3.7/5.',
  },
];


export default function BoAProject({ onBack }: { onBack: () => void }) {
  return (
    <section className="project-detail">
      <div className="section-container">
        <button className="project-back" onClick={onBack}>← Back to portfolio</button>

        <div className="project-detail-header">
          <span className="section-label">Case Study</span>
          <h1 className="project-detail-title">Improving Bank of America's Mobile Banking Platform</h1>
          <p className="project-detail-client">Georgia Tech CS6750 - Team Project</p>
        </div>

        <p className="project-detail-description">
          Satisfaction doesn't mean optimal usability. We identified pain points in the BoA mobile app through
          surveys, A/B testing against Chase, and heuristic evaluation, then designed and tested three improvements.
        </p>

        <div className="case-study-cta-centered">
          <a href="https://appetize.io/app/b_tudgum56tnazlwzz6proxuv2du?device=pixel7&osVersion=13.0&toolbar=true" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Try Interactive Prototype →
          </a>
        </div>

        {/* My Role */}
        <div className="project-detail-section">
          <h2>My role</h2>
          <ul className="project-detail-highlights">
            <li>Conducted heuristic evaluation identifying discoverability and system status violations</li>
            <li>Assembled the final high-fidelity prototype in Android Studio from team Figma mock-ups</li>
            <li>Produced the video demonstration of the final prototype</li>
          </ul>
        </div>

        {/* Research */}
        <div className="project-detail-section">
          <h2>Research methods</h2>
          <div className="case-study-methods">
            <div className="case-study-method-card">
              <h3>User Survey (n=16)</h3>
              <p>87.5% access banking via mobile. Top frustrations: cluttered interface, complex navigation, and no subscription tracking.</p>
            </div>
            <div className="case-study-method-card">
              <h3>A/B Testing vs Chase</h3>
              <p>Chase showed cleaner layout, integrated Pay/Transfer, and visible voice assistant. BoA was more cluttered with less discoverable features.</p>
            </div>
            <div className="case-study-method-card">
              <h3>Heuristic Evaluation</h3>
              <p>Found violations in discoverability, system status (balances not updating), and feature accessibility.</p>
            </div>
          </div>
        </div>

        {/* Prototypes */}
        <div className="project-detail-section">
          <h2>Design alternatives</h2>
          <p className="project-detail-section-lede">
            Three prototypes, each targeting a specific pain point identified through research.
          </p>
          <div className="case-study-prototypes">
            {prototypes.map((p) => (
              <div key={p.title} className="case-study-prototype-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="case-study-result">
                  <strong>Evaluation:</strong> {p.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Prototype */}
        <div className="project-detail-section">
          <h2>Final prototype</h2>
          <div className="case-study-design-decisions">
            <div className="case-study-decision">
              <h4>Voice assistant</h4>
              <p>Microphone icon replaces confusing badge, following "Match between system and real world."</p>
            </div>
            <div className="case-study-decision">
              <h4>Account relocation</h4>
              <p>Moved to top of home screen since 85% of users check balance first.</p>
            </div>
            <div className="case-study-decision">
              <h4>Quick transfer actions</h4>
              <p>Home screen buttons reduce distance to frequent actions (Fitts' Law).</p>
            </div>
            <div className="case-study-decision">
              <h4>System status</h4>
              <p>"Refreshing..." text with color change provides visual and text cues for balance updates.</p>
            </div>
          </div>
          <div className="case-study-video-embed">
            <iframe
              src="https://www.youtube.com/embed/lW4tQt7ONgI"
              title="Bank of America Prototype Video Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Final Evaluation */}
        <div className="project-detail-section">
          <h2>Final evaluation results</h2>
          <p className="project-detail-description">
            Tested with 5 participants completing structured tasks on the high-fidelity prototype.
            Paired t-tests showed statistically significant improvements in satisfaction, navigation
            clarity, and aesthetic appeal compared to the existing app.
          </p>
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
