export default function AstroviaEnterpriseWebsite() {
  const services = [
    {
      title: "Software Solutions",
      text: "Custom web applications, internal tools, automation systems, and scalable digital products built for modern businesses.",
    },
    {
      title: "Fintech Integration",
      text: "Payment integrations, API connections, workflow automation, and digital transaction systems tailored for business growth.",
    },
    {
      title: "IT Support Services",
      text: "Professional troubleshooting, device setup, system maintenance, and dependable technical support.",
    },
    {
      title: "Digital Recovery & Security",
      text: "Account recovery, Gmail/social support, and digital safety solutions.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.14),transparent_24%),linear-gradient(to_bottom,#020617,#07101f,#020617)]" />

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30">
        <div className="absolute left-[8%] top-[16%] h-2 w-2 animate-pulse rounded-full bg-blue-300" />
        <div className="absolute left-[24%] top-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-white [animation-delay:300ms]" />
        <div className="absolute right-[14%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-sky-300 [animation-delay:700ms]" />
        <div className="absolute left-[12%] top-[42%] h-1.5 w-1.5 animate-pulse rounded-full bg-white [animation-delay:1100ms]" />
        <div className="absolute right-[28%] top-[46%] h-2 w-2 animate-pulse rounded-full bg-blue-200 [animation-delay:500ms]" />
        <div className="absolute left-[20%] bottom-[20%] h-2 w-2 animate-pulse rounded-full bg-sky-200 [animation-delay:900ms]" />
        <div className="absolute right-[10%] bottom-[16%] h-1.5 w-1.5 animate-pulse rounded-full bg-white [animation-delay:1300ms]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="group flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Astrovia"
              className="h-12 w-12 object-contain transition duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            <div>
              <div className="text-lg font-bold tracking-[0.2em]">ASTROVIA</div>
              <div className="text-xs tracking-[0.4em] text-blue-200/80">ENTERPRISE</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 lg:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-[fadeInUp_0.9s_ease-out]">
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Building smart
              <span className="bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent"> software and technology </span>
              solutions
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 animate-[fadeInUp_1.1s_ease-out]">
              Astrovia Enterprise delivers modern software, fintech integrations, and IT support for businesses.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-blue-100 backdrop-blur-sm animate-[fadeInUp_1.25s_ease-out]">
              Software Excellence. IT Support at Warp Speed.
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-[fadeInUp_1.4s_ease-out]">
              <a href="#contact" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:scale-[1.03] hover:bg-blue-400">
                Get Started
              </a>
              <a href="#services" className="rounded-xl border border-white/20 px-6 py-3 transition hover:scale-[1.03] hover:bg-white/5">
                Our Services
              </a>
            </div>
          </div>

          <div className="relative animate-[floatIn_1.2s_ease-out]">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
              <div className="relative flex min-h-[420px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.22),transparent_32%)]" />

                <div className="relative flex items-center justify-center">
                  <div className="absolute h-60 w-60 animate-[spin_18s_linear_infinite] rounded-full border-[10px] border-blue-300/90 border-t-transparent" />
                  <div className="absolute h-48 w-48 animate-[spin_12s_linear_infinite_reverse] rounded-full border-[6px] border-sky-400/70 border-b-transparent" />
                  <img
                    src="/logo.png"
                    alt="Astrovia Logo"
                    className="relative z-10 h-44 w-44 object-contain animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:bg-white/10">
                    <div className="text-sm font-semibold">Software Architecture</div>
                    <div className="mt-1 text-xs text-slate-400">Scalable systems for business growth.</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:bg-white/10">
                    <div className="text-sm font-semibold">Digital Infrastructure</div>
                    <div className="mt-1 text-xs text-slate-400">Reliable support and execution.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold">Our Services</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-300/30 hover:bg-white/10"
              style={{ animation: `fadeInUp 0.8s ease-out ${index * 120}ms both` }}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:border-blue-300/20">
            <h2 className="text-3xl font-bold">About Astrovia</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Astrovia Enterprise is a technology company focused on software solutions, IT support, and digital systems that help businesses grow.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-8 backdrop-blur-md transition hover:border-blue-300/20">
            <p className="leading-8 text-slate-300">
              We combine practical execution with a futuristic identity, helping businesses move faster through smart systems, secure support, and scalable digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-slate-300">Let’s build your next solution.</p>

          <div className="mt-6 space-y-2 text-slate-200">
            <div>📞 07081197352</div>
            <div>✉️ aminuastroboy@gmail.com</div>
            <div>📍 Jimeta, Nigeria</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-slate-400">
        © 2026 Astrovia Enterprise
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
