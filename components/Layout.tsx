import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>MediCodex - Automated Claims Processing</title>
        <meta name="description" content="AI-powered insurance claim processing and fraud detection." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <span className="logo-text">Medi<span className="highlight">Codex</span></span>
            </Link>
          </div>

          <nav className="desktop-nav">
            <Link href="#about" className="nav-link">서비스 소개</Link>
            <Link href="#features" className="nav-link">주요 기능</Link>
            <Link href="#pricing" className="nav-link">요금제</Link>
            <Link href="#contact" className="nav-link">도입 문의</Link>
          </nav>

          <div className="cta-group">
            <Link href="#contact" className="btn btn-primary btn-sm">무료 체험하기</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav">
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>서비스 소개</Link>
            <Link href="#features" onClick={() => setMobileMenuOpen(false)}>주요 기능</Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>요금제</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>도입 문의</Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>MediCodex</h3>
              <p>AI 기반 보험 지급 심사 자동화 솔루션</p>
            </div>
            <div className="footer-col">
              <h4>제품</h4>
              <Link href="#">기능 소개</Link>
              <Link href="#">보안</Link>
              <Link href="#">요금제</Link>
            </div>
            <div className="footer-col">
              <h4>회사</h4>
              <Link href="#">회사 소개</Link>
              <Link href="#">채용</Link>
              <Link href="#">문의하기</Link>
            </div>
            <div className="footer-col">
              <h4>법적 고지</h4>
              <Link href="#">개인정보 처리방침</Link>
              <Link href="#">이용약관</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MediCodex. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          background: transparent;
          transition: all 0.3s ease;
        }

        .header .container {
          height: 100%;
          display: grid;
          grid-template-columns: 200px 1fr 200px; /* Logo - Nav - CTA */
          align-items: center;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          height: 70px;
          backdrop-filter: blur(10px);
        }

        .logo {
          justify-self: start;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-color);
        }

        .highlight {
          color: var(--accent-color);
        }

        .desktop-nav {
          display: none;
          justify-self: center;
          align-items: center;
          gap: 40px; /* Increased gap */
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-color);
          transition: color 0.2s;
          font-size: 1.05rem;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .cta-group {
          display: none;
          justify-self: end;
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          display: block;
          justify-self: end;
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .cta-group {
            display: block;
          }
          .mobile-menu-btn {
            display: none;
          }
          /* Adjust grid for mobile if needed, but min-width 768 handles desktop */
        }
        
        @media (max-width: 1024px) {
           .header .container {
             grid-template-columns: auto 1fr auto;
             gap: 20px;
           }
           .desktop-nav {
             gap: 20px;
           }
        }

        @media (max-width: 768px) {
          .header .container {
            display: flex;
            justify-content: space-between;
          }
        }

        .footer {
          background-color: #f8f9fa;
          padding: 60px 0 20px;
          margin-top: 80px;
          border-top: 1px solid #eee;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-col h3 {
          margin-bottom: 15px;
        }

        .footer-col h4 {
          margin-bottom: 15px;
          font-size: 1rem;
          color: var(--primary-color);
        }

        .footer-col a {
          display: block;
          margin-bottom: 10px;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .footer-col a:hover {
          color: var(--primary-color);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: var(--text-light);
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
