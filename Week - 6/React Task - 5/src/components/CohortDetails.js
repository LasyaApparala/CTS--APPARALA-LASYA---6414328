import React from 'react';
import styles from '../styles/CohortDetails.module.css';

const CohortDetails = ({ name, mentor, status }) => {
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Mentor:</dt>
        <dd>{mentor}</dd>
        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
