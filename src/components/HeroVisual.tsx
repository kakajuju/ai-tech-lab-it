const NODES = ['node-a', 'node-b', 'node-c', 'node-d'] as const;
const CONNECTIONS = ['connection-a', 'connection-b', 'connection-c'] as const;
const SIGNAL_BAR_COUNT = 4;

/** 장식용 신경망 그래픽 — 의미는 aria-label 하나로 전달하고 내부 요소는 보조기기에서 숨김 */
export default function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="AI 신경망을 표현한 추상 그래픽">
      <div className="visual-label label-top" aria-hidden="true">
        <span>NEURAL NETWORK</span>
        <b>01 / 05</b>
      </div>
      <div className="visual-ring ring-back" />
      <div className="visual-ring ring-front" />
      <div className="core-glow" />
      <div className="core" aria-hidden="true">
        <span>AI</span>
        <small>INTELLIGENCE</small>
      </div>
      {NODES.map((name) => (
        <span key={name} className={`node ${name}`} />
      ))}
      {CONNECTIONS.map((name) => (
        <span key={name} className={`connection ${name}`} />
      ))}
      <div className="visual-label label-bottom" aria-hidden="true">
        <span>LEARN · BUILD · GROW</span>
        <span className="signal-bars">
          {Array.from({ length: SIGNAL_BAR_COUNT }, (_, i) => (
            <i key={i} />
          ))}
        </span>
      </div>
      <div className="float-card float-card-one" aria-hidden="true">
        <span className="float-icon">⌘</span>
        <span>
          <small>MODEL STATUS</small>
          <b>Learning in progress</b>
        </span>
        <span className="live-dot" />
      </div>
      <div className="float-card float-card-two" aria-hidden="true">
        <span className="chart-icon">↗</span>
        <span>
          <small>FUTURE SKILLS</small>
          <b>Ready to build</b>
        </span>
      </div>
    </div>
  );
}
