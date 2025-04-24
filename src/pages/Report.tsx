import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css';

// Import the local images
import workplaceImage from '../assets/Elliot_Dashboard_Screenshot.png';
import careersImage from '../assets/Lorna_Dashboard_Screenshot.png';
import skillsTimeImage from '../assets/Smruti_Dashboard_Screenshot.png';
import ethanImage from '../assets/Ethan_Dashboard_Screenshot.png';

interface Writeup {
  title: string;
  content: string;
}

interface Panel {
  title: string;
  image: string;
  link: string;
  writeup: Writeup;
}

const Report = () => {
  const navigate = useNavigate();
  const [selectedWriteup, setSelectedWriteup] = useState<Writeup | null>(null);

  const panels: Panel[] = [
    {
      title: "Building Careers with AI Skills",
      image: careersImage,
      link: "/dashboard/careers",
      writeup: {
        title: "Building Careers with AI Skills",
        content: `As technology evolves, broader accessibility to AI knowledge has made certain skills less unique. Universities are rapidly integrating AI into undergraduate and postgraduate programs with emerging AI-specialized colleges and intensive training, contributing to a larger pool of AI-skilled graduates. Stanford University's 2022 AI Index report highlights a significant rise in the number of AI PhDs awarded over the past decade, with most graduates moving into industry roles rather than academia or government.

Additionally, platforms like Coursera, Udemy, and edX provide courses on AI, machine learning, and related fields, often taught by top universities or industry experts. This accessibility has enabled millions to acquire skills that were previously limited to specialized academic programs or elite institutions.

With the rapid integration of AI courses both in higher education as well as outside of it, let's take a look at how degree requirements play a role in the job market.

Key Findings:

• The top skills to have when looking for a job in AI are Data Modeling (11%) and Machine Learning (9%)
• Out of all AI job postings from 2010-2023, the top 10 most frequent skills are listed in 63% of postings
• In 2010, job applicants were required to have some form of higher education (Bachelor's, Master's, PhD) when applying for jobs listing machine learning as a required skill
• In 2023, all degree types, and no degree, were listed for postings requiring machine learning
• Higher education levels, particularly Master's Degrees and Ph.D. or Professional Degrees, are associated with higher salaries

This dual trend suggests a more inclusive job market where skills, experience, and continuous learning are gaining equal footing with formal education. While higher education typically leads to higher-paying opportunities, companies are also willing to hire individuals without advanced degrees, particularly when skills and experience can compensate for the lack of formal education. As industries evolve, we may continue to see a greater emphasis on upskilling and experience in hiring practices, on top of educational background.`
      }
    },
    {
      title: "A Tale of Two Cities: An AI Driven Workplace",
      image: workplaceImage,
      link: "/dashboard/workplace",
      writeup: {
        title: "A Tale of Two Cities: An AI Driven Workplace",
        content: `Artificial intelligence (AI) is increasingly transforming the job market, with skills such as data engineering, data science, and machine learning becoming integral across industries. However, the development and application of AI varies by region, influenced by the dominant industries and economic priorities of each area. This report focuses on the use of AI skills in California and Tennessee, two states with contrasting economies and job markets. California, known for its tech-centric economy and innovation hubs like Silicon Valley, is hypothesized to leverage AI for advanced technical and research roles. Meanwhile, Tennessee, with its focus on healthcare, manufacturing, and business services, is expected to utilize AI for business process improvement and operational efficiency.

Key Findings:

• California and Texas are the two states with the highest proportion of AI job postings
• Significant gaps exist in three key skill categories between California and Tennessee:
  - Data Modelling: 27% in Tennessee vs 18.1% in California
  - Data Science: 4.6% gap between states
  - Machine Learning: 22.3% in California vs 11.8% in Tennessee

• Recent trends (2020-2023) show:
  - California has higher proportions of deep learning, PyTorch, and TensorFlow skills
  - Tennessee shows higher prevalence of data analysis skills
  - California's AI job postings focus more on technical expertise

• Career Area Distribution:
  - Tennessee: Higher proportion in sales, healthcare, and manufacturing
  - California: Higher proportion in IT, education, and engineering

Analysis:

The data supports the hypothesis that AI skills in California are more focused on advanced technical and research-oriented roles, such as data engineering, data science, and software engineering. In contrast, Tennessee's AI skills are more commonly applied to business analysis and process improvement roles, like Business Intelligence analysts and sales engineers.

Career areas where AI is implemented more as a tool for process improvement and operational support—such as Marketing, HR, Healthcare, Manufacturing, and Maintenance—have a higher proportional representation in Tennessee. Conversely, career areas where AI is employed for innovation, research, and advanced development—such as IT and Computer Science, Engineering, and Science and Research—are more prominent in California.

These findings support the theory that while California serves as a hub for innovation-driven AI adoption—fostering new technologies and encouraging experimentation—Tennessee takes a complementary approach, emphasizing practical, process-oriented AI integration. In California, AI advancements are often geared toward breakthrough innovations and industry disruption, whereas in Tennessee, AI is strategically leveraged to enhance operational efficiencies and modernize traditional industries. Both states showcase distinct but equally significant contributions to the evolving AI landscape.`
      }
    },
    {
      title: "Dissecting AI Skills Through Time",
      image: skillsTimeImage,
      link: "/dashboard/skills-time",
      writeup: {
        title: "Dissecting AI Skills Through Time",
        content: `In today's rapidly evolving job market, staying relevant is no longer about mastering a single skill or sticking to long-standing roles—it's about adaptability and continuous learning. This is especially true in the Information Technology sector, where advancements are transforming the nature of work at an unprecedented pace. As artificial intelligence and digital technologies continue to reshape industries, many traditional skills are becoming obsolete, while new, high-demand skills are emerging at a fast pace.

Key Findings:

• Skill Evolution:
  - 2010: Legacy skills like CHAID, ROLAP, Pipeline Pilot, and IDEFIX were prominent
  - 2021: Shift toward AI, Machine Learning, and Deep Learning skills
  - 2023: Generative AI skills surged by 2,386.7% (30 to 750 jobs)

• Skill Group Analysis:
  - Data Engineering: Most in-demand skill group (2010-2023)
  - Data Science: Second most in-demand until 2017
  - Machine Learning: Took over as second most in-demand from 2018
  - Deep Learning and General AI: Similar increasing/decreasing trends
  - Generative AI: Only group with increased demand in 2023

• Technology Adoption Cycle:
  - Initial surges due to innovation and mainstream integration
  - Stabilization as technology matures
  - Shifts toward emerging technologies
  - Key milestones:
    • Siri (2011): Voice recognition
    • AlexNet (2012): Neural networks
    • TensorFlow (2015): AI frameworks
    • GPT-3.5 (2022): Advanced models

Analysis:

The job market's dynamic nature requires individuals to strategically build a portfolio that integrates emerging, high-demand skills while transitioning away from legacy skills. AI is not a singular entity but a broad field with multiple interconnected disciplines and application areas.

We've defined 7 skill groups for analysis:
1. Data Science
2. Data Engineering
3. Machine Learning
4. Deep Learning
5. General AI skills
6. Speech Recognition
7. Generative AI

Notable trends include:
• Speech recognition skills: 170% surge (2015-2017) followed by 225% decline by 2019
• Deep learning: Significant increases in 2012 and 2017
• 2023: Challenging year for most skill groups with broad declines
• Generative AI: Exception to 2023 trends with unprecedented growth

These patterns highlight the evolving dynamics of skill demand in AI, driven by current requirements and technological innovation. The rapid changes underscore the importance of continuous learning and adaptation in the AI field.`
      }
    },
    {
      title: "Skills by Industry",
      image: ethanImage,
      link: "/dashboard/industry",
      writeup: {
        title: "Skills by Industry",
        content: `This dashboard breaks down AI skills by industry sector.
        Key findings include:
        • Industry-specific AI skill requirements
        • Cross-industry skill transferability
        • Industry adoption rates
        • Future industry trends
        
        The data shows that while some AI skills are universal, many are highly specialized to specific industries, creating unique opportunities for skill development.`
      }
    }
  ];

  const handleWriteupClick = (writeup: Writeup) => {
    setSelectedWriteup(writeup);
  };

  const closeWriteup = () => {
    setSelectedWriteup(null);
  };

  return (
    <div className="main-content" style={{ padding: '2rem' }}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem',
        color: '#000000'
      }}>
        AI Skills Analysis Dashboards
      </h1>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {panels.map((panel, index) => (
          <div
            key={index}
            className="dashboard-panel"
          >
            <div 
              className="panel-image"
              style={{
                backgroundImage: `url(${panel.image})`
              }}
            />
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#58595B',
              borderBottom: '2px solid #FF8200',
              paddingBottom: '0.5rem'
            }}>
              {panel.title}
            </h2>
            <p style={{ 
              color: '#58595B',
              marginBottom: '1rem'
            }}>
              Click to view the full dashboard
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => navigate(panel.link)}
                style={{
                  backgroundColor: '#FF8200',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'background-color 0.2s',
                  flex: 1
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E67500'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF8200'}
              >
                View Full Report
              </button>
              <button
                onClick={() => handleWriteupClick(panel.writeup)}
                style={{
                  backgroundColor: '#58595B',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'background-color 0.2s',
                  flex: 1
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4A4A4A'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#58595B'}
              >
                View Writeup
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedWriteup && (
        <div className="writeup-modal">
          <div className="writeup-content">
            <h2>{selectedWriteup.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{selectedWriteup.content}</p>
            <button
              onClick={closeWriteup}
              style={{
                backgroundColor: '#FF8200',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '1rem',
                marginTop: '1rem'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report; 