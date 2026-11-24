import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

export default function App() {
  const anim = useAnimation()

  return (
    <Layout>
      <DancingCat
        dance={anim.dance}
        isPlaying={anim.isPlaying}
        speed={anim.speed}
        onToggle={anim.toggle}
      />
      <AnimationControls {...anim} />
    </Layout>
  )
}
