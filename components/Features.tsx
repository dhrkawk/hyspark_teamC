import React from 'react';
import { FileText, AlertTriangle, Clock, CheckCircle, Search, Shield, FileOutput } from 'lucide-react';

export default function Features() {
  return (
    <>
      <section id="about" className="section problem-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2>기존 지급 심사의 문제점</h2>
            <p className="section-desc">수작업 중심의 심사 과정은 느리고, 실수가 발생하기 쉽습니다.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="card">
              <div className="icon-box"><FileText size={32} /></div>
              <h3>반복적인 데이터 입력</h3>
              <p>심사자가 의료 영수증 PDF의 데이터를 엑셀에 일일이 입력하는 데 많은 시간을 소비합니다.</p>
            </div>
            <div className="card">
              <div className="icon-box"><AlertTriangle size={32} /></div>
              <h3>놓치기 쉬운 부정 청구</h3>
              <p>육안 심사로는 중복 청구나 과다 청구와 같은 미세한 패턴을 놓치기 쉽습니다.</p>
            </div>
            <div className="card">
              <div className="icon-box"><Clock size={32} /></div>
              <h3>심사 지연 및 적체</h3>
              <p>청구 건수가 몰리는 시기에는 심사가 지연되어 고객 만족도가 하락합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section solution-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>InsuranceOps AI가 해결해 드립니다</h2>
            <p className="section-desc">보험 심사 팀을 위한 완벽한 AI 운영체제</p>
          </div>

          <div className="features-container">
            {/* Feature 1: Text Left, Image Right */}
            <div className="feature-row">
              <div className="feature-text">
                <h3>즉각적인 PDF 파싱</h3>
                <p>의료 영수증 PDF를 업로드하면 진단명, 코드, 금액 등 핵심 데이터를 AI가 즉시 추출합니다.</p>
                <ul className="feature-points">
                  <li>OCR 기술로 99% 정확도</li>
                  <li>수기 입력 시간 90% 단축</li>
                  <li>다양한 병원 양식 자동 인식</li>
                </ul>
              </div>
              <div className="feature-image">
                <img src="/assets/features/parsing.png" alt="PDF Parsing Interface" />
              </div>
            </div>

            {/* Feature 2: Image Left, Text Right */}
            <div className="feature-row reverse">
              <div className="feature-image">
                <img src="/assets/features/fraud.png" alt="Fraud Detection Dashboard" />
              </div>
              <div className="feature-text">
                <h3>부정 청구 및 리스크 탐지</h3>
                <p>과거 데이터를 기반으로 이상 징후, 중복 청구, 사기 패턴을 자동으로 탐지하고 경고합니다.</p>
                <ul className="feature-points">
                  <li>실시간 리스크 스코어링</li>
                  <li>유사 사기 사례 자동 매칭</li>
                  <li>이상 패턴 시각화</li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Text Left, Image Right */}
            <div className="feature-row">
              <div className="feature-text">
                <h3>자동화된 심사 보고서</h3>
                <p>추출된 데이터와 리스크 분석 결과를 종합하여 심사자가 바로 검토할 수 있는 보고서를 생성합니다.</p>
                <ul className="feature-points">
                  <li>원클릭 보고서 생성</li>
                  <li>심사 의견 자동 제안</li>
                  <li>PDF/Excel 내보내기 지원</li>
                </ul>
              </div>
              <div className="feature-image">
                <img src="/assets/features/report.png" alt="Automated Reporting Screen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .problem-section {
          background-color: #fff;
        }

        .solution-section {
          background-color: var(--bg-light);
        }

        .section-desc {
          color: var(--text-light);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 10px auto 0;
        }

        .grid-cols-3 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .card {
          padding: 30px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: transform 0.2s;
          background: white;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .icon-box {
          color: var(--primary-color);
          margin-bottom: 20px;
        }

        /* New Feature Layout Styles */
        .features-container {
          display: flex;
          flex-direction: column;
          gap: 100px;
          padding: 40px 0;
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .feature-row.reverse {
          flex-direction: row-reverse;
        }

        .feature-text {
          flex: 1;
        }

        .feature-image {
          flex: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border: 1px solid #eee;
          background: white;
        }

        .feature-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s;
        }

        .feature-image:hover img {
          transform: scale(1.02);
        }

        .feature-icon {
          background: white;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          color: var(--primary-color);
          margin-bottom: 24px;
        }

        .feature-text h3 {
          font-size: 2rem;
          margin-bottom: 16px;
          color: var(--primary-color);
        }

        .feature-text p {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .feature-points {
          list-style: none;
          padding: 0;
        }

        .feature-points li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          color: var(--text-color);
        }

        .feature-points li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .feature-row, .feature-row.reverse {
            flex-direction: column;
            gap: 40px;
          }
          
          .feature-text h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
