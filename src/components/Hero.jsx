import { Sparkles, Waves, Headphones, ShieldCheck } from 'lucide-react'

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 w-[50rem] h-[50rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-slate-300 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" /> New: Adaptive Audio Engine v2
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Fall asleep faster. Sleep deeper. Wake up restored.
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl">
            LunaSleep uses adaptive audio that listens and responds to your environment and physiology in real-time to keep you in deep, uninterrupted sleep.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#download" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
              Get the App
            </a>
            <a href="#how" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition">
              See how it works
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <Waves className="w-5 h-5 text-blue-300 mx-auto" />
              <p className="mt-2 text-sm text-slate-300">Adaptive soundscapes</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <Headphones className="w-5 h-5 text-blue-300 mx-auto" />
              <p className="mt-2 text-sm text-slate-300">Works with any headphones</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <ShieldCheck className="w-5 h-5 text-blue-300 mx-auto" />
              <p className="mt-2 text-sm text-slate-300">Privacy-first</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-[url('https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-3xl h-[520px] shadow-2xl border border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="backdrop-blur bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <p className="text-slate-200 text-sm">"I fall asleep in under 10 minutes and stay asleep all night. This feels like magic."</p>
                <p className="text-slate-400 text-xs mt-1">— Jamie, beta tester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
