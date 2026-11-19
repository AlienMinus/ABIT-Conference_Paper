import importantDates from "../../../data/importantDates.json";
import FlowDiagram from "./FlowDiagram";

const getDateValue = (date) => Date.parse(date.replace(/-\d+(?=,)/, ""));
const sortedDates = [...importantDates].sort(
  (first, second) => getDateValue(first.date) - getDateValue(second.date),
);
const steps = sortedDates.map((event, index) => ({
  type:
    index === 0
      ? "start"
      : index === sortedDates.length - 1
        ? "end"
        : "process",
  title: event.title,
  description: event.previousDate
    ? `${event.date} (was ${event.previousDate})`
    : event.date,
}));

const DateFlowchart = () => (
  <section className="help-guide help-date-flow" aria-labelledby="help-date-title">
    <header className="help-guide-header">
      <div>
        <h2 id="help-date-title">Important Dates</h2>
        <p>Key conference milestones, in order.</p>
      </div>
    </header>
    <FlowDiagram title="Important dates" steps={steps} />
  </section>
);

export default DateFlowchart;
