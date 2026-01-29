]import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Nawab Ahmad Reshi"
      description="Portfolio of Nawab Ahmad Reshi">
      <main style={{maxWidth: 960, margin: '0 auto', padding: '48px 20px'}}>
        <header style={{display: 'grid', gap: 16}}>
          <h1 style={{fontSize: 44, margin: 0}}>Nawab Ahmad Reshi</h1>
          <p style={{fontSize: 18, lineHeight: 1.6, margin: 0}}>
            I build integrations, automation, and developer-friendly docs. I enjoy turning complex systems into
            clean workflows.
          </p>
          <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8}}>
            <a href="mailto:YOUR_EMAIL" style={btnPrimary}>Email me</a>
            <a href="https://github.com/nawabahmadreshi" style={btn}>GitHub</a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" style={btn}>LinkedIn</a>
            <a href="/my-docs/docs/intro" style={btn}>Docs</a>
          </div>
        </header>

        <section style={{marginTop: 56}}>
          <h2>Projects</h2>
          <div style={grid}>
            <ProjectCard
              title="Docusaurus Portfolio"
              desc="My portfolio and documentation site deployed to GitHub Pages."
              link="https://nawabahmadreshi.github.io/my-docs/"
              tags={['Docusaurus', 'GitHub Actions', 'Docs']}
            />
            <ProjectCard
              title="Integration Automation"
              desc="Automated lifecycle events and ticket creation across systems."
              link="#"
              tags={['APIs', 'Automation', 'Workflows']}
            />
            <ProjectCard
              title="Guest Accounts Portal Guide"
              desc="Quick-start guides and admin workflows for onboarding and management."
              link="#"
              tags={['Documentation', 'UX writing']}
            />
          </div>
        </section>

        <section style={{marginTop: 56}}>
          <h2>Skills</h2>
          <div style={pillWrap}>
            {['Integrations', 'REST APIs', 'SCIM', 'Docs', 'Automation', 'JavaScript', 'Node.js'].map((s) => (
              <span key={s} style={pill}>{s}</span>
            ))}
          </div>
        </section>

        <section style={{marginTop: 56}}>
          <h2>Contact</h2>
          <p style={{marginTop: 8}}>
            Want to collaborate or chat? Reach me at <a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}

function ProjectCard({title, desc, link, tags}) {
  return (
    <a href={link} style={card}>
      <div style={{display: 'grid', gap: 8}}>
        <div style={{fontWeight: 700, fontSize: 18}}>{title}</div>
        <div style={{opacity: 0.85, lineHeight: 1.5}}>{desc}</div>
        <div style={pillWrap}>
          {tags.map((t) => (
            <span key={t} style={pill}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

const btn = {
  display: 'inline-block',
  padding: '10px 14px',
  borderRadius: 10,
  border: '1px solid rgba(0,0,0,0.15)',
  textDecoration: 'none',
};

const btnPrimary = {
  ...btn,
  background: 'black',
  color: 'white',
  border: '1px solid black',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 16,
  marginTop: 16,
};

const card = {
  border: '1px solid rgba(0,0,0,0.12)',
  borderRadius: 16,
  padding: 16,
  textDecoration: 'none',
  color: 'inherit',
};

const pillWrap = {display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12};

const pill = {
  border: '1px solid rgba(0,0,0,0.15)',
  borderRadius: 999,
  padding: '6px 10px',
  fontSize: 13,
};
