import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.05),transparent_40%)] pointer-events-none" />
      <Navbar />
      <main className="relative">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <CTA />
        <FAQ />
        <footer className="py-10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} LunaSleep. Sleep beautifully.</footer>
      </main>
    </div>
  )
}

export default App
