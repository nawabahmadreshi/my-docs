import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

const PROFILE = {
  name: 'Nawab Ahmad Reshi',
  title: 'Information Architect • Technical Writer • Docs-as-Code',
  location: 'India • Open to remote / hybrid',
  email: 'nawabreshi2022@gmail.com',
  github: 'https://github.com/nawabahmadreshi',
  linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN', // <-- update
  resumeUrl: '/my-docs/resume', // if you create a resume page; else use a PDF link
};

const STATS = [
  {label: 'Experience', value: '13+ yrs'},
  {label: 'Focus', value: 'Enterprise & Cloud'},
  {label: 'Strength', value: 'IA + Developer Docs'},
];

const CASE_STUDIES = [
  {
    title: 'Docs-as-Code Platform (Docusaurus + GitHub Actions)',
    desc:
      'Built a documentation platform with PR-based workflows, automated builds, and GitHub Pages deployment—optimized for scale and maintainability.',
    tags: ['Docusaurus', 'GitHub Actions', 'Docs-as-Code', 'CI/CD'],
    href: 'https://nawabahmadreshi.github.io/my-docs/',
  },
  {
    title: 'Information Architecture Redesign',
    desc:
      'Designed a task-based navigation model with taxonomy/metadata strategy and governance—improving findability and reducing user friction.',
    tags: ['Information Architecture', 'Taxonomy', 'Content Model', 'Governance'],
    href: '#',
  },
  {
    title: 'API Documentation & Developer Experience',
    desc:
      'Created developer journeys across quickstarts, how-tos, and reference, including code samples and troubleshooting patterns for APIs/workflows.',
    tags: ['API Docs', 'OpenAPI', 'Code Samples', 'Troubleshooting'],
    href: '#',
  },
];

const SKILLS = [
  {
    title: 'Information Architecture',
    items: [
      'Content modeling & structured content',
      'Taxonomy, metadata strategy, governance',
      'Task-based navigation & wayfinding',
      'UX-focused documentation design',
    ],
  },
  {
    title: 'Developer Documentation',
    items: [
      'REST & OpenAPI-based docs',
      'Tutorials, how-tos, reference, troubleshooting',
      'Code samples (JS/TS or Python)',
      'Platform workflows & integrations',
    ],
  },
  {
    title: 'Build & Delivery',
    items: [
      'Git/GitHub PR workflows',
      'CI/CD for docs (build, checks, deploy)',
      'Docusaurus customization (basic React/Node)',
      'Markdown/MDX, JSON/YAML',
    ],
  },
];

function Pill({children}) {
  return <span className={styles.pill}>{children}</span>;
}

function Card({title, desc, tags, href}) {
  return (
    <a className={styles.card} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.cardArrow} aria-hidden="true">↗</span>
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
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.kicker}>Portfolio</div>
              <h1 className={styles.h1}>{PROFILE.name}</h1>
              <p className={styles.subtitle}>{PROFILE.title}</p>
              <p className={styles.lead}>
                I design documentation as a product: strong information architecture, developer-first content,
                and docs-as-code delivery. I translate complex cloud/platform systems into clear, usable experiences.
              </p>

              <div className={styles.actions}>
                <a className={clsx(styles.btn, styles.btnPrimary)} href={`mailto:${PROFILE.email}`}>
                  Contact
                </a>
                <a className={styles.btn} href={PROFILE.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className={styles.btn} href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <Link className={styles.btn} to="/docs/intro">
                  Writing Samples
                </Link>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}>📍 {PROFILE.location}</span>
                <span className={styles.dot} aria-hidden="true">•</span>
                <span className={styles.metaItem}>✉️ {PROFILE.email}</span>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.stats}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className={styles.panelBlock}>
                <div className={styles.panelTitle}>What I bring</div>
                <ul className={styles.panelList}>
                  <li>Information architecture: content models, taxonomy, navigation</li>
                  <li>Developer documentation: APIs, workflows, code samples</li>
                  <li>Build mindset: GitHub workflows, CI/CD, Docusaurus customization</li>
                  <li>Cross-functional collaboration: engineers, PMs, designers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Featured work</h2>
            <p className={styles.sectionSub}>
              Case-study style highlights: architecture, developer docs, and delivery pipelines.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {CASE_STUDIES.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Skills</h2>
            <p className={styles.sectionSub}>Focused on outcomes: clarity, findability, and adoption.</p>
          </div>

          <div className={styles.skillGrid}>
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
        </sectionAlt>

        {/* CONTACT */}
        <section className={styles.section}>
          <div className={styles.contactBox}>
            <div>
              <h2 className={styles.h2} style={{marginBottom: 8}}>Let’s build something usable</h2>
              <p className={styles.sectionSub} style={{marginBottom: 0}}>
                If you’re hiring for Information Architecture, Technical Writing, Developer Experience, or Docs-as-Code,
                I’d love to connect.
              </p>
            </div>

            <div className={styles.contactActions}>
              <a className={clsx(styles.btn, styles.btnPrimary)} href={`mailto:${PROFILE.email}`}>
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
