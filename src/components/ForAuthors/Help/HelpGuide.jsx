import { Link } from "react-router-dom";
import FlowDiagram from "./FlowDiagram";

const HelpGuide = ({ guide }) => (
  <section className="help-guide" aria-labelledby={`help-guide-${guide.id}`}>
    <header className="help-guide-header">
      <div>
        <h2 id={`help-guide-${guide.id}`}>{guide.title}</h2>
        <p>{guide.description}</p>
      </div>
      <Link className="help-guide-link" to={guide.link}>
        {guide.linkText}
      </Link>
    </header>
    <FlowDiagram title={guide.title} steps={guide.steps} />
  </section>
);

export default HelpGuide;
