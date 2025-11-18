import { Moon, BedDouble, Sparkles } from 'lucide-react'

function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700">
          <Moon className="w-7 h-7 text-blue-300" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Sleep Journal</h1>
      </div>
      <p className="text-slate-300 max-w-2xl">
        Track your sleep effortlessly. Log bedtimes and wake-ups, rate your sleep quality, and watch your habits improve.
      </p>
      <div className="mt-4 flex items-center gap-3 text-slate-400 text-sm">
        <BedDouble className="w-4 h-4" />
        <span>Better rest through awareness</span>
        <Sparkles className="w-4 h-4" />
      </div>
    </header>
  )
}

export default Header
