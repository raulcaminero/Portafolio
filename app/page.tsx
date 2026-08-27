import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import { hero, about, projects, experience, skills, contact } from "@/data/content";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">raulcaminero.dev</span>
        <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="#projects" className="nav-link hover:text-accent">Projects</a>
          <a href="#experience" className="nav-link hover:text-accent">Experience</a>
          <a href="#contact" className="nav-link hover:text-accent">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-3xl flex-col-reverse items-start gap-8 px-6 py-16 sm:flex-row sm:items-center">
        <div className="flex-1">
          <h1 className="gradient-name text-4xl font-bold tracking-tight">{hero.name}</h1>
          <p className="mt-2 text-lg font-medium text-accent dark:text-accent-dark">{hero.role}</p>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{hero.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90">View Projects</a>
            <a href="#contact" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:border-accent dark:border-zinc-700">Get in Touch</a>
          </div>
        </div>
        <Image
          src="/profile.jpg"
          alt="Raúl Caminero"
          width={140}
          height={210}
          priority
          className="rounded-2xl object-cover"
        />
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="flex flex-col rounded-2xl border border-zinc-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-blue-500/10 dark:border-zinc-800 dark:hover:border-accent-dark">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
              <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">{p.description}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.details}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {p.demo && <a href={p.demo} className="text-accent hover:underline" target="_blank" rel="noreferrer">Live demo →</a>}
                {p.repo && <a href={p.repo} className="text-accent hover:underline" target="_blank" rel="noreferrer">GitHub →</a>}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ol className="space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800">
          {experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.role} · {e.company}</h3>
                <span className="text-sm text-zinc-500">{e.period}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{e.summary}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-zinc-500">
          Earlier: Beachbody, Claro Dominicana, Wepsys (Team Lead), Crestview Partners, and more —{" "}
          <a href={contact.linkedin} className="text-accent hover:underline" target="_blank" rel="noreferrer">full history on LinkedIn</a>.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="space-y-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
              <span className="w-24 shrink-0 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Open to senior full-stack, backend, and AI engineering roles. Based in {contact.location}.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <a href={`mailto:${contact.email}`} className="rounded-lg bg-accent px-4 py-2 text-white hover:opacity-90">{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-300 px-4 py-2 hover:border-accent dark:border-zinc-700">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-300 px-4 py-2 hover:border-accent dark:border-zinc-700">LinkedIn</a>
        </div>
      </Section>

      <footer className="mx-auto max-w-3xl px-6 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Raúl Caminero · Built with Next.js
      </footer>
    </main>
  );
}
