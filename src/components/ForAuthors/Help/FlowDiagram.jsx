const desktopLayout = {
  columns: 3,
  nodeWidth: 320,
  nodeHeight: 144,
  columnGap: 96,
  rowGap: 128,
  rowSlope: 36,
  rowInset: 56,
  padding: 24,
};

const mobileLayout = {
  columns: 1,
  nodeWidth: 264,
  nodeHeight: 128,
  columnGap: 0,
  rowGap: 40,
  rowSlope: 0,
  rowInset: 56,
  padding: 24,
};

const getArrowPath = (x, y, tangentX, tangentY) => {
  const deltaX = x - tangentX;
  const deltaY = y - tangentY;
  const length = Math.hypot(deltaX, deltaY) || 1;
  const unitX = deltaX / length;
  const unitY = deltaY / length;
  const baseX = x - unitX * 12;
  const baseY = y - unitY * 12;
  const halfWidth = 6;

  return `M ${x} ${y} L ${baseX - unitY * halfWidth} ${baseY + unitX * halfWidth} L ${baseX + unitY * halfWidth} ${baseY - unitX * halfWidth} Z`;
};

const getPositions = (steps, layout) =>
  steps.map((step, index) => {
    const row = Math.floor(index / layout.columns);
    const offset = index % layout.columns;
    const column = row % 2 === 0 ? offset : layout.columns - offset - 1;
    const rowSpan = (layout.columns - 1) * (layout.nodeWidth + layout.columnGap);
    const rowStep =
      layout.columns > 1
        ? (rowSpan - 2 * layout.rowInset) / (layout.columns - 1)
        : 0;

    return {
      step,
      index,
      row,
      column,
      x:
        layout.padding +
        column * (row % 2 === 0 ? layout.nodeWidth + layout.columnGap : rowStep) +
        (row % 2 === 0 ? 0 : layout.rowInset),
      y:
        layout.padding +
        row * (layout.nodeHeight + layout.rowGap) +
        offset * layout.rowSlope,
    };
  });

const getConnectors = (positions, layout) =>
  positions.slice(0, -1).map((current, index) => {
    const next = positions[index + 1];

    if (current.row !== next.row) {
      const startX = current.x + layout.nodeWidth / 2;
      const startY = current.y + layout.nodeHeight;
      const endX = next.x + layout.nodeWidth / 2;
      const endY = next.y;
      const verticalOffset = Math.min(24, (endY - startY) / 3);
      const sideX =
        layout.columns === 1
          ? endX >= startX
            ? Math.max(startX, endX) + 36
            : Math.min(startX, endX) - 36
          : Math.max(startX, endX) + 36;
      const middleY = (startY + endY) / 2;
      const secondControlY = endY - verticalOffset;

      return {
        id: `${current.step.title}-${next.step.title}`,
        path: `M ${startX} ${startY} C ${startX} ${startY + verticalOffset}, ${sideX} ${startY + verticalOffset}, ${sideX} ${middleY} C ${sideX} ${secondControlY}, ${endX} ${secondControlY}, ${endX} ${endY}`,
        arrow: getArrowPath(endX, endY, sideX, secondControlY),
      };
    }

    const direction = next.x > current.x ? 1 : -1;
    const startX =
      direction === 1 ? current.x + layout.nodeWidth : current.x;
    const endX =
      direction === 1 ? next.x : next.x + layout.nodeWidth;
    const distance = Math.abs(endX - startX);
    const startY = current.y + layout.nodeHeight / 2;
    const endY = next.y + layout.nodeHeight / 2;
    const controlOffset = distance * 0.35;
    const firstControlX = startX + direction * controlOffset;
    const secondControlX = endX - direction * controlOffset;

    return {
      id: `${current.step.title}-${next.step.title}`,
      path: `M ${startX} ${startY} C ${firstControlX} ${startY}, ${secondControlX} ${endY}, ${endX} ${endY}`,
      arrow: getArrowPath(endX, endY, secondControlX, endY),
    };
  });

const FlowChartSvg = ({ title, steps, layout, variant }) => {
  const positions = getPositions(steps, layout);
  const connectors = getConnectors(positions, layout);
  const gradientId = `help-flow-${variant}-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
  const width = Math.max(
    layout.padding * 2,
    ...positions.map(({ x }) => x + layout.nodeWidth + layout.padding),
  );
  const height = Math.max(
    layout.padding * 2,
    ...positions.map(({ y }) => y + layout.nodeHeight + layout.padding),
  );

  return (
    <svg
      className={`help-flow-svg help-flow-svg-${variant}`}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--neon-purple)" />
          <stop offset="100%" stopColor="var(--neon-blue)" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}-surface`}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="var(--bg-card)" />
          <stop offset="100%" stopColor="var(--bg-dark)" />
        </linearGradient>
      </defs>
      <g className="help-flow-connectors">
        {connectors.map((connector, index) => (
          <g key={connector.id}>
            <path
              className="help-flow-connector-glow"
              d={connector.path}
              stroke={`url(#${gradientId})`}
            />
            <path
              className="help-flow-connector-line"
              d={connector.path}
              stroke={`url(#${gradientId})`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </g>
        ))}
      </g>
      {positions.map(({ step, index, x, y }) => (
        <g
          className="help-flow-node"
          key={`${title}-${step.title}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <rect
            className={`help-flow-node-shape is-${step.type}`}
            x={x}
            y={y}
            width={layout.nodeWidth}
            height={layout.nodeHeight}
            rx="16"
            style={
              step.type === "start" || step.type === "end"
                ? { fill: `url(#${gradientId})` }
                : step.type === "process"
                  ? { fill: `url(#${gradientId}-surface)` }
                  : undefined
            }
          />
          {step.type === "process" && (
            <rect
              className="help-flow-node-accent"
              x={x + 2}
              y={y + 22}
              width="4"
              height={layout.nodeHeight - 44}
              rx="2"
              fill={`url(#${gradientId})`}
            />
          )}
          <foreignObject
            x={x + 16}
            y={y + 12}
            width={layout.nodeWidth - 32}
            height={layout.nodeHeight - 24}
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={`help-flow-node-content is-${step.type}`}
            >
              <span className="help-flow-node-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="help-flow-node-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </foreignObject>
        </g>
      ))}
      <g className="help-flow-arrows">
        {connectors.map((connector, index) => (
          <path
            className="help-flow-connector-arrow"
            d={connector.arrow}
            fill={`url(#${gradientId})`}
            key={connector.id}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </g>
    </svg>
  );
};

const FlowDiagram = ({ title, steps, compact = false }) => (
  <div className={`help-flow${compact ? " help-flow-compact" : ""}`}>
    {compact ? (
      <FlowChartSvg
        title={title}
        steps={steps}
        layout={mobileLayout}
        variant="compact"
      />
    ) : (
      <>
        <FlowChartSvg
          title={title}
          steps={steps}
          layout={desktopLayout}
          variant="desktop"
        />
        <FlowChartSvg
          title={title}
          steps={steps}
          layout={mobileLayout}
          variant="mobile"
        />
      </>
    )}
    <ol className="help-flow-accessible" aria-label={`${title} workflow`}>
      {steps.map((step) => (
        <li key={`${title}-${step.title}`}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default FlowDiagram;
