"use client";

import { useState } from "react";
import { ArrowUpRight, BrainCircuit, CheckCircle2, ChevronDown, Github, Linkedin, Mail, Menu, X, Code2, Database, Eye, FileText, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Personal Finance Advisor",
    featured: true,
    description: "A full-stack AI-powered web application that helps users understand transactions, manage budgets, identify suspicious activity, and receive personalized financial guidance.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Scikit-learn"],
    details: ["TF-IDF + LinearSVC transaction classification", "CalibratedClassifierCV model evaluation", "Budgeting, spending analysis and reminders", "Bank-statement import and transaction review", "Merchant rules and anomaly lifecycle", "JWT authentication and password reset"],
    metric: "94.73% model accuracy",
  },
  {
    title: "Image Captioning with Attention",
    description: "An image-to-text deep learning project using CNN feature extraction, LSTM sequence generation, and Bahdanau attention on Flickr30k.",
    tags: ["Python", "CNN", "LSTM", "Attention", "Flickr30k"],
    details: ["Visual feature extraction", "Sequence-based caption generation", "Attention mechanism", "Model evaluation and qualitative examples"],
    metric: "Computer Vision + NLP",
  },
  {
    title: "Human Pose Estimation",
    description: "Computer vision work focused on detecting and tracking human poses using YOLO and MediaPipe during an internship.",
    tags: ["YOLO", "MediaPipe", "Python", "Computer Vision"],
    details: ["Pose detection", "Landmark tracking", "Computer vision pipeline", "Practical internship experience"],
    metric: "Internship project",
  },
];

const skills = {
  "AI & Machine Learning": ["Python", "Scikit-learn", "Machine Learning", "NLP", "Model Evaluation", "Data Preprocessing"],
  "Deep Learning & Vision": ["CNN", "LSTM", "Transfer Learning", "EfficientNet", "YOLO", "MediaPipe"],
  "Web Development": ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js / Express"],
  "Data & Tools": ["PostgreSQL", "FastAPI", "Git / GitHub", "Jupyter", "Google Colab", "VS Code"],
};

const experience = [
  { role: "AI/ML Intern", company: "Sybrid", date: "2025", text: "Practical experience in AI/ML work, contributing to applied machine-learning tasks and development workflows." },
  { role: "Front-End Developer Intern", company: "Comrex", date: "2024", text: "Built and supported web interfaces during a front-end development internship." },
  { role: "Web Programmer", company: "Design Clinic, Haripur", date: "2023", text: "Worked on web programming and practical website development." },
];

const education = [
  { title: "Bachelor of Artificial Intelligence", org: "Pak-Austria Fachhochschule – Institute of Applied Sciences and Technology", detail: "2026" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(0);
  const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  return (
    <main>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070a12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-semibold tracking-tight">EF<span className="text-violet-400">.</span></a>
          <nav className="hidden gap-7 text-sm text-gray-300 md:flex">{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-white">{n}</a>)}</nav>
          <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm md:block">Let&apos;s connect</a>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <nav className="border-t border-white/10 px-5 py-4 md:hidden">{nav.map(n => <a onClick={() => setOpen(false)} key={n} href={`#${n.toLowerCase()}`} className="block py-2 text-gray-300">{n}</a>)}</nav>}
      </header>

      <section id="top" className="grid-bg relative overflow-hidden pt-36 pb-24">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1.5 text-sm text-violet-200"><Sparkles size={15}/> AI/ML Engineer · Web Developer</div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">Building practical <span className="gradient-text">AI-powered</span> applications.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">I&apos;m Eeman Fatima, an AI/ML Engineer and Artificial Intelligence graduate who enjoys turning machine-learning ideas into practical, usable products. My experience spans machine learning, NLP, computer vision, and modern web development, with hands-on work across both AI pipelines and full-stack applications.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-400/60 hover:bg-violet-500 hover:text-white hover:shadow-lg">
  View my work <ArrowUpRight size={17}/>
</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-400/60 hover:bg-violet-500 hover:text-white hover:shadow-lg">Contact me</a>
            </div>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {[['94.73%','Featured ML accuracy'],['3+','Selected projects']].map(([a,b]) => <div key={b} className="card rounded-2xl p-5"><div className="text-2xl font-semibold">{a}</div><div className="mt-1 text-sm text-gray-500">{b}</div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div><p className="text-sm font-medium text-violet-300">01 · ABOUT</p><h2 className="mt-3 text-3xl font-semibold">A practical AI profile with a strong web foundation.</h2></div>
          <div className="space-y-5 text-gray-400 leading-8"><p>I&apos;m an Artificial Intelligence graduate with a practical focus on building AI-powered applications that solve real problems. My core interests are machine learning, natural language processing, computer vision, and the integration of AI into modern web products.</p><p>My experience combines AI/ML work with hands-on web development. I have worked with Python, Scikit-learn, FastAPI, Next.js, TypeScript, PostgreSQL, and modern frontend technologies, allowing me to contribute across both machine-learning workflows and application development.</p><p>My featured project, AI Personal Finance Advisor, brings these skills together in a full-stack application with machine-learning based transaction classification, financial insights, budgeting features, and practical user workflows. I&apos;m now looking for an opportunity where I can contribute as an AI/ML Engineer, learn from experienced teams, and continue turning ideas into reliable products.</p></div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.015] py-24">
        <div className="mx-auto max-w-6xl px-5"><p className="text-sm font-medium text-violet-300">02 · SKILLS</p><h2 className="mt-3 text-3xl font-semibold">Tools I work with</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{Object.entries(skills).map(([group, items]) => <div className="card rounded-2xl p-6" key={group}><div className="flex items-center gap-3"><Code2 size={20} className="text-cyan-300"/><h3 className="font-medium">{group}</h3></div><div className="mt-5 flex flex-wrap gap-2">{items.map(i => <span key={i} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-sm text-gray-300">{i}</span>)}</div></div>)}</div></div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-violet-300">03 · PROJECTS</p><h2 className="mt-3 text-3xl font-semibold">Selected work</h2></div><p className="max-w-md text-sm leading-6 text-gray-500">A few projects showing my work across AI, machine learning, computer vision, and full-stack development.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map((p, i) => <article key={p.title} className={`card glow rounded-3xl p-6 ${p.featured ? 'md:col-span-2' : ''}`}><div className="flex items-start justify-between gap-4"><div><div className="mb-3 flex items-center gap-2 text-xs text-violet-300">{p.featured && <><Sparkles size={14}/> FEATURED PROJECT</>}</div><h3 className="text-xl font-semibold">{p.title}</h3><p className="mt-3 max-w-2xl leading-7 text-gray-400">{p.description}</p></div><div className="hidden rounded-xl border border-white/10 p-3 sm:block"><BrainCircuit size={24} className="text-cyan-300"/></div></div><div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300">{t}</span>)}</div>{p.featured && <a href="https://fin-flow-gilt.vercel.app/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200">Live project <ArrowUpRight size={16}/></a>}<button onClick={() => setExpanded(expanded === i ? null : i)} className="mt-6 inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white">{expanded === i ? 'Hide details' : 'View details'} <ChevronDown size={16} className={expanded === i ? 'rotate-180' : ''}/></button>{expanded === i && <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">{p.details.map(d => <div key={d} className="flex gap-2 text-sm text-gray-400"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-300"/>{d}</div>)}<div className="sm:col-span-2 mt-2 text-sm font-medium text-cyan-300">{p.metric}</div></div>}</article>)}</div>
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[.015] py-24"><div className="mx-auto max-w-6xl px-5"><p className="text-sm font-medium text-violet-300">04 · EXPERIENCE</p><h2 className="mt-3 text-3xl font-semibold">Professional experience</h2><div className="mt-10 space-y-4">{experience.map(e => <div key={e.role+e.company} className="card rounded-2xl p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="font-semibold">{e.role}</h3><p className="mt-1 text-sm text-violet-300">{e.company}</p></div><span className="text-sm text-gray-500">{e.date}</span></div><p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">{e.text}</p></div>)}</div></div></section>

      <section id="education" className="mx-auto max-w-6xl px-5 py-24"><p className="text-sm font-medium text-violet-300">05 · EDUCATION & RESEARCH</p><h2 className="mt-3 text-3xl font-semibold">Academic background</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{education.map((e, i) => <div key={e.title} className="card rounded-2xl p-6"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">{i === 0 ? <FileText size={20}/> : <BrainCircuit size={20}/>}</div><h3 className="font-semibold">{e.title}</h3><p className="mt-2 text-sm text-gray-400">{e.org}</p><p className="mt-3 text-sm text-gray-500">{e.detail}</p></div>)}</div></section>

      <section id="contact" className="border-t border-white/5 py-24"><div className="mx-auto max-w-6xl px-5"><div className="card glow overflow-hidden rounded-3xl p-8 sm:p-12"><div className="max-w-2xl"><p className="text-sm font-medium text-violet-300">06 · CONTACT</p><h2 className="mt-3 text-4xl font-semibold">Let&apos;s build something useful with AI.</h2><p className="mt-5 leading-7 text-gray-400">I&apos;m open to AI/ML, machine-learning, software, and relevant internship or junior opportunities.</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:fatimaeeman524@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500 hover:text-white hover:shadow-lg"><Mail size={17}/> Email me</a><a href="https://www.linkedin.com/in/eman-fatima-114034246" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500 hover:text-white hover:shadow-lg"><Linkedin size={17}/> LinkedIn</a><a href="https://github.com/Eeman-Fatima7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500 hover:text-white hover:shadow-lg"><Github size={17}/> GitHub</a></div></div></div></div></section>

      <footer className="border-t border-white/5 py-8"><div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Eeman Fatima</span><span>AI/ML Engineer · Web Developer</span></div></footer>
    </main>
  );
}
