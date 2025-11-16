import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6">
        {/* Top nav */}
        <div className="flex items-center justify-between py-6 text-white/90">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur" />
            <span className="text-lg font-semibold tracking-wide">Dublin Now</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#discover" className="hover:text-white transition">Discover</a>
            <a href="#events" className="hover:text-white transition">Events</a>
            <a href="#news" className="hover:text-white transition">News</a>
            <a href="#plan" className="hover:text-white transition">Plan</a>
          </nav>
          <a href="#plan" className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white transition">Plan Your Trip</a>
        </div>

        <div className="flex grow flex-col items-start justify-center text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/70">Explore • Eat • Experience</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Discover Dublin
            <span className="block text-white/80">modern, vibrant, unforgettable</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            A clean, modern guide to the city’s top attractions, iconic food spots, and the latest events and stories. Welcome to the now.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#discover" className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300 transition">Start Exploring</a>
            <a href="#events" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white/90 hover:border-white/60 hover:text-white transition">See What’s On</a>
          </div>
        </div>
      </div>
    </section>
  )
}
