import catImage from '../assets/images/cat.svg'
import { DANCES } from '../hooks/useAnimation'

export default function DancingCat({ dance, isPlaying, speed, onToggle }) {
  const label = DANCES.find((d) => d.id === dance)?.label ?? ''

  return (
    <div className="stage">
      <div className="notes" aria-hidden="true" data-playing={isPlaying}>
        <span>♪</span>
        <span>♫</span>
        <span>♪</span>
      </div>

      <button
        type="button"
        className="cat-button"
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? `고양이가 ${label} 춤을 추는 중. 눌러서 멈추기` : '고양이 멈춤. 눌러서 춤추기'}
      >
        {/* key를 바꿔 춤이 바뀔 때 애니메이션을 처음부터 다시 시작 */}
        <img
          key={dance}
          src={catImage}
          alt=""
          className={`cat dance-${dance}`}
          style={{
            '--speed': speed,
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
          draggable="false"
        />
      </button>

      <div className={`shadow dance-${dance}-shadow`} aria-hidden="true"
        style={{ '--speed': speed, animationPlayState: isPlaying ? 'running' : 'paused' }} />
    </div>
  )
}
