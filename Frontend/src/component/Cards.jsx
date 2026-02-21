import React from 'react';
import styled from 'styled-components';

const Card = ({title, description, linkText}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image" />
        <div className="content">
          <a href="#">
            <span className="title">
              {title}
            </span>
          </a>
          <p className="desc">
           {description}
          </p>
        
          <a className="action" href="#">
            {linkText}
            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: 300px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
  }

  .card a {
    text-decoration: none
  }

  .content {
    padding: 1.1rem;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 15px;
    background-color: rgb(239, 205, 255);
    border-radius: 20px
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563EB;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: .3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }`;

export default Card;
