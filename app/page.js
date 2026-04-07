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
      text: "Professional troubleshooting, device setup, system maintenance, and dependable technical support for teams and individuals.",
    },
    {
      title: "Digital Recovery & Security",
      text: "Account recovery assistance, Gmail and social platform support, and practical digital safety solutions.",
    },
    {
      title: "Systems Architecture",
      text: "Planning, structuring, and improving technology systems so businesses can scale with confidence and stability.",
    },
    {
      title: "Tech Consulting",
      text: "Strategic technology guidance for startups, entrepreneurs, and businesses looking to improve operations with smart solutions.",
    },
  ];

  const stats = [
    { label: "Registered Brand", value: "CAC" },
    { label: "Core Focus", value: "Software" },
    { label: "Support", value: "Fast" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      text: "We understand your business problem, technical needs, and desired outcome.",
    },
    {
      step: "02",
      title: "Design & Planning",
      text: "We map the right system, workflow, or support approach for efficient execution.",
    },
    {
      step: "03",
      title: "Build & Support",
      text: "We deliver the solution and provide the technical support needed to keep it running well.",
    },
  ];

  const faqs = [
    {
      q: "What kind of clients does Astrovia Enterprise work with?",
      a: "We work with individuals, startups, entrepreneurs, and businesses that need software solutions, integrations, IT support, or digital systems guidance.",
    },
    {
      q: "Do you only offer support services?",
      a: "No. Astrovia Enterprise combines support with software development, fintech integration, systems architecture, and broader technology solutions.",
    },
    {
      q: "Can I contact you directly for urgent support?",
      a: "Yes. You can reach out by phone or email for consultations, support requests, and project discussions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_24%),linear-gradient(180deg,#020617_0%,#07101f_45%,#020617_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-35 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1400\" height=\"1000\" viewBox=\"0 0 1400 1000\"><g fill=\"white\"><circle cx=\"80\" cy=\"80\" r=\"1.2\"/><circle cx=\"180\" cy=\"130\" r=\"1\"/><circle cx=\"290\" cy=\"65\" r=\"1.4\"/><circle cx=\"420\" cy=\"100\" r=\"1\"/><circle cx=\"530\" cy=\"60\" r=\"1.1\"/><circle cx=\"680\" cy=\"140\" r=\"1\"/><circle cx=\"790\" cy=\"90\" r=\"1.3\"/><circle cx=\"930\" cy=\"70\" r=\"1\"/><circle cx=\"1090\" cy=\"110\" r=\"1.2\"/><circle cx=\"1230\" cy=\"80\" r=\"1\"/><circle cx=\"1330\" cy=\"160\" r=\"1.3\"/><circle cx=\"110\" cy=\"280\" r=\"1\"/><circle cx=\"250\" cy=\"240\" r=\"1.4\"/><circle cx=\"380\" cy=\"300\" r=\"1\"/><circle cx=\"520\" cy=\"260\" r=\"1.1\"/><circle cx=\"670\" cy=\"310\" r=\"1.2\"/><circle cx=\"820\" cy=\"250\" r=\"1\"/><circle cx=\"960\" cy=\"320\" r=\"1.4\"/><circle cx=\"1120\" cy=\"270\" r=\"1.1\"/><circle cx=\"1280\" cy=\"300\" r=\"1\"/><circle cx=\"90\" cy=\"470\" r=\"1.2\"/><circle cx=\"210\" cy=\"420\" r=\"1\"/><circle cx=\"360\" cy=\"500\" r=\"1.4\"/><circle cx=\"510\" cy=\"450\" r=\"1\"/><circle cx=\"650\" cy=\"540\" r=\"1.1\"/><circle cx=\"820\" cy=\"470\" r=\"1.3\"/><circle cx=\"980\" cy=\"530\" r=\"1\"/><circle cx=\"1170\" cy=\"460\" r=\"1.2\"/><circle cx=\"1310\" cy=\"520\" r=\"1\"/><circle cx=\"130\" cy=\"690\" r=\"1.1\"/><circle cx=\"280\" cy=\"640\" r=\"1\"/><circle cx=\"430\" cy=\"730\" r=\"1.4\"/><circle cx=\"620\" cy=\"670\" r=\"1.1\"/><circle cx=\"800\" cy=\"760\" r=\"1\"/><circle cx=\"970\" cy=\"700\" r=\"1.3\"/><circle cx=\"1140\" cy=\"780\" r=\"1\"/><circle cx=\"1300\" cy=\"710\" r=\"1.2\"/></g></svg>')]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-blue-950/30">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border-[3px] border-blue-300 rounded-full rotate-[-22deg]" />
                <div className="absolute left-1 top-1 w-5 h-5 border-t-[18px] border-t-blue-400 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent" style={{ clipPath: "polygon(50% 0%, 100% 100%, 76% 100%, 50% 46%, 24% 100%, 0% 100%)" }} />
              </div>
            </div>
            <div>
              <div className="text-lg font-bold tracking-[0.22em]">ASTROVIA</div>
              <div className="text-xs text-blue-200/80 tracking-[0.42em]">ENTERPRISE</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <a href="#contact" className="hidden sm:inline-flex rounded-2xl bg-blue-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-950/30 hover:bg-blue-400 transition">
            Let’s Talk
          </a>
        </div>
      </header>

      <main id="home">
        <section className="max-w-7xl mx-auto px-6 pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/10 px-4 py-2 text-sm text-blue-100 shadow-lg shadow-blue-950/20">
                <span className="h-2 w-2 rounded-full bg-blue-300" />
                Registered Technology & Software Company
              </div>

              <h1 className="mt-7 text-4xl md:text-6xl font-black leading-tight max-w-4xl">
                Building smart
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-400"> software and technology </span>
                solutions for modern businesses.
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-8">
                Astrovia Enterprise delivers professional software solutions, fintech integrations, IT support, and digital systems that help businesses operate faster, smarter, and more efficiently.
              </p>

              <p className="mt-5 text-xl text-blue-100 font-medium">
                Software Excellence. IT Support at Warp Speed.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-950/30 hover:bg-blue-400 transition">
                  Get Started
                </a>
                <a href="#services" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-90" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl shadow-black/30">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 min-h-[520px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_30%,rgba(147,197,253,0.22),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.18),transparent_20%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.5))]" />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-blue-500/15 to-transparent" />

                  <div className="absolute top-8 left-8 right-8 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-blue-100/70">
                    <span>Astrovia Enterprise</span>
                    <span>System Architecture</span>
                  </div>

                  <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px]">
                    <div className="absolute inset-[10px] border-[10px] border-blue-300/95 rounded-full rotate-[-22deg]" />
                    <div className="absolute inset-[34px] border-[7px] border-blue-500/85 rounded-full rotate-[-22deg]" />
                    <div className="absolute left-[26%] top-[5%] w-32 h-48 bg-gradient-to-b from-sky-400 to-blue-700" style={{ clipPath: "polygon(50% 0%, 100% 100%, 76% 100%, 50% 46%, 24% 100%, 0% 100%)" }} />
                    <div className="absolute left-[36%] top-[50%] w-32 h-14 bg-gradient-to-r from-blue-700 to-sky-400" style={{ clipPath: "polygon(0 60%, 56% 0, 100% 20%, 65% 100%, 56% 74%, 12% 100%, 28% 62%)" }} />
                    <div className="absolute right-[6%] top-[10%] h-5 w-5 rounded-full bg-blue-100 shadow-[0_0_28px_rgba(191,219,254,1)]" />
                    <div className="absolute left-[8%] bottom-[24%] h-4 w-4 rounded-full bg-blue-400" />
                    <div className="absolute left-[14%] bottom-[14%] h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <div className="absolute left-[28%] bottom-[10%] h-4 w-4 rounded-full bg-blue-500" />
                  </div>

                  <div className="absolute left-8 right-8 bottom-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <div className="text-sm font-semibold text-white">Software Architecture</div>
                      <div className="mt-1 text-xs text-slate-400">Scalable systems for real business growth.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <div className="text-sm font-semibold text-white">Digital Infrastructure</div>
                      <div className="mt-1 text-xs text-slate-400">Reliable support, integration, and execution.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-blue-200">Our Expertise</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Technology services designed to power smarter operations.</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.7rem] border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl shadow-black/20 hover:bg-white/10 transition">
                <div className="w-12 h-12 rounded-2xl border border-blue-300/20 bg-blue-400/15 mb-5" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.26em] text-blue-200">About Astrovia</p>
              <h2 className="mt-3 text-3xl font-bold">A registered technology brand built for modern digital solutions.</h2>
              <p className="mt-5 text-slate-300 leading-8">
                Astrovia Enterprise blends software thinking, systems architecture, practical IT support, and digital innovation to help businesses and individuals solve real-world technology challenges.
              </p>
              <p className="mt-5 text-slate-300 leading-8">
                From software development and fintech workflows to technical support and digital recovery, we focus on practical solutions with a strong professional standard.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-8 backdrop-blur-md">
              <div className="space-y-5 text-slate-200">
                <div className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span>Strong identity rooted in software, infrastructure, and professional support.</span>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span>Built to serve both business operations and modern digital transformation needs.</span>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span>Combines cosmic brand energy with practical technology execution.</span>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span>Focused on trust, reliability, speed, and long-term problem solving.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-blue-200">How We Work</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A simple process built around clarity and execution.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {process.map((item) => (
              <div key={item.step} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl shadow-black/20">
                <div className="text-3xl font-black text-blue-300">{item.step}</div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-blue-200">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Answers to common questions about Astrovia Enterprise.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl shadow-black/20">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 text-slate-300 leading-7">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl shadow-black/30">
            <p className="text-sm uppercase tracking-[0.26em] text-blue-200">Contact Astrovia</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Let’s build your next technology solution.</h2>
            <p className="mt-5 text-slate-300 max-w-2xl mx-auto leading-8">
              Reach out for software projects, fintech integrations, IT support services, and digital solutions tailored to your business goals.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm text-slate-400">Phone</div>
                <div className="mt-2 text-lg font-semibold">07081197352</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm text-slate-400">Email</div>
                <div className="mt-2 text-lg font-semibold break-all">aminuastroboy@gmail.com</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm text-slate-400">Location</div>
                <div className="mt-2 text-lg font-semibold">Mayanka Road, Jimeta, Nigeria</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:aminuastroboy@gmail.com" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition">
                Email Us
              </a>
              <a href="tel:07081197352" className="rounded-2xl border border-white/15 bg-transparent px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2026 Astrovia Enterprise. All rights reserved.</p>
          <p>Software Excellence. IT Support at Warp Speed.</p>
        </div>
      </footer>
    </div>
  );
}
