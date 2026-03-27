import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './index.module.css';

const PROFILE = {
  name: 'Nawab Ahmad Reshi',
  title: 'Information Architect | Complex Systems & Infrastructure, Network Systems & Technical Publishing',
  blurb:
    'Information Architect with 14+ years of experience designing scalable documentation systems for complex platforms, including infrastructure, distributed systems, and network-aware applications. Intermediate experience in building AI agentic tooling to automate and enhance documentation workflows. Expertise in DITA, Markdown, LaTeX, and Git-based workflows, with strong experience translating complex engineering concepts into structured, user-centric documentation. Currently expanding domain expertise in Complex Systems & Infrastructure, industrial networking, and communication protocols.',
  location: 'Open to remote / hybrid',
  email: 'nawabreshi2022@gmail.com',
  github: 'https://github.com/nawabahmadreshi',
  linkedin: 'https://www.linkedin.com/in/nawab-ahmad-b11496241/',
};

const STATS = [
  { label: 'Experience', value: '14+ years' },
  { label: 'Focus', value: 'Engineering & Infrastructure' },
  { label: 'Strength', value: 'Architecture & System IA' },
];

const HIGHLIGHTS = [
  'Engineering Architecture: System workflows, topology, & interactions',
  'Complex System Translation: Complex Systems & Infrastructure, networking, and network architecture',
  'AI Agentic Tooling: Building automated documentation & agentic workflows',
  'Docs-as-code: CI/CD, Git-based workflows, & automated delivery',
];

const CASE_STUDIES = [
  {
    title: 'Engineering Documentation & Infrastructure (Aquera)',
    desc:
      'Documented system architectures and integration workflows for complex distributed platforms, aligning with infrastructure and network-based systems. Collaborated with engineers to translate backend systems, APIs, and infrastructure components into structured documentation.',
    tags: ['Distributed Systems', 'Infrastructure', 'API Strategy', 'Network-aware Apps'],
    href: '#',
  },
  {
    title: 'System Architecture & Documentation Strategy (Samsung/Eclipse)',
    desc:
      'Designed task-based navigation and metadata strategy for large-scale engineering environments. Created visual representations of system workflows, architecture interactions, and cross-platform integrations to reduce user friction.',
    tags: ['System Architecture', 'Technical Workflows', 'Metadata Strategy', 'Governance'],
    href: '#',
  },
  {
    title: 'Docs-as-Code Portfolio (Docusaurus + Automation)',
    desc:
      'A production-ready documentation site with PR-based updates, automated builds, and GitHub Pages deployment, supporting scalable, modular content similar to industrial environments.',
    tags: ['Docusaurus', 'GitHub Actions', 'Docs-as-Code', 'CI/CD'],
    href: 'https://nawabahmadreshi.github.io/my-docs/',
  },
];

const SKILLS = [
  {
    title: 'Technical Documentation Expertise',
    items: [
      'System Architecture & Topology Documentation',
      'Network Configuration & Infrastructure Documentation',
      'API & Protocol Documentation (REST, OpenAPI, Distributed Systems)',
      'Installation & Configuration Guides',
      'End-user & Operational Documentation',
      'Security, Access Control & System Workflow Docs',
    ],
  },
  {
    title: 'Industrial & Networking Concepts',
    items: [
      'Complex Systems & Infrastructure (Foundational Knowledge)',
      'Industrial Communication Protocols (Modbus, OPC – working knowledge)',
      'Networking Fundamentals: TCP/IP, VLANs, VPNs, IP Routing',
      'System Architecture & Network Topology Documentation',
      'Distributed Systems & Integration Workflows Documentation',
      'Infrastructure & Network-Aware Documentation Practices',
      'Technical Documentation for Real-Time and Data Acquisition Systems',
      'Cross-System Communication & Protocol-Oriented Documentation',
    ],
  },
  {
    title: 'Build, Delivery & Tools',
    items: [
      'Git/GitHub PR workflows & CI/CD Pipelines',
      'AI Agentic Tooling: Building automated documentation workflows',
      'Diagramming: Microsoft Visio, Miro, Network Diagramming',
      'XML/DITA, Markdown/MDX, JSON/YAML, LaTeX',
      'Docusaurus customization (React/Node)',
      'Experience documenting complex, real-time distributed systems',
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
              Technical leadership in designing documentation for complex infrastructure, distributed platforms, and engineering workflows.
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
            <p className={styles.sectionSub}>Focused on outcomes: clarity, findability, and engineering adoption.</p>
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
                Let’s build documentation for complex systems
              </h2>
              <p className={styles.sectionSub} style={{ marginBottom: 0 }}>
                Specializing in Complex Systems & Infrastructure, Network Systems, and Docs-as-Code. Currently upskilling in industrial automation and communication protocols.
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
