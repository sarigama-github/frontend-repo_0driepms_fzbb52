import { useState } from 'react'
import Header from './components/Header'
import SleepForm from './components/SleepForm'
import SleepList from './components/SleepList'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.06),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-4 py-10 sm:py-14">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <SleepForm onSaved={() => setRefreshKey((k) => k + 1)} />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Entries</h2>
                <button onClick={() => setRefreshKey((k) => k + 1)} className="text-sm text-slate-300 hover:text-white">Refresh</button>
              </div>
              <SleepList refresh={refreshKey} />
            </div>
          </div>
        </div>

        <footer className="mt-10 text-slate-400 text-sm text-center">
          Built with love for better sleep.
        </footer>
      </div>
    </div>
  )
}

export default App
