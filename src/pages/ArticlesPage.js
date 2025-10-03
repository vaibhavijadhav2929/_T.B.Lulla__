import React, { useRef, useEffect, useState } from 'react';
import { FileText, Download, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ArticlesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.title = 'Articles - T. B. Lulla & Company';
  }, []);

  const articlesByYear = {
    '2025-2026': [
      { id: '01', title: 'ए आय चा वापर समजदारांनीच करावा ५ मे २५.pdf', pdfUrl: 'pdfs/2025-26/1-ए आय चा वापर समजदारांनीच करावा ५ मे २५.pdf' },
      { id: '02', title: 'जीएसटी अंतर्गत मूल्यमापन ३१ जुलै २५.pdf', pdfUrl: 'pdfs/2025-26/2-जीएसटी अंतर्गत मूल्यमापन ३१ जुलै २५.pdf' },
      { id: '03', title: 'संसद व न्यायपालिकेची भूमिका – एक संतुलन १९ जून २५.pdf', pdfUrl: 'pdfs/2025-26/3-संसद व न्यायपालिकेची भूमिका – एक संतुलन १९ जून २५.pdf' }
    ],
    '2024-2025': [
      { id: '01', title: 'Boomrang of Blaming 17 Aug 24.pdf', pdfUrl: 'pdfs/2024-25/1-Boomrang of Blaming 17 Aug 24.pdf' },
      { id: '02', title: 'Corruption not inevitable or Acceptable 26 Aug 24.pdf', pdfUrl: 'pdfs/2024-25/2-Corruption not inevitable or Acceptable 26 Aug 24.pdf' },
      { id: '03', title: 'Frequent amendments- A challenge to tax comsultsnts 2 Sep 24.pdf', pdfUrl: 'pdfs/2024-25/3-Frequent amendments- A challenge to tax comsultsnts 2 Sep 24.pdf' },
      { id: '04', title: 'Mandatory Registration under Section 24 vii of the CGST Act 31 Aug 24.pdf', pdfUrl: 'pdfs/2024-25/4-Mandatory Registration under Section 24 vii of the CGST Act 31 Aug 24.pdf' },
      { id: '05', title: 'Simplifying GST Registration Addressing the Address Proof Conundrum 31 Aug 24.pdf', pdfUrl: 'pdfs/2024-25/5-Simplifying GST Registration Addressing the Address Proof Conundrum 31 Aug 24.pdf' },
      { id: '06', title: 'Taxable services of social organisation 2 Sep 24.pdf', pdfUrl: 'pdfs/2024-25/6-Taxable services of social organisation 2 Sep 24.pdf' },
      { id: '07', title: 'करदात्याच्या गोपनीयतेला सर्वोच्च स्थान ७ जाने २५.pdf', pdfUrl: 'pdfs/2024-25/7-करदात्याच्या गोपनीयतेला सर्वोच्च स्थान ७ जाने २५.pdf' },
      { id: '08', title: 'जीएसटी एक पसरणारा कोरोना ८ मे २४.pdf', pdfUrl: 'pdfs/2024-25/8-जीएसटी एक पसरणारा कोरोना ८ मे २४.pdf' },
      { id: '09', title: 'जीएसटी परिषद दहा पावले पुढे.pdf', pdfUrl: 'pdfs/2024-25/9-जीएसटी परिषद दहा पावले पुढे.pdf' },
      { id: '10', title: 'टॅक्सेशन व्यवसायावर कृत्रिम बुद्धिमत्तेचा प्रभाव ४ जाने.२५.pdf', pdfUrl: 'pdfs/2024-25/10-टॅक्सेशन व्यवसायावर कृत्रिम बुद्धिमत्तेचा प्रभाव ४ जाने.२५.pdf' },
      { id: '11', title: 'प्रामाणिक व्यापारी आणि इनपुट टॅक्स क्रेडिट २६ एप्रिल २४.pdf', pdfUrl: 'pdfs/2024-25/11-प्रामाणिक व्यापारी आणि इनपुट टॅक्स क्रेडिट २६ एप्रिल २४.pdf' },
      { id: '12', title: 'भाड्याने दिलेल्या प्रॉपर्टीवरील जी. एस. टी. ऑक्टोबर २०२४.pdf', pdfUrl: 'pdfs/2024-25/12-भाड्याने दिलेल्या प्रॉपर्टीवरील जी. एस. टी. ऑक्टोबर २०२४.pdf' }
    ],
    '2023-2024': [
      { id: '01', title: 'ARTICAL FOR STR 12 july 23.pdf', pdfUrl: 'pdfs/2023-24/01-ARTICAL FOR STR 12 july 23.pdf' },
      { id: '02', title: 'एका काल्पनिक जीएसटी अधिकाऱ्याचे मनोगत Nov 23.pdf', pdfUrl: 'pdfs/2023-24/02-एका काल्पनिक जीएसटी अधिकाऱ्याचे मनोगत Nov 23.pdf' },
      { id: '03', title: 'गिफ्ट व्हाउचरवरील जीएसटी ६ .२. २४.pdf', pdfUrl: 'pdfs/2023-24/03-गिफ्ट व्हाउचरवरील जीएसटी ६ .२. २४.pdf' },
      { id: '04', title: 'जीएसटी कायद्यांतर्गत दिलेले काही महत्त्वपूर्ण निर्णय एडवोकेट किशोर लुल्ला 30 june 23.pdf', pdfUrl: 'pdfs/2023-24/04-जीएसटी कायद्यांतर्गत दिलेले काही महत्त्वपूर्ण निर्णय एडवोकेट किशोर लुल्ला 30 june 23.pdf' },
      { id: '05', title: 'जीएसटी १६(४) चे बारा वाजणार 14 Feb 24.pdf', pdfUrl: 'pdfs/2023-24/05-जीएसटी १६(४) चे बारा वाजणार 14 Feb 24.pdf' },
      { id: '06', title: 'जॉब वर्क आणि सेट ऑफ  9 May 23.pdf', pdfUrl: 'pdfs/2023-24/06-जॉब वर्क आणि सेट ऑफ  9 May 23.pdf' },
      { id: '07', title: 'रबर तुटे पर्यंत ताणू नका October 23.pdf', pdfUrl: 'pdfs/2023-24/07-रबर तुटे पर्यंत ताणू नका October 23.pdf' },
      { id: '08', title: 'राज्यांतर्गत आणि आंतरराजीय विक्रीवरील जीएसटी 23 May 23.pdf', pdfUrl: 'pdfs/2023-24/08-राज्यांतर्गत आणि आंतरराजीय विक्रीवरील जीएसटी 23 May 23.pdf' }
    ],
    '2022-2023': [
      { id: '01', title: 'ऐकावे जनाचे 24 Nov. 22.pdf', pdfUrl: 'pdfs/022-2023/01-24 Nov. 22.pdf' },
      { id: '02', title: 'क्रॉस चार्जवरील जीएसटी.pdf', pdfUrl: 'pdfs/2022-2023/02-क्रॉस चार्जवरील जीएसटी.pdf' },
      { id: '03', title: 'चुकीला माफी फक्त दोन वर्षासाठीच का Jan. 23.pdf', pdfUrl: 'pdfs/2022-2023/03-चुकीला माफी फक्त दोन वर्षासाठीच का Jan. 23.pdf' },
      { id: '04', title: 'जीएसटी कायदा काल आज आणि उद्या 8july22.pdf', pdfUrl: 'pdfs/2022-2023/04-जीएसटी कायदा काल आज आणि उद्या 8july22.pdf' },
      { id: '05', title: 'जीएसटी कायद्या अंतर्गत व्याज आणि दंडाच्या बाबतीतील काही महत्त्वपूर्ण निर्णय 7 Nov. 22.pdf', pdfUrl: 'pdfs/2022-2023/05-जीएसटी कायद्या अंतर्गत व्याज आणि दंडाच्या बाबतीतील काही महत्त्वपूर्ण निर्णय 7 Nov. 22.pdf' },
      { id: '06', title: 'जीएसटी नोंदीत व्यापारी--बर्फापेक्षाही थंड 10 Oct 22.pdf', pdfUrl: 'pdfs/2022-2023/06-जीएसटी नोंदीत व्यापारी--बर्फापेक्षाही थंड 10 Oct 22.pdf' },
      { id: '07', title: 'दुष्टचक्र 21dec.22.pdf', pdfUrl: 'pdfs/2022-2023/07-दुष्टचक्र 21dec.22.pdf' },
      { id: '08', title: 'वर्क्स कॉंट्रॅक्ट १९.०४.२२.pdf', pdfUrl: 'pdfs/2022-2023/08-वर्क्स कॉंट्रॅक्ट १९.०४.२२.pdf' },
      { id: '09', title: 'विकसित प्लॉटच्या विक्रीवरील जीएसटी 4 Mar 23.pdf', pdfUrl: 'pdfs/2022-2023/09-विकसित प्लॉटच्या विक्रीवरील जीएसटी 4 Mar 23.pdf' },
      { id: '10', title: 'व्यवसायातल्या जबाबदाऱ्या आणि त्यासाठीचे नियोजन 2 Sept. 22.pdf', pdfUrl: 'pdfs/2022-2023/10-व्यवसायातल्या जबाबदाऱ्या आणि त्यासाठीचे नियोजन 2 Sept. 22.pdf' }
    ],
    '2021-2022': [
      { id: '01', title: 'ई वे बिल बाबत बरेच काही १२.१,२२', pdfUrl: 'pdfs/2021-22/ई वे बिल बाबत बरेच काही १२.१,२२.pdf' },
      { id: '02', title: 'जीएसटी कायद्यांतर्गत कलम ६५ प्रमाणे ऑडिट.pdf', pdfUrl: 'pdfs/2021-22/जीएसटी कायद्यांतर्गत कलम ६५ प्रमाणे ऑडिट.pdf' },
      { id: '03', title: 'जीएसटी कायद्यांतर्गत मार्जिन स्कीम ७.१.२१.pdf', pdfUrl: 'pdfs/2021-22/जीएसटी कायद्यांतर्गत मार्जिन स्कीम ७.१.२१.pdf' },
      { id: '04', title: 'जीएसटी कौन्सिल ने प्रायश्चित्त करावे २९.०६.२१.pdf', pdfUrl: 'pdfs/2021-22/जीएसटी कौन्सिल ने प्रायश्चित्त करावे २९.०६.२१.pdf' },
      { id: '05', title: 'जीएसटी नोंदीत व्यापारी अजूनही आदर्श सुनेच्या भूमिकेत २०.०९.२१.pdf', pdfUrl: 'pdfs/2021-22/जीएसटी नोंदीत व्यापारी अजूनही आदर्श सुनेच्या भूमिकेत २०.०९.२१.pdf' },
      { id: '06', title: 'जीएसटी परिषदेने चिंतन शिबिर घ्यावे.pdf', pdfUrl: 'pdfs/2021-22/जीएसटी परिषदेने चिंतन शिबिर घ्यावे.pdf' },
      { id: '07', title: 'जीएसटी सेट ऑफ आहे पण मिळत नाही १२.१०.२१.pdf', pdfUrl: 'pdfs/2021-22/जीएसटी सेट ऑफ आहे पण मिळत नाही १२.१०.२१.pdf' },
      { id: '08', title: 'जीएसटी सेट ऑफ साठीचे छाननी पॅरामीटर्स ०१-१२-२०२१.pdf', pdfUrl: 'pdfs/जीएसटी सेट ऑफ साठीचे छाननी पॅरामीटर्स ०१-१२-२०२१.pdf' },
      { id: '09', title: 'डी वाय बेथेल केस मधील निर्णय २६.४.२०२१.pdf', pdfUrl: 'pdfs/डी वाय बेथेल केस मधील निर्णय २६.४.२०२१.pdf' },
      { id: '10', title: 'बिल्डर डेव्हलपर जागे व्हा २२.९.२१.pdf', pdfUrl: 'pdfs/बिल्डर डेव्हलपर जागे व्हा २२.९.२१.pdf' },
      { id: '11', title: 'बिल्डर्स आणि डेव्हलपर्स new 9.10.21.pdf', pdfUrl: 'pdfs/बिल्डर्स आणि डेव्हलपर्स new 9.10.21.pdf' },
      { id: '12', title: 'शेतमालाच्या सेवेबाबत जीएसटी चे दर २१.७.२१.pdf', pdfUrl: 'pdfs/शेतमालाच्या सेवेबाबत जीएसटी चे दर २१.७.२१.pdf' },
      { id: '13', title: 'सीजीएसटी कलम ७३,७४,७६  ९.०७.२१.pdf', pdfUrl: 'pdfs/सीजीएसटी कलम ७३,७४,७६  ९.०७.२१.pdf' },
      { id: '14', title: 'सेट ऑफ करता १८० दिवसात पैसे देणे १९.११.२१.pdf', pdfUrl: 'pdfs/सेट ऑफ करता १८० दिवसात पैसे देणे १९.११.२१.pdf' }
    ]
  };

  const years = Object.keys(articlesByYear);
  const currentArticles = articlesByYear[selectedYear] || [];

  const handlePdfClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <main style={{ paddingTop: '7rem', paddingBottom: '4rem', backgroundColor: '#f9fafb' }}>
      <section ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3rem' }}
          >
            <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Our Articles</h1>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#16a34a', margin: '0 auto 2rem auto' }}></div>
          </motion.div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Year Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '2rem', position: 'relative' }}
            >
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  cursor: 'pointer',
                  minWidth: '200px',
                  justifyContent: 'space-between'
                }}
              >
                {selectedYear}
                <ChevronDown size={20} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
              </div>
              
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '0.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  zIndex: 10,
                  minWidth: '200px'
                }}>
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
                      }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: year === selectedYear ? '#2563eb' : 'white',
                        color: year === selectedYear ? 'white' : '#1f2937',
                        cursor: 'pointer',
                        fontWeight: year === selectedYear ? '600' : '500',
                        transition: 'all 0.2s',
                        fontSize: '1.125rem'
                      }}
                      onMouseEnter={(e) => {
                        if (year !== selectedYear) {
                          e.currentTarget.style.backgroundColor = '#eff6ff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (year !== selectedYear) {
                          e.currentTarget.style.backgroundColor = 'white';
                        }
                      }}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Single Articles Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                {currentArticles.length > 0 ? (
                  currentArticles.map((article, articleIndex) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: articleIndex * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: '#f0fdf4' }}
                      onClick={() => handlePdfClick(article.pdfUrl)}
                      style={{
                        padding: '1rem',
                        borderBottom: articleIndex < currentArticles.length - 1 ? '1px solid #e5e7eb' : 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        transition: 'all 0.3s ease',
                        borderRadius: '0.375rem'
                      }}
                    >
                      <FileText size={20} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span style={{ 
                        color: '#2563eb', 
                        fontSize: '1rem', 
                        fontWeight: '500',
                        flex: 1,
                        textDecoration: 'none'
                      }}>
                        {article.id} {article.title}
                      </span>
                      <Download size={18} style={{ color: '#6b7280', flexShrink: 0 }} />
                    </motion.div>
                  ))
                ) : (
                  <p style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>No articles available for this year.</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticlesPage;
