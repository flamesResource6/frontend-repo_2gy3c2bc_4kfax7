export default function EventsNews() {
  const events = [
    { date: 'Nov 24', title: 'Docklands Winter Festival', blurb: 'Light installations, live music, and pop-up food along the Liffey.' },
    { date: 'Dec 02', title: 'Contemporary Irish Theatre', blurb: 'A bold new play at the Abbey Theatre — limited run.' },
    { date: 'Dec 15', title: 'Christmas at the Castle', blurb: 'Markets, carols, and seasonal treats in a historic setting.' },
  ]

  const news = [
    { tag: 'City', title: 'New riverside cycleway opens', blurb: 'A smoother, safer ride from the Docklands to Phoenix Park.' },
    { tag: 'Culture', title: 'Modern art week at IMMA', blurb: 'International artists arrive for installations and talks.' },
    { tag: 'Food', title: 'Sourdough boom continues', blurb: 'The city’s bakeries lean into heritage grains and long ferments.' },
  ]

  return (
    <section id="events" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">What’s On</h2>
            <p className="mt-2 max-w-2xl text-white/70">Concerts, theatre, food markets — here are a few highlights for the weeks ahead.</p>
            <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
              {events.map((e) => (
                <div key={e.title} className="flex items-start gap-4 p-5 hover:bg-white/5">
                  <div className="rounded-md bg-emerald-400/20 px-3 py-2 text-emerald-300">{e.date}</div>
                  <div>
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="text-sm text-white/70">{e.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="news">
            <h2 className="text-2xl font-semibold md:text-4xl">City News</h2>
            <p className="mt-2 max-w-2xl text-white/70">Short reads and helpful updates for visitors and locals.</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {news.map((n) => (
                <article key={n.title} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="text-xs uppercase tracking-wide text-emerald-300/90">{n.tag}</span>
                  <h3 className="mt-1 font-semibold">{n.title}</h3>
                  <p className="text-sm text-white/70">{n.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
