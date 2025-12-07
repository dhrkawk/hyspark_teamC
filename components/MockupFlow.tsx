import React, { useState } from 'react';
import { Upload, FileText, AlertOctagon, Download, Check } from 'lucide-react';

export default function MockupFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 0, title: 'PDF 업로드', icon: Upload },
    { id: 1, title: '데이터 파싱', icon: FileText },
    { id: 2, title: '리스크 분석', icon: AlertOctagon },
    { id: 3, title: '리포트 생성', icon: Download },
  ];

  return (
    <section className="section mockup-section">
      <div className="container">
        <div className="text-center mb-8">
          <h2>서비스 이용 프로세스</h2>
          <p className="section-desc">PDF 업로드부터 심사 리포트 생성까지 단 1분이면 충분합니다.</p>
        </div>

        <div className="flow-container">
          <div className="steps-nav">
            {steps.map((step, index) => (
              <button 
                key={step.id}
                className={`step-btn ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-icon">
                  <step.icon size={20} />
                </div>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          <div className="mockup-window">
            <div className="window-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="address-bar">insuranceops.ai/dashboard</div>
            </div>
            
            <div className="window-content">
              {activeStep === 0 && (
                <div className="view-upload">
                  <div className="upload-zone">
                    <Upload size={48} className="text-gray" />
                    <h3>의료 영수증/진단서 PDF 업로드</h3>
                    <p>파일을 이곳에 드래그하거나 클릭하여 선택하세요</p>
                    <button className="btn btn-primary mt-4">파일 선택하기</button>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="view-parsing">
                  <div className="data-table-header">
                    <h4>파싱된 데이터 결과</h4>
                    <span className="badge">신뢰도: 98%</span>
                  </div>
                  <table className="mock-table">
                    <thead>
                      <tr>
                        <th>날짜</th>
                        <th>진단 코드</th>
                        <th>항목명</th>
                        <th>금액</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2023-10-12</td>
                        <td>M54.5</td>
                        <td>요추의 통증</td>
                        <td>150,000원</td>
                      </tr>
                      <tr>
                        <td>2023-10-12</td>
                        <td>97110</td>
                        <td>재활 치료</td>
                        <td>85,000원</td>
                      </tr>
                      <tr>
                        <td>2023-10-12</td>
                        <td>97140</td>
                        <td>도수 치료</td>
                        <td>60,000원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeStep === 2 && (
                <div className="view-risk">
                  <div className="risk-alert-box">
                    <div className="alert-header">
                      <AlertOctagon size={24} color="#d63031" />
                      <h3>잠재적 사기 위험 감지</h3>
                    </div>
                    <p>해당 청구 건은 알려진 "업코딩(Upcoding)" 사례와 유사한 패턴을 보입니다.</p>
                    <div className="risk-score">
                      <span>위험 점수:</span>
                      <div className="score-bar">
                        <div className="score-fill high"></div>
                      </div>
                      <span className="score-val">85/100</span>
                    </div>
                  </div>
                  <div className="similar-cases">
                    <h4>유사 과거 사례</h4>
                    <div className="case-item">
                      <span>Case #9921</span>
                      <span className="tag fraud">사기 확정</span>
                    </div>
                    <div className="case-item">
                      <span>Case #8832</span>
                      <span className="tag warning">심사 중</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="view-export">
                  <div className="report-preview">
                    <div className="report-header">
                      <h3>심사 분석 리포트</h3>
                      <p>생성일: 2023년 10월 14일</p>
                    </div>
                    <div className="report-body">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line short"></div>
                      <div className="chart-placeholder"></div>
                    </div>
                    <div className="export-actions">
                      <button className="btn btn-primary"><Download size={16} /> PDF 다운로드</button>
                      <button className="btn btn-outline">심사역에게 전송</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mockup-section {
          background-color: #f0f4f8;
        }

        .flow-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .steps-nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .step-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border: none;
          background: white;
          border-radius: 30px;
          font-weight: 600;
          color: var(--text-light);
          transition: all 0.3s;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .step-btn.active {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(26, 43, 75, 0.2);
        }

        .mockup-window {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          overflow: hidden;
          border: 1px solid #e1e4e8;
          min-height: 500px;
          display: flex;
          flex-direction: column;
        }

        .window-header {
          background: #f8f9fa;
          padding: 12px 20px;
          border-bottom: 1px solid #e1e4e8;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .address-bar {
          background: white;
          flex: 1;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          color: #888;
          text-align: center;
          border: 1px solid #e1e4e8;
        }

        .window-content {
          padding: 40px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Upload View */
        .upload-zone {
          border: 2px dashed #ccc;
          padding: 60px;
          border-radius: 12px;
          text-align: center;
          width: 100%;
          max-width: 500px;
          background: #fafafa;
        }
        .text-gray { color: #aaa; margin-bottom: 10px; }

        /* Parsing View */
        .view-parsing { width: 100%; }
        .data-table-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .mock-table {
          width: 100%;
          border-collapse: collapse;
        }
        .mock-table th, .mock-table td {
          text-align: left;
          padding: 12px;
          border-bottom: 1px solid #eee;
        }
        .mock-table th {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        /* Risk View */
        .view-risk { width: 100%; max-width: 600px; }
        .risk-alert-box {
          border: 1px solid #ffcccc;
          background: #fff5f5;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .alert-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d63031;
          margin-bottom: 10px;
        }
        .risk-score {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
          font-weight: bold;
        }
        .score-bar {
          flex: 1;
          height: 10px;
          background: #eee;
          border-radius: 5px;
          overflow: hidden;
        }
        .score-fill {
          height: 100%;
          width: 85%;
          background: #d63031;
        }
        .similar-cases {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }
        .case-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .tag {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        .tag.fraud { background: #ffecec; color: #d63031; }
        .tag.warning { background: #fff8e1; color: #f1c40f; }

        /* Export View */
        .view-export { width: 100%; max-width: 500px; }
        .report-preview {
          border: 1px solid #eee;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .report-body { margin: 30px 0; }
        .line { height: 10px; background: #eee; margin-bottom: 10px; width: 100%; }
        .line.short { width: 60%; }
        .chart-placeholder { height: 100px; background: #f8f9fa; margin-top: 20px; border-radius: 4px; }
        .export-actions {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
