import React from 'react';

const GSTInfoPage = () => {
  const styles = {
    container: {
      padding: '5rem 2rem',
      backgroundColor: '#f9fafb',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '3rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#16a34a',
      marginBottom: '1rem',
    },
    cardText: {
      color: '#4b5563',
      lineHeight: '1.6',
    },
  };

  return (
    <main className="page-transition">
      <section style={styles.container}>
        <h1 style={styles.title}>GST Information</h1>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>GST Registration</h2>
            <p style={styles.cardText}>We provide hassle-free GST registration services for all types of businesses. Our team ensures that your registration process is smooth and completed within the stipulated time frame.</p>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>GST Return Filing</h2>
            <p style={styles.cardText}>Our experts handle the filing of all your GST returns, including GSTR-1, GSTR-3B, and annual returns. We ensure accuracy and timeliness to keep you compliant.</p>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>GST Consultation</h2>
            <p style={styles.cardText}>Get expert advice on any GST-related matter. We offer consultation on compliance, input tax credit, and other complex issues to help you navigate the GST landscape effectively.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GSTInfoPage;
