import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>도입 문의</h2>
            <p>보험 심사 업무의 혁신, 지금 바로 시작하세요. 데모 시연이나 상세 견적이 필요하시면 언제든 문의해주세요.</p>
            <div className="info-item">
              <strong>이메일:</strong> sales@medicodex.ai
            </div>
            <div className="info-item">
              <strong>전화번호:</strong> 02-1234-5678
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>회사명</label>
              <input type="text" placeholder="예: 한국보험" />
            </div>
            <div className="form-group">
              <label>담당자 이메일</label>
              <input type="email" placeholder="name@company.com" />
            </div>
            <div className="form-group">
              <label>직군</label>
              <select>
                <option>선택해주세요...</option>
                <option>보험사 (원수사)</option>
                <option>손해사정 법인</option>
                <option>준법감시/감사팀</option>
                <option>기타</option>
              </select>
            </div>
            <div className="form-group">
              <label>문의 내용</label>
              <textarea rows={4} placeholder="궁금하신 점이나 요청사항을 적어주세요..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">문의하기</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--primary-color);
          color: white;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .contact-info h2 {
          color: white;
          margin-bottom: 20px;
        }

        .contact-info p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .info-item {
          margin-bottom: 15px;
        }

        .contact-form {
          background: white;
          padding: 40px;
          border-radius: 12px;
          color: var(--text-color);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .w-full { width: 100%; }

        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
