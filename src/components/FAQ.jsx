import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-800 rounded-2xl p-4 bg-slate-900/50">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left text-white">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-2 text-slate-300 text-sm">{a}</p>}
    </div>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Does LunaSleep really help me fall asleep faster?', a: 'In our beta, users fell asleep 32% faster and reported 41% fewer awakenings. Your results may vary, but adaptive audio generally reduces latency and disturbances.' },
    { q: 'Do I need special headphones?', a: 'No. Any comfortable headphones or a bedside speaker works. Adaptive volume ensures it stays gentle throughout the night.' },
    { q: 'Is my microphone recording?', a: 'No audio is ever stored or sent to our servers. Processing happens on-device and only uses high-level features.' },
    { q: 'Can I use it with white noise apps?', a: 'Yes, but LunaSleep replaces them with an intelligent, responsive soundscape so you won’t need multiple apps.' },
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}

export default FAQ
