import { Brain, Waves, Timer, Moon, Zap, Gauge } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: <Brain className="w-6 h-6 text-blue-300" />, title: 'Adaptive intelligence',
      desc: 'Our engine analyzes micro-movements and ambient noise to adapt soundscapes in real-time.'
    },
    {
      icon: <Waves className="w-6 h-6 text-blue-300" />, title: 'Personalized sound',
      desc: 'Dynamic frequencies, binaural beats and pink noise blend based on your sleep stage.'
    },
    {
      icon: <Timer className="w-6 h-6 text-blue-300" />, title: 'Faster sleep onset',
      desc: 'Reduce sleep latency with progressive relaxation patterns and breathing cues.'
    },
    {
      icon: <Moon className="w-6 h-6 text-blue-300" />, title: 'Deeper, longer sleep',
      desc: 'Maintain slow-wave sleep while minimizing micro‑awakenings throughout the night.'
    },
    {
      icon: <Gauge className="w-6 h-6 text-blue-300" />, title: 'Smart volume',
      desc: 'Gentle, automatic adjustments that never jolt you awake.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-300" />, title: 'Battery light',
      desc: 'Designed for efficiency so your phone and headphones last till morning.'
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Designed to help you drift and stay asleep</h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">A carefully crafted system that adapts to you and your environment—so your mind can finally let go.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="text-white font-semibold">{it.title}</h3>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
