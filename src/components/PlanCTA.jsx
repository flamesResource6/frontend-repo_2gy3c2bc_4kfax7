export default function PlanCTA() {
  return (
    <section id="plan" className="relative overflow-hidden bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-400/10 via-white/5 to-blue-500/10 p-8 ring-1 ring-white/10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Plan your Dublin now</h3>
              <p className="mt-2 max-w-prose text-white/70">Build a simple itinerary in seconds — select attractions, add food stops, and save events you don’t want to miss.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300 transition">Create Itinerary</a>
                <a href="#discover" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white/90 hover:border-white/60 hover:text-white transition">Explore First</a>
              </div>
            </div>
            <div className="">
              <ul className="grid gap-3 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Curated highlights and local picks</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Always‑updating events calendar</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Clean, modern, mobile‑first design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
