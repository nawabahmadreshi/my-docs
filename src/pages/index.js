import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './index.module.css';

const PROFILE = {
  name: 'Nawab Ahmad Reshi',
  title: 'AI-Driven Platform Engineer | Documentation Infrastructure',
  blurb:
    'Platform and Frontend Engineer with 14+ years of experience, operating with the speed, urgency, and excellence required to build secure Documentation Infrastructure. As a builder and owner, I leverage Machine Learning (ML), Agentic AI, and MCP servers to architect automated, "paved-road" developer experiences and CI/CD pipelines. Passionate about engineering scalable, Git-based docs-as-code workflows and robust cloud infrastructure while enforcing strict IAM & Governance best practices to eliminate friction and accelerate the broader Builder Experience.',
  location: 'Open to remote / hybrid',
  email: 'nawabreshi2022@gmail.com',
  github: 'https://github.com/nawabahmadreshi',
  linkedin: 'https://www.linkedin.com/in/nawab-ahmad-b11496241/',
};

const STATS = [
  { label: 'Experience', value: '14+ years' },
  { label: 'Focus', value: 'Docs Infrastructure' },
  { label: 'Workflow', value: 'Agentic AI / ML' },
  { label: 'Domain', value: 'IAM & Governance' },
];

const HIGHLIGHTS = [
  'Agentic AI & ML: Designing Agentic AI workflows and integrating Machine Learning (ML) and MCP servers to radically accelerate infrastructure development',
  'Docs Infrastructure: Architecting the platforms, build tools, and technical stacks that power large-scale content sites',
  'IAM & Security Governance: Implementing strict Identity and Access Management controls and governance standards across CI/CD pipelines and cloud infrastructure',
  'Frontend Engineering: 10+ years of experience overseeing and delivering production-ready frontend environments',
];

const CASE_STUDIES = [
  {
    title: 'Secure Developer Portals & Paved Roads',
    desc:
      'Led the engineering of secure, highly-available developer portals. Built "paved roads" for documentation tooling that eliminated friction for technical writers while enforcing strict IAM controls and security policies.',
    tags: ['React', 'DevEx', 'IAM', 'Security Governance'],
    href: '#',
  },
  {
    title: 'Agentic AI & ML Infrastructure Workflows',
    desc:
      'Spearheaded the integration of Agentic AI, Machine Learning (ML), and MCP servers into core engineering practices. Automated complex build processes and drastically accelerated the speed of infrastructure delivery.',
    tags: ['Agentic AI', 'Machine Learning', 'Workflow Automation'],
    href: '#',
  },
  {
    title: 'Docs-as-Code CI/CD & Cloud Infrastructure',
    desc:
      'Architected scalable CI/CD pipelines (GitHub Actions, Vercel) for large-scale content delivery. Owned the end-to-end cloud infrastructure (AWS/GCP), optimizing build tooling and operating with uncompromising excellence.',
    tags: ['CI/CD', 'GitHub Actions', 'Docs-as-Code', 'Cloud'],
    href: 'https://nawabahmadreshi.github.io/my-docs/',
  },
];

const SKILLS = [
  {
    title: 'Documentation Infrastructure & Platform Engineering',
    items: [
      'Building secure, "paved-road" developer experiences and portals',
      'End-to-end ownership of frontend stacks (React) and production performance',
      'Architecting large-scale docs-as-code workflows and DITA localization',
      'Eliminating technical debt to accelerate the Builder Experience',
    ],
  },
  {
    title: 'Agentic AI, ML & Workflow Automation',
    items: [
      'Integrating Machine Learning (ML) and MCP servers into dev pipelines',
      'Building Agentic AI workflows for automated documentation generation',
      'Accelerating infrastructure development with advanced AI tooling',
      'Creating internal automation tools to eliminate friction',
    ],
  },
  {
    title: 'Security, IAM Governance & CI/CD',
    items: [
      'Implementing strict IAM & Governance controls in cloud environments',
      'Designing robust CI/CD pipelines (GitHub Actions, CircleCI, Vercel)',
      'Managing highly secure cloud infrastructure on AWS, Azure, and GCP',
      'Building secure tooling with a focus on "Always On" reliability',
    ],
  },
];

function Pill({ children }) {
  return <span className={styles.pill}>{children}</span>;
}

function Card({ title, desc, tags = [], href }) {
  const external = href?.startsWith('http');
  return (
    <a
      className={styles.card}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.cardIcon} aria-hidden="true">
          ↗
        </span>
      </div>
      <p className={styles.cardDesc}>{desc}</p>

      <div className={styles.pills}>
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <Layout title={PROFILE.name} description={`${PROFILE.title} — Portfolio`}>
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.badge}>Engineering • Information Architect</div>
              <h1 className={styles.h1}>
                {PROFILE.name}
                <span className={styles.dot}>.</span>
              </h1>
              <p className={styles.subtitle}>{PROFILE.title}</p>
              <p className={styles.lead}>{PROFILE.blurb}</p>

              <div className={styles.actions}>
                <a
                  className={clsx(styles.btn, styles.btnPrimary)}
                  href={`mailto:${PROFILE.email}`}
                >
                  Contact
                </a>
                <a
                  className={clsx(styles.btn, styles.btnResume)}
                  href={useBaseUrl('/Nawab_Updated_Resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume (PDF)
                </a>
                <a className={styles.btn} href={PROFILE.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              <div className={styles.meta}>
                <span>📍 {PROFILE.location}</span>
                <span className={styles.sep}>•</span>
                <span>✉️ {PROFILE.email}</span>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.stats}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className={styles.panel}>
                <div className={styles.panelTitle}>Focus Areas</div>
                <ul className={styles.panelList}>
                  {HIGHLIGHTS.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Featured Work & Experience</h2>
            <p className={styles.sectionSub}>
              A track record of operating with speed and excellence to build secure, AI-driven documentation infrastructure and paved developer roads.
            </p>
          </div>

          <div className={styles.grid3}>
            {CASE_STUDIES.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Technical Skills</h2>
            <p className={styles.sectionSub}>Focused on eliminating friction, enforcing IAM governance, and accelerating the Builder Experience.</p>
          </div>

          <div className={styles.grid3}>
            {SKILLS.map((s) => (
              <div key={s.title} className={styles.skillCard}>
                <h3 className={styles.skillTitle}>{s.title}</h3>
                <ul className={styles.skillList}>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className={styles.section}>
          <div className={styles.contact}>
            <div>
              <h2 className={styles.h2} style={{ marginBottom: 6 }}>
                Ready to build secure, AI-driven developer experiences?
              </h2>
              <p className={styles.sectionSub} style={{ marginBottom: 0 }}>
                Specializing in Documentation Infrastructure, Agentic AI / ML integration, and enforcing strict IAM & Governance to eliminate friction. Let's talk.
              </p>
            </div>

            <div className={styles.actions}>
              <a
                className={clsx(styles.btn, styles.btnPrimary)}
                href={`mailto:${PROFILE.email}`}
              >
                Email
              </a>
              <a className={styles.btn} href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={styles.btn} href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
