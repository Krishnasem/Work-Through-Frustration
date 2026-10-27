import React from 'react';
import './FrameworkSection.css';

interface Step {
  number: string;
  title: [string, string];
  color: string;
  x: number;
  bottom: number;
  width: number;
  height: number;
}

const steps: Step[] = [
  { number: '1', title: ['Recognize', 'emotional triggers'], color: '#08c7c6', x: 155, bottom: 680, width: 124, height: 150 },
  { number: '2', title: ['Identify frustration', 'patterns'], color: '#087bc1', x: 390, bottom: 565, width: 124, height: 165 },
  { number: '3', title: ['Apply regulation', 'tools'], color: '#f2380b', x: 625, bottom: 455, width: 124, height: 165 },
  { number: '4', title: ['Reflect and', 'reinforce'], color: '#812a91', x: 860, bottom: 345, width: 124, height: 165 },
  { number: '5', title: ['Build adaptive', 'habits'], color: '#ff8747', x: 1095, bottom: 245, width: 124, height: 165 },
];

function ArchStep({ step }: { step: Step }) {
  const { number, title, color, x, bottom, width, height } = step;
  const y = bottom - height;
  const curve = 48;
  const frontPath = `M ${x} ${bottom} L ${x} ${y + curve} C ${x} ${y + 12}, ${x + 23} ${y}, ${x + width / 2} ${y} C ${x + width - 23} ${y}, ${x + width} ${y + 12}, ${x + width} ${y + curve} L ${x + width} ${bottom} Z`;
  const sidePath = `M ${x + width} ${y + curve} C ${x + width} ${y + 12}, ${x + width - 23} ${y}, ${x + width / 2} ${y} L ${x + width / 2 + 26} ${y - 8} C ${x + width + 10} ${y - 7}, ${x + width + 31} ${y + 12}, ${x + width + 31} ${y + curve} L ${x + width + 31} ${bottom - 8} L ${x + width} ${bottom} Z`;
  const labelX = x + width / 2;
  return (
    <g className="framework-step">
      {/* Soft floor shadow */}
      <path d={`M ${x + 25} ${bottom + 1} L ${x + width + 28} ${bottom - 10} L ${x + width + 145} ${bottom - 27} L ${x + width + 38} ${bottom + 2} Z`} fill="#b8c4c7" opacity=".38" />
      {/* Extruded side and front face */}
      <path d={sidePath} fill={color} />
      <path d={frontPath} fill="#ffffff" stroke={color} strokeWidth="5" strokeLinejoin="round" />
      <text x={labelX} y={y + height * 0.67} className="framework-number" fill={color}>{number}</text>
      <text x={labelX} y={y - 58} className="framework-label">
        <tspan x={labelX} dy="0">{title[0]}</tspan>
        <tspan x={labelX} dy="27">{title[1]}</tspan>
      </text>
    </g>
  );
}

export default function FrameworkSection() {
  return (
    <section className="framework-section" aria-labelledby="framework-heading">
      <h2 id="framework-heading" className="framework-heading">Our Framework</h2>
      <div className="framework-desktop" role="img" aria-label="Five-step framework: Recognize emotional triggers, Identify frustration patterns, Apply regulation tools, Reflect and reinforce, Build adaptive habits.">
        <svg viewBox="0 0 1500 710" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g className="framework-connectors" fill="none" stroke="#414141" strokeWidth="2.5" strokeLinecap="round">
            <path d="M 310 585 L 365 566" /><path d="M 545 475 L 600 456" />
            <path d="M 780 365 L 835 346" /><path d="M 1015 255 L 1070 236" />
          </g>
          {[[310,585],[365,566],[545,475],[600,456],[780,365],[835,346],[1015,255],[1070,236]].map(([cx,cy], i) => <circle key={i} cx={cx} cy={cy} r="7" fill="#414141" />)}
          {steps.map(step => <ArchStep key={step.number} step={step} />)}
        </svg>
      </div>
      <ol className="framework-mobile">
        {steps.map(step => (
          <li key={step.number} style={{ '--step-color': step.color } as React.CSSProperties}>
            <span className="framework-mobile-number">{step.number}</span>
            <span className="framework-mobile-title">{step.title.join(' ')}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
