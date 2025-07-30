import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Bootcamp', mentor: 'Harika Ponnai', status: 'Ongoing' },
    { name: 'Python Basics', mentor: 'Nandini Rao', status: 'Completed' },
    { name: 'Cloud Essentials', mentor: 'Arjun Menon', status: 'Completed' },
    { name: 'Fullstack Dev', mentor: 'Meghana V', status: 'Ongoing' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Academy - Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          name={cohort.name}
          mentor={cohort.mentor}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;
