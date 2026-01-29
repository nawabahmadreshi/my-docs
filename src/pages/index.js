import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

const PROFILE = {
  name: 'Nawab Ahmad Reshi',
  title: 'Information Architect • Technical Writer • Docs-as-Code',
  blurb:
    'I design documentation as a product—strong information architecture, developer-first content, and docs pipelines that ship with code. I translate complex cloud and platform systems into clear, usable experiences.',
  location: 'Open to remote / hybrid',
  email: 'nawabreshi2022@gmail.com',
  github: 'https://github.com/nawabahmadreshi',
  linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN', // update
};

const STATS = [
  {label: 'Experience', value: '13+ years'},
  {label: 'Focus', value: 'Enterprise + Cloud'},
  {label: 'Strength', value: 'IA + Developer Docs'},
];

const HIGHLIGHTS = [
  'Information architecture: content models, taxonomy, navigation',
  'Developer documentation: APIs, workflows, code samples',
  'Docs-as-code delivery: GitHub PR workflow, CI/CD, Docusaurus',
  'Cross-functional collaboration: engineers, PMs, designers',
];

const CASE_STUDIES = [
  {
    title: 'Docs-as-Code Portfolio (Docusaurus + GitHub Actions)',
    desc:
      'A production-ready documentation site with PR-based updates, automated builds, and GitHub Pages deployment.',
    tags: ['Docusaurus', 'GitHub Actions', 'Docs-as-Code', 'CI/CD'],
    href: 'https://nawabahmadreshi.github.io/my-docs/',
    cta: 'View site',
  },
  {
    title: 'Information Architecture Redesign',
    desc:
      'Designed task-based navigation and metadata strategy to improve findability and reduce user friction.',
    tags: ['Information Architecture', 'Taxonomy', 'Content Model', 'Governance'],
    href: '#',
    cta: 'Add case study',
  },
  {
    title: 'API Documentation & Developer Experience',
    desc:
      'Created developer journeys with quickstarts, reference, and troubleshooting patterns, including code samples.',
    tags: ['API Docs', 'OpenAPI', 'Code Samples', 'Troubleshooting'],
    href: '#',
    cta: 'Add sample',
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
      'Code samples (JavaScript / TypeScript / Python)',
      'Platform workflows & integrations',
    ],
  },
  {
    title: 'Build & Delivery',
    items: [
      'Git/GitHub PR workflows',
      'CI/CD for docs (build checks, deploy)',
      'Docusaurus customization (basic React/Node)',
      'Markdown/MDX, JSON/YAML',
    ],
  },
];

function Pill({children}) {
  return <span className={styles.pill}>{children}</span>;
}

function Card({title, desc, tags, href, cta}) {
  const external = href?.startsWith('http');
  return (
    <a
      className={styles.card}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}>
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
      <div className={styles.cardCta}>
        <span>{cta}</span>
        <span aria-hidden="true">→</span>
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
              <div className={styles.badge}>Portfolio • Documentation & IA</div>
              <h1 className={styles.h1}>
                {PROFILE.name}
                <span className={styles.dot}>.</span>
              </h1>
              <p className={styles.subtitle}>{PROFILE.title}</p>
              <p className={styles.lead}>{PROFILE.blurb}</p>

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
                <div className={styles.panelTitle}>What I deliver</div>
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
            <h2 className={styles.h2}>Featured work</h2>
            <p className={styles.sectionSub}>
              Case-study style highlights across information architecture, developer documentation, and delivery pipelines.
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
            <h2 className={styles.h2}>Skills</h2>
            <p className={styles.sectionSub}>Focused on outcomes: clarity, findability, and adoption.</p>
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
              <h2 className={styles.h2} style={{marginBottom: 6}}>
                Let’s build documentation people love using
              </h2>
              <p className={styles.sectionSub} style={{marginBottom: 0}}>
                If you’re hiring for Information Architecture, Technical Writing, Developer Experience, or Docs-as-Code,
                I’d love to connect.
              </p>
            </div>

            <div className={styles.actions}>
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
