import helpData from "../../../data/help.json";
import DateFlowchart from "./DateFlowchart";
import HelpGuide from "./HelpGuide";
import "./Help.css";

const Help = () => (
  <div className="author-help">
    <header className="author-help-header">
      <h1>{helpData.header.title}</h1>
      <p>{helpData.header.description}</p>
    </header>

    <DateFlowchart />

    <div className="author-help-guides">
      {helpData.guides.map((guide) => (
        <HelpGuide key={guide.id} guide={guide} />
      ))}
    </div>
  </div>
);

export default Help;
