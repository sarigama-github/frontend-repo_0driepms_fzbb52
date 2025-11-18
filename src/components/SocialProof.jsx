function SocialProof() {
  const logos = ['Calm-ish', 'TechRadar', 'Sleep Lab', 'Product Hunt', 'Healthline']
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
          {logos.map(l => (
            <div key={l} className="px-4 py-2 text-sm tracking-wide border border-slate-800 rounded-xl bg-slate-900/40">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
