import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="text-center mb-8">
          <h2>요금제 안내</h2>
          <p className="section-desc">기업 규모와 처리량에 맞는 최적의 요금제를 선택하세요.</p>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>Starter</h3>
              <div className="price">
                <span className="amount">₩0</span>
                <span className="period">/월</span>
              </div>
              <p className="desc">초기 스타트업 및 소규모 팀을 위한 무료 플랜</p>
            </div>
            <div className="card-body">
              <button className="btn btn-outline w-full mb-4">무료로 시작하기</button>
              <ul className="features-list">
                <li><Check size={16} className="check-icon" /> 월 100건 PDF 파싱</li>
                <li><Check size={16} className="check-icon" /> 기본 사기 탐지 룰셋</li>
                <li><Check size={16} className="check-icon" /> 1인 사용자</li>
                <li><Check size={16} className="check-icon" /> 이메일 지원</li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card featured">
            <div className="popular-tag">Most Popular</div>
            <div className="card-header">
              <h3>Pro</h3>
              <div className="price">
                <span className="amount">₩500,000</span>
                <span className="period">/월</span>
              </div>
              <p className="desc">성장하는 보험사 및 손해사정 법인을 위한 플랜</p>
            </div>
            <div className="card-body">
              <button className="btn btn-primary w-full mb-4">도입 문의하기</button>
              <ul className="features-list">
                <li><Check size={16} className="check-icon" /> 월 5,000건 PDF 파싱</li>
                <li><Check size={16} className="check-icon" /> 고급 AI 사기 탐지 & 리스크 스코어링</li>
                <li><Check size={16} className="check-icon" /> 5인 사용자</li>
                <li><Check size={16} className="check-icon" /> API 연동 지원</li>
                <li><Check size={16} className="check-icon" /> 우선 기술 지원</li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">별도 문의</span>
              </div>
              <p className="desc">대규모 처리가 필요한 대형 보험사를 위한 맞춤형 플랜</p>
            </div>
            <div className="card-body">
              <button className="btn btn-outline w-full mb-4">영업팀 문의</button>
              <ul className="features-list">
                <li><Check size={16} className="check-icon" /> 무제한 PDF 파싱</li>
                <li><Check size={16} className="check-icon" /> 맞춤형 AI 모델 학습</li>
                <li><Check size={16} className="check-icon" /> 무제한 사용자</li>
                <li><Check size={16} className="check-icon" /> 사내 서버(On-premise) 구축 가능</li>
                <li><Check size={16} className="check-icon" /> 전담 매니저 배정</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background-color: #f8f9fa;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          border-radius: 16px;
          padding: 40px 30px;
          border: 1px solid #e1e4e8;
          position: relative;
          transition: transform 0.2s;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .pricing-card.featured {
          border: 2px solid var(--primary-color);
          box-shadow: 0 10px 30px rgba(26, 43, 75, 0.1);
        }

        .popular-tag {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .card-header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 1px solid #eee;
          padding-bottom: 30px;
        }

        .card-header h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        .price {
          display: flex;
          justify-content: center;
          align-items: baseline;
          margin-bottom: 15px;
          color: var(--primary-color);
        }

        .amount {
          font-size: 2.5rem;
          font-weight: 800;
        }

        .period {
          font-size: 1rem;
          color: var(--text-light);
          margin-left: 5px;
        }

        .desc {
          color: var(--text-light);
          font-size: 0.9rem;
          min-height: 42px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          font-size: 0.95rem;
          color: var(--text-color);
        }

        .features-list li :global(.check-icon) {
          color: var(--accent-color);
          margin-right: 10px;
          flex-shrink: 0;
        }

        .w-full { width: 100%; }
      `}</style>
    </section>
  );
}
