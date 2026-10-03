'use client';

import { RefObject, useEffect, useRef } from 'react';
import styles from './DataVisualization.module.css';

export interface DataPoint {
  x: number;
  y: number;
  label?: string;
}

export interface DataSeries {
  id: string;
  label: string;
  data: DataPoint[];
  color?: string;
  strokeWidth?: number;
  dashArray?: string;
  isAccent?: boolean;
}

interface DataVisualizationProps {
  series: DataSeries[];
  width?: number;
  height?: number;
  xDomain?: [number, number];
  yDomain?: [number, number];
  xLabel?: string;
  yLabel?: string;
  showGrid?: boolean;
  showAxes?: boolean;
  className?: string;
  illustrative?: boolean;
}

export function DataVisualization({
  series,
  width = 600,
  height = 300,
  xDomain,
  yDomain,
  xLabel,
  yLabel,
  showGrid = true,
  showAxes = true,
  className,
  illustrative = false,
}: DataVisualizationProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Calculate domains if not provided
  const allPoints = series.flatMap(s => s.data);
  const computedXDomain = xDomain || [
    Math.min(...allPoints.map(p => p.x)),
    Math.max(...allPoints.map(p => p.x)),
  ];
  const computedYDomain = yDomain || [
    Math.min(...allPoints.map(p => p.y)),
    Math.max(...allPoints.map(p => p.y)),
  ];

  const padding = { top: 30, right: 20, bottom: 40, left: 50 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const xScale = (x: number) => padding.left + ((x - computedXDomain[0]) / (computedXDomain[1] - computedXDomain[0])) * innerWidth;
  const yScale = (y: number) => padding.top + innerHeight - ((y - computedYDomain[0]) / (computedYDomain[1] - computedYDomain[0])) * innerHeight;

  const path = (data: DataPoint[]) => {
    if (data.length < 2) return '';
    return data.map((point, i) => `${i === 0 ? 'M' : 'L'} ${xScale(point.x)} ${yScale(point.y)}`).join(' ');
  };

  useEffect(() => {
    if (illustrative && svgRef.current) {
      const paths = svgRef.current.querySelectorAll('.illustrative-path');
      paths.forEach((p, i) => {
        const pathEl = p as SVGPathElement;
        const length = pathEl.getTotalLength();
        pathEl.style.strokeDasharray = `${length}`;
        pathEl.style.strokeDashoffset = `${length}`;
        pathEl.style.animation = `drawLine 1.5s ease-out ${i * 0.2}s forwards`;
      });
    }
  }, [illustrative]);

  return (
    <div className={`${styles.wrapper} ${className || ''}`} role="img" aria-label={illustrative ? 'Illustrative data visualization' : 'Data visualization'}>
      {illustrative && <p className={styles.illustrativeNotice}>ILLUSTRATIVE DATA</p>}
      <svg ref={svgRef} width={width} height={height} className={styles.svg} aria-hidden="true">
        {showGrid && (
          <g className={styles.grid}>
            {/* Horizontal grid lines */}
            {Array.from({ length: 5 }, (_, i) => i / 4).map((t) => {
              const y = padding.top + innerHeight * (1 - t);
              return (
                <line
                  key={`h-${t}`}
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={y}
                  y2={y}
                  className={styles.gridLine}
                />
              );
            })}
            {/* Vertical grid lines */}
            {Array.from({ length: 6 }, (_, i) => i / 5).map((t) => {
              const x = padding.left + innerWidth * t;
              return (
                <line
                  key={`v-${t}`}
                  x1={x}
                  x2={x}
                  y1={padding.top}
                  y2={height - padding.bottom}
                  className={styles.gridLine}
                />
              );
            })}
          </g>
        )}

        {showAxes && (
          <g className={styles.axes}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={height - padding.bottom}
              y2={height - padding.bottom}
              className={styles.axisLine}
            />
            <line
              x1={padding.left}
              x2={padding.left}
              y1={padding.top}
              y2={height - padding.bottom}
              className={styles.axisLine}
            />
          </g>
        )}

        {series.map((s, i) => (
          <path
            key={s.id}
            d={path(s.data)}
            fill="none"
            stroke={s.isAccent ? 'var(--color-accent)' : s.color || `var(--color-gray-${300 + i * 100})`}
            strokeWidth={s.strokeWidth || 1.5}
            strokeDasharray={s.dashArray}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.line} ${s.isAccent ? styles.accentLine : ''} ${illustrative ? styles.illustrativePath : ''}`}
            style={{ opacity: s.isAccent ? 1 : 0.7 }}
          />
        ))}

        {showAxes && xLabel && (
          <text
            x={width / 2}
            y={height - 8}
            textAnchor="middle"
            className={styles.axisLabel}
          >
            {xLabel}
          </text>
        )}

        {showAxes && yLabel && (
          <text
            x={16}
            y={height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(-90, 16, ${height / 2})`}
            className={styles.axisLabel}
          >
            {yLabel}
          </text>
        )}
      </svg>

      <style jsx>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}