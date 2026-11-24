import { DANCES, SPEEDS } from '../hooks/useAnimation'

export default function AnimationControls({
  isPlaying,
  toggle,
  dance,
  chooseDance,
  speedId,
  setSpeedId,
}) {
  return (
    <section className="controls" aria-label="애니메이션 제어">
      <button
        type="button"
        className={`play-button ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-pressed={isPlaying}
      >
        <span aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
        {isPlaying ? '멈추기' : '춤추기'}
      </button>

      <fieldset className="group">
        <legend>춤 고르기</legend>
        <div className="dance-grid">
          {DANCES.map((d, i) => (
            <button
              key={d.id}
              type="button"
              className="chip"
              aria-pressed={dance === d.id}
              onClick={() => chooseDance(d.id)}
              title={`단축키 ${i + 1}`}
            >
              <span aria-hidden="true">{d.emoji}</span> {d.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="group">
        <legend>속도</legend>
        <div className="speed-row">
          {SPEEDS.map((s) => (
            <button
              key={s.id}
              type="button"
              className="chip"
              aria-pressed={speedId === s.id}
              onClick={() => setSpeedId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="status" role="status" aria-live="polite">
        {isPlaying
          ? `${DANCES.find((d) => d.id === dance)?.label} 춤을 추고 있어요!`
          : '고양이가 쉬고 있어요.'}
      </p>
    </section>
  )
}
