interface TeamMember {
  name: string;
  image: string;
  link: string;
  title: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const About = () => {
  const teamMembers = {
    principalInvestigators: [
      {
        name: "Yuanyang Liu",
        image: "https://haslam.utk.edu/wp-content/uploads/2024/12/yuanyang-liu.webp",
        link: "https://haslam.utk.edu/people/profile/yuanyang-liu/",
        title: "Principal Investigator"
      },
      {
        name: "Chuanren Liu",
        image: "https://haslam.utk.edu/wp-content/uploads/2021/12/chuanren-liu.webp",
        link: "https://haslam.utk.edu/people/profile/chuanren-liu/",
        title: "Principal Investigator"
      },
      {
        name: "Tingliang Huang",
        image: "https://haslam.utk.edu/wp-content/uploads/2024/12/tingliang-huang.webp",
        link: "https://haslam.utk.edu/people/profile/tingliang-huang/",
        title: "Principal Investigator"
      },
      {
        name: "Mehmet Aydeniz",
        image: "https://cecs.utk.edu/wp-content/uploads/2024/09/Mehmet-Aydeniz.jpeg",
        link: "https://cecs.utk.edu/mehmet-aydeniz/",
        title: "Principal Investigator"
      }
    ],
    phdStudents: [
      {
        name: "Pedro Masi",
        image: "https://haslam.utk.edu/wp-content/uploads/2023/07/pedro-masi-300x300.webp",
        link: "https://haslam.utk.edu/people/profile/pedro-masi/",
        title: "PhD Student"
      }
    ],
    masterStudents: [
      {
        name: "Lorna Strazza",
        image: "https://ai-for-business.sites.utk.edu/wp-content/uploads/sites/7/2025/01/lorna-headshot3-300x300.jpeg",
        link: "http://LinkedIn.com/in/lornastrazza/",
        title: "Master Student"
      },
      {
        name: "Smruti Inadamar",
        image: "https://ai-for-business.sites.utk.edu/wp-content/uploads/sites/7/2025/01/Smruti-Inamdar-headshot3-300x300.jpg",
        link: "https://www.linkedin.com/in/smrutii07/",
        title: "Master Student"
      },
      {
        name: "Nivedita Gurugubelli",
        image: "https://ai-for-business.sites.utk.edu/wp-content/uploads/sites/7/2025/01/nivedita-headshot3-300x300.jpeg",
        link: "https://www.linkedin.com/in/nivedita-gurugubelli/",
        title: "Master Student"
      },
      {
        name: "Lirui Cong",
        image: "https://ai-for-business.sites.utk.edu/wp-content/uploads/sites/7/2025/01/Lirui-headshot3-300x300.jpg",
        link: "https://www.linkedin.com/in/lirui-cong/",
        title: "Master Student"
      }
    ],
    undergraduateStudents: [
      {
        name: "Elliot Christoph",
        image: "https://ai-for-business.sites.utk.edu/wp-content/uploads/sites/7/2025/01/elliot-headshot3-300x300.jpg",
        link: "https://www.linkedin.com/in/elliot-christoph-39a3a0267/",
        title: "Undergraduate Student"
      },
      {
        name: "Ethan Dietrich",
        image: "https://ai-for-business.sites.utk.edu/wp-content/uploads/sites/7/2025/04/Ethan_Dietrich_Image_Adjusted.jpeg",
        link: "https://www.linkedin.com/in/ethan-dietrich-966526275/",
        title: "Undergraduate Student"
      }
    ]
  }

  const TeamSection = ({ title, members }: TeamSectionProps) => (
    <section className="section" style={{ marginBottom: '4rem' }}>
      <div className="section-content">
        <div className="profile-list-wrapper">
          <h1 className="section-title" style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem',
            marginTop: '2rem',
            color: '#1d1d1f'
          }}>{title}</h1>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: '2rem'
          }}>
            {members.map((member: TeamMember, index: number) => (
              <li key={index} style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <figure style={{ 
                    margin: 0,
                    position: 'relative',
                    width: '230px',
                    height: '230px'
                  }}>
                    <div style={{ 
                      backgroundImage: `url(${member.image})`,
                      width: '100%',
                      height: '100%',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '8px'
                    }} />
                    <figcaption style={{ 
                      marginTop: '1rem',
                      textAlign: 'center'
                    }}>
                      <h3 style={{ 
                        margin: 0,
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: '#1d1d1f'
                      }}>{member.name}</h3>
                      <h4 style={{ 
                        margin: '0.5rem 0 0',
                        fontSize: '0.875rem',
                        color: '#86868b',
                        fontWeight: 'normal'
                      }}>{member.title}</h4>
                    </figcaption>
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ 
          height: '0px', 
          backgroundColor: '#d2d2d7', 
          margin: '2rem 2rem 2rem 2rem' 
        }} />
      </div>
    </section>
  )

  return (
    <div className="main-content" style={{ padding: '2rem' }}>
      <TeamSection title="Principal Investigators" members={teamMembers.principalInvestigators} />
      <TeamSection title="PhD Students" members={teamMembers.phdStudents} />
      <TeamSection title="Master Students" members={teamMembers.masterStudents} />
      <TeamSection title="Undergraduate Students" members={teamMembers.undergraduateStudents} />
    </div>
  )
}

export default About 