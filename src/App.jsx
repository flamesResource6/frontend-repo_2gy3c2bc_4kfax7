import Hero from './components/Hero'
import Attractions from './components/Attractions'
import Food from './components/Food'
import EventsNews from './components/EventsNews'
import PlanCTA from './components/PlanCTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Attractions />
      <Food />
      <EventsNews />
      <PlanCTA />

      <footer className="bg-black/90 py-10 text-white/70">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} Dublin Now</p>
            <nav className="flex gap-6 text-sm">
              <a className="hover:text-white" href="#discover">Attractions</a>
              <a className="hover:text-white" href="#events">Events</a>
              <a className="hover:text-white" href="#news">News</a>
              <a className="hover:text-white" href="#plan">Plan</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
