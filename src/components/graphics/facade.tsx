import styles from "./facade.module.css";

/**
 * Assinatura visual do hero: fachada que se desenha em traço champanhe.
 * Reescrita como SERVER COMPONENT com animação CSS pura —
 * `pathLength={1}` normaliza cada traço, e o CSS anima o dashoffset.
 * Zero JavaScript no cliente; reduced-motion tratado no próprio CSS.
 */

const strokes: { d: string; order: number }[] = [
  { d: "M 60 380 L 60 60 L 200 20 L 200 380", order: 0 },
  { d: "M 200 20 L 260 50 L 260 380", order: 1 },
  { d: "M 60 120 L 200 88", order: 2 },
  { d: "M 60 180 L 200 152", order: 2 },
  { d: "M 60 240 L 200 216", order: 3 },
  { d: "M 60 300 L 200 280", order: 3 },
  { d: "M 200 88 L 260 112", order: 4 },
  { d: "M 200 152 L 260 172", order: 4 },
  { d: "M 200 216 L 260 232", order: 5 },
  { d: "M 200 280 L 260 296", order: 5 },
  { d: "M 106 380 L 106 47", order: 6 },
  { d: "M 152 380 L 152 34", order: 6 },
  { d: "M 20 380 L 320 380", order: 7 },
  { d: "M 106 330 L 152 330", order: 8 },
];

export function Facade({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 400" fill="none" aria-hidden="true" className={className}>
      {strokes.map(({ d, order }, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          className={styles.stroke}
          style={{ "--order": order } as React.CSSProperties}
          stroke="var(--color-accent)"
          strokeOpacity={0.55}
          strokeWidth={1.25}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
