/** Decorative, animated node-graph that echoes the automation workflows Fasiha builds. */
const nodes = [
  { x: 80, y: 120 },
  { x: 260, y: 70 },
  { x: 230, y: 260 },
  { x: 430, y: 170 },
  { x: 600, y: 90 },
  { x: 640, y: 300 },
  { x: 820, y: 190 },
  { x: 980, y: 80 },
  { x: 1010, y: 330 },
  { x: 1160, y: 210 },
  { x: 140, y: 420 },
  { x: 420, y: 470 },
  { x: 760, y: 470 },
  { x: 1100, y: 520 },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [6, 7], [6, 8], [7, 9], [8, 9],
  [2, 10], [10, 11], [11, 5], [5, 12], [12, 8], [12, 13], [8, 13],
];

function path(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

export function WorkflowBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-teal"
      viewBox="0 0 1240 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.32">
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          if (!from || !to) return null;
          return <path key={i} d={path(from, to)} className="flow-line" style={{ animationDelay: `${(i % 6) * -0.4}s` }} />;
        })}
      </g>
      {nodes.map((n, i) => (
        <g key={i} className="node-pulse" style={{ animationDelay: `${(i % 5) * 0.6}s` }}>
          <rect x={n.x - 9} y={n.y - 9} width="18" height="18" rx="5" fill="currentColor" opacity="0.18" />
          <rect x={n.x - 4} y={n.y - 4} width="8" height="8" rx="2" fill="currentColor" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
