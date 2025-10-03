import React from 'react';
import { CheckCircle } from 'lucide-react';

const Bullet = ({ children }) => (
  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
    <CheckCircle size={18} color="#16a34a" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
    <span style={{ color: '#374151' }}>{children}</span>
  </li>
);

const SectionCard = ({ title, children, cta }) => (
  <section style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 24px 50px rgba(0,0,0,0.12)', border: '1px solid #e5e7eb', padding: '1.5rem' }}>
    <h2 className="text-responsive-lg" style={{ fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>{title}</h2>
    {children}
    {cta}
  </section>
);

const AboutPage = () => {
  return (
    <main className="page-transition about-page-main" style={{ padding: '6rem 0 3rem', backgroundColor: '#f9fafb' }}>
      <style>{`
        @media (max-width: 768px) {
          .about-page-main {
            padding: 4rem 0 2rem !important;
          }
          
          .about-page-main > div {
            padding: 0 1.5rem !important;
          }
          
          .about-page-main h1 {
            font-size: 2rem !important;
          }
          
          .about-page-main section {
            padding: 1.25rem !important;
          }
          
          .about-page-main h2 {
            font-size: 1.5rem !important;
          }
          
          .about-page-main h3 {
            font-size: 1.1rem !important;
          }
          
          .about-page-main p, .about-page-main li {
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .about-page-main {
            padding: 3rem 0 2rem !important;
          }
          
          .about-page-main h1 {
            font-size: 1.75rem !important;
          }
          
          .about-page-main h2 {
            font-size: 1.3rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .about-page-main section {
            padding: 1rem !important;
            border-radius: 0.75rem !important;
          }
          
          .about-page-main ul {
            gap: 0.4rem !important;
          }
          
          .about-page-main li {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-page-main h1 {
            font-size: 1.5rem !important;
          }
          
          .about-page-main h2 {
            font-size: 1.2rem !important;
          }
          
          .about-page-main li {
            font-size: 0.85rem !important;
          }
          
          .about-page-main .about-hero-grid img {
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 className="text-responsive-xl" style={{ fontWeight: 800, color: '#111827', textAlign: 'center', margin: 0 }}>About Us</h1>
        <div style={{ width: '96px', height: '4px', backgroundColor: '#16a34a', margin: '0.75rem auto 2rem' }}></div>
        {/* Hero Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
        <style>{`
          @media (min-width: 768px) {
            .about-hero-grid {
              grid-template-columns: 320px 1fr !important;
            }
          }
        `}</style>
        <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,0,0,0.12)', border: '1px solid #e5e7eb', maxWidth: '320px', margin: '0 auto' }}>
              <img src="/04.png" alt="Amit & Kishor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e)=>{e.currentTarget.src='/TBLulla (1).jpg';}} />
            </div>
            <div>
              <p className="text-responsive-md" style={{ color: '#374151', lineHeight: 1.9, margin: 0 }}>Learn more about Amit Kishor Lulla and Advocate Kishor Lulla, their qualifications, achievements, and community work.</p>
            </div>
          </div>
        </div>

        {/* Amit Section */}
        <SectionCard title="About Amit Kishor Lulla" cta={<div style={{ marginTop: '1rem' }}><a href="#contact" style={{ backgroundColor: '#16a34a', color: 'white', padding: '0.6rem 1.1rem', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }}>Learn More</a></div>}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
            <Bullet>Amit Kishor Lulla is B.com. D.I.T. & by profession he is Sales Tax Practitioner since 2007.</Bullet>
            <Bullet>GST practitioner since 2017.</Bullet>
            <Bullet>Member of the Goods & Service Tax Practitioners Association of Maharashtra.</Bullet>
            <Bullet>Managing Committee member of Taxation Consultants Association, Sangli.</Bullet>
            <Bullet>Managing Committee member of All India Federation of Tax Practitioners.</Bullet>
            <Bullet>Active member in Rotary club activities.</Bullet>
            <Bullet>Written articles & given speeches on GST.</Bullet>
          </ul>
        </SectionCard>

        {/* Kishor Section */}
        <div style={{ height: '1.5rem' }} />
        <SectionCard title="About Advocate Kishor Lulla" cta={<div style={{ marginTop: '1rem' }}><a href="/about-detailed" style={{ backgroundColor: '#16a34a', color: 'white', padding: '0.6rem 1.1rem', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }}>Learn More</a></div>}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
            <Bullet>Advocate Kishor Lulla is B.Com.LL.B & by profession, is Sales Tax Consultant since 1980.</Bullet>
            <Bullet>He is practicing in the firm T. B. Lulla & Company at Sangli, which is established in 1959.</Bullet>
            <Bullet>He has expertise in Goods & Services Act.</Bullet>
            <Bullet>His son Amit has also joined him as GST practitioner & CA Anish Shah as Income Tax and Audit faculty. The firm also have separate accounting department.</Bullet>
            <Bullet>He is past president of Goods & Service Tax Association of Maharashtra.</Bullet>
            <Bullet>He is Managing Committee Member of All India Federation of Tax Practitioner’s Association.</Bullet>
            <Bullet>Mr. Lulla is past president of Taxation Consultants Association, Sangli.</Bullet>
            <Bullet>A book “Fun Tax Stic” released on 26th July 2013 with 62 taxation-related cartoons; many were published in the Sales Tax Review (June 2008 – July 2013).</Bullet>
            <Bullet>As a paper writer in seminars, study circles & coaching classes, he creates awareness on various topics of GST & also on Right to Information Act.</Bullet>
            <Bullet>He continuously writes articles on GST, Consumer Awareness, Right to Information Act in newspapers and magazines; delivered talks on Radio & TV.</Bullet>
            <Bullet>He is chairman of T.B. Lulla Charitable Foundation.</Bullet>
            <Bullet>Active social worker in Consumer Awareness since 1986; activist of Akhil Bhartiya Grahak Panchayat.</Bullet>
            <Bullet>To curb corruption, he has obtained information from various Government & Semi Government Departments under RTI.</Bullet>
            <Bullet>Arch Klumph Society member of Rotary International.</Bullet>
            <Bullet>Past President of Bharat Vikas Parishad, Sangli.</Bullet>
            <Bullet>Actively doing property business under the name ‘Lulla Estate Developer Pvt. Ltd’.</Bullet>
            <Bullet>Closely connected with Builders Association of India & CREDAI.</Bullet>
            <Bullet>Recipient of Late ‘Balasaheb Galgale Award 2015’ for active social work.</Bullet>
            <Bullet>Declared as ‘Sangli Icon’ in the book published by POLAD.</Bullet>
            <Bullet>Trustee of Sindhi Panchayat, Sangli.</Bullet>
          </ul>
        </SectionCard>

        {/* Personal Details */}
        <div style={{ height: '1.5rem' }} />
        <SectionCard title="Personal Details">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <style>{`
            @media (min-width: 768px) {
              .personal-details-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (min-width: 1024px) {
              .personal-details-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
          `}</style>
          <div className="personal-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div>
                <h3 className="text-responsive-md" style={{ fontWeight: 700, margin: 0, color: '#111827' }}>Amit Kishor Lulla</h3>
                <p className="text-responsive-sm" style={{ margin: '0.25rem 0', color: '#374151' }}>Mobile: 9423872374</p>
                <p className="text-responsive-sm" style={{ margin: 0, color: '#374151' }}>E–Mail: amitklulla@gmail.com</p>
              </div>
              <div>
                <h3 className="text-responsive-md" style={{ fontWeight: 700, margin: 0, color: '#111827' }}>Kishor Totaram Lulla</h3>
                <p className="text-responsive-sm" style={{ margin: '0.25rem 0', color: '#374151' }}>Mobile: 9422407979</p>
                <p className="text-responsive-sm" style={{ margin: 0, color: '#374151' }}>E–Mail: lullakishor@gmail.com</p>
              </div>
              <div>
                <h3 className="text-responsive-md" style={{ fontWeight: 700, margin: 0, color: '#111827' }}>T. B. Lulla & Company</h3>
                <p className="text-responsive-sm" style={{ margin: '0.25rem 0', color: '#374151' }}>30-A, Abhyankar Complex, Amrai Road, Sangli - 416 416. Maharashtra, India</p>
                <p className="text-responsive-sm" style={{ margin: 0, color: '#374151' }}>Phone: (0233) 2375374</p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
};

export default AboutPage;
