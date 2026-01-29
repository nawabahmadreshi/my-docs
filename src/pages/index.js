import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Nawab Ahmad Reshi" description="Portfolio">
      <main style={{maxWidth: 960, margin: '0 auto', padding: '48px 20px'}}>
        <h1 style={{fontSize: 44, margin: 0}}>Nawab Ahmad Reshi</h1>
        <p style={{fontSize: 18, lineHeight: 1.6}}>
          Welcome to my portfolio.
        </p>
      </main>
    </Layout>
  );
}
