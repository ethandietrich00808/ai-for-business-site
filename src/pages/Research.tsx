import React from 'react';
import './Research.css';

const Research = () => {
  const researchPapers = [
    {
      title: "Uncovering IT Career Path Patterns with Job Embedding-based Sequence Clustering",
      description: "IT professionals have a wide range of career paths available, driven by the the field's rapid growth, high salaries, and diverse applications. We analyzed profiles of over 60,000 IT professionals using an unsupervised machine learning approach combined with job embeddings to identify common career path clusters.",
      link: "https://dl.acm.org/doi/10.1145/3712705"
    },
    {
      title: "AI Impact on Work: Where, What, How?",
      description: "A central concern regarding artificial intelligence (AI) is its potential to replace jobs and exacerbate economic inequality. However, recent research suggests that AI may improve the workers' job prospects through a Turing Transformation process: AI simplifies work, lowers barriers to job entry, and thus broadens job opportunities for more workers ..."
    },
    {
      title: "Does Machine Learning Reduce Entry-Level Jobs?",
      description: "This paper explores the impact of machine learning (ML) utilization on job requirements for workers. We postulate that by automating common tasks and processes, ML shifts human workers toward handling more complex and novel scenarios that demand higher professional expertise. Consequently, the adoption of ML may reduce entry-level job opportunities ..."
    }
  ];

  return (
    <div className="research-container">
      <h1>Research</h1>
      
      <div className="research-papers">
        {researchPapers.map((paper, index) => (
          <div key={index} className="research-card">
            <h2>{paper.title}</h2>
            <p>{paper.description}</p>
            {paper.link && (
              <a 
                href={paper.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="research-link"
              >
                Read Paper
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research; 