export default function Food() {
  const spots = [
    { name: 'Temple Bar Market', area: 'Temple Bar', img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Herbstreet', area: 'Grand Canal Dock', img: 'https://images.unsplash.com/photo-1554475908-09e1e29856d9?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Fish Shop', area: 'Benburb Street', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Brother Hubbard', area: 'North City', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">Food & Drink</h2>
            <p className="mt-2 max-w-2xl text-white/70">From cozy cafés to contemporary cuisine — here’s where locals actually go.</p>
          </div>
          <a href="#plan" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40 hover:text-white md:block">See Map</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spots.map((s) => (
            <div key={s.name} className="group overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
              <div className="aspect-square overflow-hidden">
                <img src={s.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-white/70">{s.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
