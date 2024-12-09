import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const services = [
  { id: 1, name: 'Check List', path: '/checklist', det: "Fire safety certificate as per National Building Construction Code" },
  { id: 2, name: 'Pre Noc Form', path: '/preform', det: "" },
  { id: 3, name: 'Post Noc Form', path: '/', det: "" },
  { id: 4, name: 'Noc Renewal', path: '/', det: "" },
];

const InspectionCard = () => {
  const navigate = useNavigate();

  return (
    <>
      {services.map((service) => (
        <div key={service.id} onClick={() => navigate(service.path)}>
          <StyledWrapper>
            <div className="card">
              <div className="first-content">
                <span>{service.name}</span>
              </div>
              <div className="second-content">
                <span>{service.det}</span>
              </div>
            </div>
          </StyledWrapper>
        </div>
      ))}
    </>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 245px;
    height: 254px;
    background: rgb(103, 225, 255);
    transition: all 0.4s;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 500;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    background: rgb(103, 151, 255);
  }

  .first-content {
    height: 100%;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
  }

  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.4s;
    font-size: 0px;
    transform: rotate(90deg) scale(-1);
    padding: 8px;
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1rem;
    transform: rotate(0deg);
  }
`;

export default InspectionCard;
