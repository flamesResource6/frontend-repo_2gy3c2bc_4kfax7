export default function Attractions() {
  const items = [
    {
      title: 'Trinity College & The Book of Kells',
      desc: 'Historic campus meets illuminated artistry. A must‑see icon in the heart of the city.',
      tag: 'Culture',
      img: 'https://images.unsplash.com/photo-1589310243389-96f1e3985166?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Ha’penny Bridge',
      desc: 'The Liffey’s most photogenic crossing — a timeless Dublin silhouette.',
      tag: 'Landmark',
      img: 'https://images.unsplash.com/photo-1566373546840-2a218b25856a?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Guinness Storehouse',
      desc: 'Ireland’s most visited attraction with sky‑high views at the Gravity Bar.',
      tag: 'Experience',
      img: 'https://images.unsplash.com/photo-1549395156-021847dc4c39?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="discover" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">Top Attractions</h2>
            <p className="mt-2 max-w-2xl text-white/70">A curated selection of essentials — perfect for first‑timers and seasoned city explorers alike.</p>
          </div>
          <a href="#plan" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40 hover:text-white md:block">View All</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="group overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={it.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-xs uppercase tracking-wide text-emerald-300/90">{it.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
