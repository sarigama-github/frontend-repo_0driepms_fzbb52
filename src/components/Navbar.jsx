import { Menu, X, Moon, Download, Apple, Play } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const CTAButtons = () => (
    <div className="flex items-center gap-3">
      <a href="#download" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition">
        <Apple className="w-4 h-4" /> App Store
      </a>
      <a href="#download" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition">
        <Play className="w-4 h-4" /> Google Play
      </a>
    </div>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-backdrop-blur:bg-white/60 bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
            <Moon className="w-5 h-5 text-blue-300" />
          </div>
          <span className="text-white font-semibold tracking-tight">LunaSleep</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#science" className="hover:text-white">Science</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
        <div className="hidden md:block">
          <CTAButtons />
        </div>
        <button className="md:hidden p-2 text-slate-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t border-slate-800 bg-slate-950/80">
          <a href="#features" className="block text-slate-200">Features</a>
          <a href="#science" className="block text-slate-200">Science</a>
          <a href="#how" className="block text-slate-200">How it works</a>
          <a href="#faq" className="block text-slate-200">FAQ</a>
          <div className="pt-2"><CTAButtons /></div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
