import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cases.css';
import casesImg from '../../assets/case-studies.jpg';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('https://astonishlaw.digispheretech.in/case/getallcases');
        const result = await response.json();
        setCases(result.case);
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    fetchCases();
  }, []);

  const handleCaseClick = (caseId) => {
    navigate(`/casedetails/${caseId}`);
  };

  return (
    <>
    <div className='img1'>
        <div className="text-overlay d-flex flex-column justify-content-center align-items-center h-100">
        <h6 className="fw-bold text-white fs-3 text-center">All Case Studies</h6>
      </div>
        
        
    </div>
    
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cases.map((item) => (
          <div className="col" key={item.case_id}>
            <div className="card  border-0 h-100">
              <div
                className="card-body p-4 d-flex flex-column justify-content-between"
                onClick={() => handleCaseClick(item.case_id)}
              >
                <h5 className="card-title fs-5 fw-semibold text-dark mb-3">
                  {item.case_category}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Cases;