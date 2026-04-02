const techStack = ['Figma', 'User Research', 'Surveys', 'Heuristic Evaluation', 'Statistical Analysis', 'Prototyping', 'Python'];

const prototypes = [
  {
    title: 'Personalized Suggestion List',
    description: 'A ranked list of 5-10 tailored options based on preferences and past behavior, with "Show me more like this" and fine-tune sliders.',
    result: '92% found it Easy or Very Easy to understand (M=3.24/4).',
    figma: 'https://www.figma.com/proto/WBdBAPukSQsomPqbMt7e1o/',
  },
  {
    title: 'Tinder-Like Swipe UI',
    description: 'Full-screen cards with image carousel and AI justification. Swipe right to save, left to skip.',
    result: 'Swipe ease rated M=2.60/4. Gesture input hurt overall usability.',
    figma: 'https://www.figma.com/design/DfNLQNWzFzTDhN8vSGMj59/',
  },
  {
    title: 'Comparison-Centered Interface',
    description: 'Side-by-side comparison of two restaurants with aligned attributes: rating, price, distance, hours, cuisine, and dietary tags.',
    result: 'Attribute consistency rated M=4.32/5, highest score across all prototypes.',
    figma: 'https://sax-scrum-13629738.figma.site',
  },
];

export default function FoodfinderProject({ onBack }: { onBack: () => void }) {
  return (
    <section className="project-detail">
      <div className="section-container">
        <button className="project-back" onClick={onBack}>← Back to portfolio</button>

        <div className="project-detail-header">
          <span className="section-label">Case Study</span>
          <h1 className="project-detail-title">Foodfinder: Reducing Restaurant Decision Fatigue</h1>
          <p className="project-detail-client">Georgia Tech CS6750 - Team Project</p>
        </div>

        <p className="project-detail-description">
          Navigation apps help you find a restaurant, but they don't help you decide what to eat.
          We designed and evaluated three approaches to reduce decision fatigue through personalized recommendations.
        </p>

        {/* My Role */}
        <div className="project-detail-section">
          <h2>My role</h2>
          <ul className="project-detail-highlights">
            <li>Conducted needfinding research including user surveys and competitive analysis</li>
            <li>Co-designed prototypes in Figma for all three design alternatives</li>
            <li>Ran evaluation surveys and contributed to statistical analysis (Friedman test, Wilcoxon signed-rank)</li>
          </ul>
        </div>

        {/* Problem */}
        <div className="project-detail-section">
          <h2>The problem</h2>
          <ul className="project-detail-highlights">
            <li><strong>Too many options:</strong> Users scroll without clear guidance</li>
            <li><strong>Inefficient comparison:</strong> Comparing menus, prices, and reviews across tabs is tedious</li>
          </ul>
        </div>

        {/* Needfinding */}
        <div className="project-detail-section">
          <h2>Research methods</h2>
          <div className="case-study-methods">
            <div className="case-study-method-card">
              <h3>Survey (n=25)</h3>
              <p>Gathered data on dining frequency, app usage, and decision-making patterns. Overwhelming choice was the top frustration.</p>
            </div>
            <div className="case-study-method-card">
              <h3>Heuristic Evaluation</h3>
              <p>Evaluated Google Maps against Nielsen's heuristics. Found no side-by-side comparison and weak preference learning.</p>
            </div>
            <div className="case-study-method-card">
              <h3>Play Store Analysis</h3>
              <p>Analyzed 50 Google Maps reviews. 94% contained complaints relevant to restaurant selection.</p>
            </div>
          </div>
        </div>

        {/* Prototypes */}
        <div className="project-detail-section">
          <h2>Design alternatives</h2>
          <p className="project-detail-section-lede">
            Three distinct approaches, each targeting a different decision-making style.
          </p>
          <div className="case-study-prototypes">
            {prototypes.map((p) => (
              <div key={p.title} className="case-study-prototype-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="case-study-result">
                  <strong>Evaluation:</strong> {p.result}
                </div>
                {p.figma && (
                  <a href={p.figma} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-sm">
                    View Figma Prototype
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="project-detail-section">
          <h2>Key findings</h2>
          <ul className="project-detail-highlights">
            <li>Friedman test showed significant differences in ease of use (X2(2)=10.95, p=0.0042)</li>
            <li>Swipe UI was significantly harder to use than both alternatives</li>
            <li>Suggestion List earned the most first-place rankings, closely followed by Comparison</li>
            <li>Recommended a hybrid: Suggestion List for discovery, Comparison for final selection</li>
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
