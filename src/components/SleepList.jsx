import { useEffect, useState } from 'react'
import { CalendarDays, AlarmClock } from 'lucide-react'

function SleepList({ refresh }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${baseUrl}/api/sleep`)
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [refresh])

  if (loading) return <p className="text-slate-300">Loading entries...</p>
  if (error) return <p className="text-red-400">{error}</p>

  return (
    <div className="space-y-3">
      {items.length === 0 && (
        <p className="text-slate-400">No entries yet. Add your first one above.</p>
      )}
      {items.map((it) => (
        <div key={it.id} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-blue-300" />
              <div>
                <p className="text-white font-medium">{it.date}</p>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <AlarmClock className="w-4 h-4" /> {it.bedtime} → {it.waketime}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-300 font-semibold">Quality: {it.quality}/5</p>
              {it.notes && <p className="text-slate-400 text-sm max-w-xs">{it.notes}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SleepList
