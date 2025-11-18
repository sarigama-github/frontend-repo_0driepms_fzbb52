import { useState } from 'react'
import { Calendar, Clock, SmilePlus } from 'lucide-react'

const initial = { date: '', bedtime: '', waketime: '', quality: 3, notes: '' }

function SleepForm({ onSaved }) {
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${baseUrl}/api/sleep`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: form.date,
          bedtime: form.bedtime,
          waketime: form.waketime,
          quality: Number(form.quality),
          notes: form.notes || undefined,
        }),
      })
      if (!res.ok) throw new Error('Failed to save')
      setForm(initial)
      onSaved?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-slate-300 flex items-center gap-2"><Calendar className="w-4 h-4" /> Date</span>
          <input required type="date" name="date" value={form.date} onChange={handleChange} className="bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4" /> Bedtime</span>
          <input required type="time" name="bedtime" value={form.bedtime} onChange={handleChange} className="bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4" /> Wake time</span>
          <input required type="time" name="waketime" value={form.waketime} onChange={handleChange} className="bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-slate-300 flex items-center gap-2"><SmilePlus className="w-4 h-4" /> Quality (1-5)</span>
          <input required type="number" min="1" max="5" name="quality" value={form.quality} onChange={handleChange} className="bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </label>
      </div>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-slate-300">Notes</span>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button disabled={loading} className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors disabled:opacity-50">
        {loading ? 'Saving...' : 'Save Entry'}
      </button>
    </form>
  )
}

export default SleepForm
