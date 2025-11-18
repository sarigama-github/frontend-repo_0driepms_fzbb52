import { Apple, Play, ShieldCheck } from 'lucide-react'

function CTA() {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Sleep better in the next 10 minutes</h2>
        <p className="mt-3 text-slate-300">Download LunaSleep and experience adaptive audio tuned precisely for you. 7-day free trial. Cancel anytime.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition">
            <Apple className="w-5 h-5" /> App Store
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition">
            <Play className="w-5 h-5" /> Google Play
          </a>
        </div>
        <p className="mt-3 text-slate-400 text-sm inline-flex items-center gap-2 justify-center"><ShieldCheck className="w-4 h-4" /> No ads. No tracking. Privacy-first.</p>
      </div>
    </section>
  )
}

export default CTA
