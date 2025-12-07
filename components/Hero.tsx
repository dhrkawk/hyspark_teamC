import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">AI 기반 보험 지급 심사 운영체제</p>
          <h1 className="hero-title">
            복잡한 지급 심사 업무, <br />
            <span className="highlight">AI로 1분 만에 해결하세요</span>
          </h1>
          <p className="hero-description">
            의료 영수증 PDF 자동 인식부터 사기 탐지, 심사 보고서 작성까지.<br />
            반복적인 수기 업무는 줄이고 정확도는 높여드립니다.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="btn btn-primary btn-lg">
              무료로 시작하기
            </Link>
            <Link href="#features" className="btn btn-outline btn-lg">
              기능 자세히 보기
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 160px 0 100px;
          text-align: center;
          background: linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%);
        }

        .hero-subtitle {
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 24px;
          color: var(--primary-color);
          line-height: 1.2;
        }

        .highlight {
          color: var(--primary-color);
          position: relative;
          display: inline-block;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 12px;
          background-color: rgba(0, 199, 174, 0.2);
          z-index: -1;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .btn-lg {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
