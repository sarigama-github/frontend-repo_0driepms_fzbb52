import { Mic, Activity, Ear, Waveform } from 'lucide-react'

function HowItWorks() {
  const steps = [
    { icon: <Mic className="w-5 h-5 text-blue-300" />, title: 'Listen', desc: 'Microphone senses ambient noise and motion signals.' },
    { icon: <Activity className="w-5 h-5 text-blue-300" />, title: 'Detect', desc: 'Algorithms infer sleep stage and disturbances.' },
    { icon: <Ear className="w-5 h-5 text-blue-300" />, title: 'Adapt', desc: 'Audio texture shifts to nudge you back into deep sleep.' },
    { icon: <Waveform className="w-5 h-5 text-blue-300" />, title: 'Sustain', desc: 'Maintains optimal patterns until your ideal wake window.' },
  ]

  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
              <p className="mt-3 text-slate-300 max-w-xl">The adaptive engine continuously balances frequencies, masking, and rhythm. When disruptions arise—traffic, a partner turning, a dream—the soundscape subtly shifts to protect your sleep.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {steps.map((s) => (
                  <div key={s.title} className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2">{s.icon}<h3 className="text-white font-semibold">{s.title}</h3></div>
                    <p className="text-slate-300 text-sm mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[360px]">
              <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl" />
              <div className="relative h-full rounded-3xl border border-slate-800 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center">
                <div className="w-10/12 h-2 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
