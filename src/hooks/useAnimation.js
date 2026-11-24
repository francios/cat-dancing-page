import { useCallback, useEffect, useState } from 'react'

export const DANCES = [
  { id: 'wiggle', label: '흔들흔들', emoji: '🎵' },
  { id: 'jump', label: '폴짝폴짝', emoji: '⬆️' },
  { id: 'spin', label: '빙글빙글', emoji: '🌀' },
  { id: 'groove', label: '둠칫둠칫', emoji: '💃' },
  { id: 'party', label: '파티 타임', emoji: '🎉' },
]

export const SPEEDS = [
  { id: 'slow', label: '느리게', value: 1.6 },
  { id: 'normal', label: '보통', value: 1 },
  { id: 'fast', label: '빠르게', value: 0.6 },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function useAnimation() {
  // 움직임 줄이기 설정을 켠 사용자는 정지 상태로 시작
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion())
  const [dance, setDance] = useState(DANCES[0].id)
  const [speedId, setSpeedId] = useState('normal')

  const toggle = useCallback(() => setIsPlaying((p) => !p), [])

  const chooseDance = useCallback((id) => {
    setDance(id)
    setIsPlaying(true)
  }, [])

  // 키보드 단축키: Space/Enter(고양이 포커스 시) 재생 토글, 1~5 춤 선택
  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      const tag = e.target.tagName
      if (e.key === ' ' && tag !== 'BUTTON' && tag !== 'INPUT') {
        e.preventDefault()
        toggle()
        return
      }
      const n = Number(e.key)
      if (n >= 1 && n <= DANCES.length) chooseDance(DANCES[n - 1].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle, chooseDance])

  const speed = SPEEDS.find((s) => s.id === speedId)?.value ?? 1

  return {
    isPlaying,
    toggle,
    dance,
    chooseDance,
    speedId,
    setSpeedId,
    speed,
  }
}
