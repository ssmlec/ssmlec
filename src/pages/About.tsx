import { Eye, Target, Flag, History, Users, Building, BadgeCheck, CheckCircle2 } from "lucide-react";

import aboutLab from "@/assets/about-lab.jpg";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Seo } from "@/components/seo";
import { stats } from "@/lib/site-data";

const mvp = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "Helping engineers to become technocrats for ready engagement in the field of Automation and Industry 4.0.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To promote and enhance the continuing education of emerging technocrats and skilled talents by offering world-class, innovative and career-focused programs, and help them climb the professional path to national & multinational companies.",
  },
  {
    icon: Flag,
    title: "Our Purpose",
    desc: "An industry-centered facility providing a platform for aspiring technocrats to improve skills in software, automation and IT — a gateway to launch professional careers.",
  },
];

const timeline = [
  { year: "2010", title: "Founded", desc: "SSMLEC established as an industry-centered training facility." },
  { year: "2015", title: "Automation Focus", desc: "Expanded into PLC, SCADA and Industry 4.0 programs." },
  { year: "2019", title: "AVEVA Partnership", desc: "Became an AVEVA Authorized Training Partner." },
  { year: "2023", title: "AI Integration", desc: "Launched AI-integrated software & data science tracks." },
  { year: "2026", title: "12,000+ Alumni", desc: "Crossed 12,000 learners trained and placed." },
];

const leadership = [
  { name: "Dr. S. S. Menon", role: "Founder & Director" },
  { name: "Anita Deshpande", role: "Head of Academics" },
  { name: "Vikram Rao", role: "Head of Placements" },
  { name: "Prof. R. Krishnan", role: "Lead — Automation" },
];

const infrastructure = [
  "State-of-the-art automation & robotics labs",
  "Live PLC, SCADA & HMI training panels",
  "Modern AI/software computing labs",
  "CAD design studios",
  "Smart classrooms & seminar halls",
  "Dedicated placement & counseling center",
];

const certifications = ["AVEVA Authorized Training Partner", "Industry 4.0 Skill Certification", "ISO-aligned Training Processes"];

export default function AboutPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "About SSMLEC — Our Mission, Vision & Story | Learning Excellence Centre" },
          {
            name: "description",
            content:
              "Learn about SSM Learning Excellence Centre — an industry-centered facility helping engineers become technocrats in Automation, AI and Industry 4.0.",
          },
          { property: "og:title", content: "About SSMLEC" },
          { property: "og:description", content: "Our mission, vision, history, leadership and infrastructure." },
          { property: "og:url", content: "/about" },
        ]}
        links={[{ rel: "canonical", href: "/about" }]}
      />
      <PageHero
        eyebrow="About Us"
        title="Craft your inner technocrat"
        subtitle="SSM Learning Excellence Centre is an industry-centered gateway that turns aspiring engineers into industry-ready technocrats."
        crumbs={[{ label: "About" }]}
      />

      {/* Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img src={aboutLab} alt="SSMLEC training facility" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-glow" />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Institute Overview"
              title="A platform to launch professional careers"
              subtitle="We provide industry-based skill development, hands-on live projects and direct training from industry experts — serving as a gateway to employment at domestic and multinational companies."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <p className="font-display text-3xl font-extrabold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Purpose */}
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Purpose" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {mvp.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="card-hover h-full rounded-2xl border bg-card p-7 shadow-soft">
                    <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-accent">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{m.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Journey" title="A history of excellence" />
          <ol className="relative mt-14 space-y-8 border-l-2 border-dashed border-border pl-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[43px] grid size-8 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                    <History className="size-4" />
                  </span>
                  <div className="rounded-2xl border bg-card p-5 shadow-soft">
                    <p className="font-display text-lg font-extrabold text-accent">{t.year}</p>
                    <h3 className="font-bold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Meet the team behind SSMLEC" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="card-hover rounded-2xl border bg-card p-6 text-center shadow-soft">
                  <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-brand text-2xl font-bold text-white">
                    {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="mt-4 font-bold">{l.name}</h3>
                  <p className="text-sm text-accent">{l.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Certifications */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading align="left" eyebrow="Infrastructure" title="World-class facilities" />
            <ul className="mt-8 grid gap-3">
              {infrastructure.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl border bg-card p-4 text-sm shadow-soft">
                  <Building className="size-5 shrink-0 text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Certifications" title="Recognized & accredited" />
            <ul className="mt-8 grid gap-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl border bg-gradient-soft p-4 text-sm font-medium shadow-soft">
                  <BadgeCheck className="size-5 shrink-0 text-accent" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-hero p-6 text-white shadow-glow">
              <Users className="size-8" />
              <div>
                <p className="font-display text-lg font-bold">Join 12,000+ technocrats</p>
                <p className="text-sm text-white/70">who launched their careers with SSMLEC.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
