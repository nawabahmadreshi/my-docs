import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Nawab Ahmad Reshi"
      description="Information Architect & Technical Writer">
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '56px 20px' }}>

        <section>
          <h1 style={{ fontSize: 44, marginBottom: 8 }}>
            Nawab Ahmad Reshi
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.6 }}>
            Information Architect | Technical Writer | Docs-as-Code & Developer Documentation
          </p>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2>Professional Summary</h2>
          <p>
            I am a senior Information Architect and Technical Writer with 13+ years of experience
            designing documentation systems for enterprise, cloud, and developer platforms.
            I specialize in transforming complex systems into clear, structured, and usable
            information experiences.
          </p>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2>What I Do</h2>
          <ul>
            <li>Information architecture and content modeling</li>
            <li>Developer and API documentation</li>
            <li>Docs-as-code platforms and CI/CD pipelines</li>
            <li>UX-focused documentation design</li>
            <li>Cross-functional collaboration in Agile environments</li>
          </ul>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2>Skills & Expertise</h2>
          <p>
            Information Architecture · Technical Writing · Developer Documentation · APIs ·
            Docs-as-Code · GitHub · Docusaurus · Markdown · OpenAPI · Cloud Platforms ·
            Agile · UX Documentation · Automation
          </p>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2>Experience Highlights</h2>
          <ul>
            <li>
              Designed and automated documentation infrastructure and publishing workflows
              for enterprise platforms.
            </li>
            <li>
              Led content strategy and IA initiatives improving documentation usability and engagement.
            </li>
            <li>
              Built and maintained developer documentation for APIs and cloud services.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2>Contact</h2>
          <p>
            📧 <a href="mailto:nawabreshi2022@gmail.com">nawabreshi2022@gmail.com</a><br />
            💻 <a href="https://github.com/nawabahmadreshi">GitHub</a>
          </p>
        </section>

      </main>
    </Layout>
  );
}
