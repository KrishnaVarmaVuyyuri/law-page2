import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsImg from '../../assets/final.jpg';
import './CaseDetails.css';

const CaseDetails = () => {
  const [caseData, setCaseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch(`https://astonishlaw.digispheretech.in/case/getallcases`);
        if (!response.ok) {
          throw new Error('Failed to fetch case data');
        }
        const data = await response.json();
        if (!data.case || !Array.isArray(data.case)) {
          throw new Error('Invalid data structure');
        }
        const selectedCase = data.case.find(c => String(c.case_id) === id);
        if (selectedCase) {
          setCaseData(selectedCase);
        } else {
          throw new Error('Case not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseDetails();
  }, [id]);

  if (isLoading) return <div className="container mt-5"><h3>Loading...</h3></div>;
  if (error) return <div className="container mt-5"><h3>Error: {error}</h3></div>;
  if (!caseData) return <div className="container mt-5"><h3>Case not found</h3></div>;

  return (
    <div>
      <div className='banner'>
        <h6 className="fw-bold text-white banner-heading">Case Details</h6>
      </div>
      <div className='container my-3'>
        <div className='row'>
          {/* left side content */}
          <div className='col-lg-8'>
            <div className='banner2'></div>
            <h5 className="fw-bold mb-3">About This Project :</h5>
            <p className="text-muted">
              {caseData.case_description || 'No description available'}
            </p>

            <h5 className="fw-bold mt-4">How I Work :</h5>
            <p>
              {caseData.work_description || 'No work description available'}
            </p>

            <h6 className="fw-bold mt-3">Analyzing Case</h6>
            <p>
              {caseData.analyzing_description || 'No analyzing description available'}
            </p>

            <h6 className="fw-bold mt-3">Research & Investigation</h6>
            <p>{caseData.investigation_description || 'No investigation description available'}</p>

            <h6 className="fw-bold mt-3">Court Of Law Success</h6>
            <p>{caseData.court_law_sucess_description || 'No court law success description available'}</p>
          </div>
          {/* right side  */}
          <div className='side-content flex-inline col-lg-4'>
            <h5 className="fw-bold mb-3">Latest News</h5>
            {[1, 2, 3].map((_, idx) => (
              <div className="d-flex mb-3" key={idx}>
                <img src={newsImg} alt="News" className="news-img me-2" />
                <div>
                  <p className="mb-1 small fw-semibold">Even the all-powerful pointing has no control about the blind texts</p>
                  <small className="text-muted">Mar 11, 2025</small>
                </div>
              </div>
            ))}

            <div className="project-box p-3 mt-3">
              <h6 className="text-white fw-bold">Project Details</h6>
              <p className="mb-1"><strong>Lawyer:</strong> {caseData.lawyer_name || 'Not available'}</p>
              <p className="mb-1"><strong>Category:</strong> {caseData.case_category || 'Not available'}</p>
              <p className="mb-1"><strong>Case Status:</strong> {caseData.status || 'Not available'}</p>
              <p className="mb-0"><strong>Last Updated:</strong> {caseData.last_updated || 'Not available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;