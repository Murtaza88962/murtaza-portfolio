function Hero() {
    return (
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#f0ebe3",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          color: "#1a1a1a",
          padding: "0",
        }}
      >
       
  
        {/* MAIN CONTENT */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "3rem 2rem 6rem",
          }}
        >
          {/* HERO TOP */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "3.5rem",
              gap: "2rem",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  margin: "0 0 0.4rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Murtaza Sogiyawala
              </h1>
              <p
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: "0.95rem",
                  color: "#555",
                  margin: 0,
                }}
              >
                Full Stack Developer
              </p>
            </div>
            <img
              src="/profile.jpeg"
              alt="Murtaza"
              style={{
                width: "125px",
                height: "125px",
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
  
          {/* WORK */}
          <div id="work" style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
                borderBottom: "2px solid #1a1a1a",
                display: "inline-block",
                paddingBottom: "2px",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Work
            </h2>
  
            <div
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#333",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p style={{ margin: 0 }}>
                I'm a full-stack developer based in India with a passion for building clean and
                practical digital experiences. I enjoy working across both frontend and backend,
                turning ideas into functional applications using Java, Spring Boot, and React.
              </p>
              <p style={{ margin: 0 }}>
                I've worked on projects like a lightweight file storage application built with
                Spring Boot, focused on simplicity and usability.
              </p>
              <p style={{ margin: 0 }}>
                When I'm not coding, I spend time learning new technologies, working out, and
                exploring ways to improve both technically and personally.
              </p>
            </div>
          </div>
  
          {/* BIO */}
          <div id="bio" style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
                borderBottom: "2px solid #1a1a1a",
                display: "inline-block",
                paddingBottom: "2px",
                marginBottom: "1.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Bio
            </h2>
  
            <table
              style={{
                borderCollapse: "separate",
                borderSpacing: "0 1.1rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "0.95rem",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      paddingRight: "2.5rem",
                      verticalAlign: "top",
                      whiteSpace: "nowrap",
                      color: "#1a1a1a",
                    }}
                  >
                    2003
                  </td>
                  <td style={{ color: "#333", lineHeight: 1.6 }}>
                    Born in Indore, India 📍
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      paddingRight: "2.5rem",
                      verticalAlign: "top",
                      whiteSpace: "nowrap",
                      color: "#1a1a1a",
                    }}
                  >
                    2025
                  </td>
                  <td style={{ color: "#333", lineHeight: 1.6 }}>
                    Completed BM Bachelor's Degree from  <a
                      href="https://www.sgsits.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#0070c9", textDecoration: "none" }}
                      onMouseOver={(e) =>
                        ((e.target as HTMLAnchorElement).style.textDecoration = "underline")
                      }
                      onMouseOut={(e) =>
                        ((e.target as HTMLAnchorElement).style.textDecoration = "none")
                      }
                    >
                      S.G.S.I.T.S
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      paddingRight: "2.5rem",
                      verticalAlign: "top",
                      whiteSpace: "nowrap",
                      color: "#1a1a1a",
                    }}
                  >
                    2025 to present
                  </td>
                  <td style={{ color: "#333", lineHeight: 1.6 }}>
                    Working as a Full Stack Systems Engineer at{" "}
                    <a
                      href="https://www.infosys.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#0070c9", textDecoration: "none" }}
                      onMouseOver={(e) =>
                        ((e.target as HTMLAnchorElement).style.textDecoration = "underline")
                      }
                      onMouseOut={(e) =>
                        ((e.target as HTMLAnchorElement).style.textDecoration = "none")
                      }
                    >
                      Infosys
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* UNDER CONSTRUCTION */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "1rem",
                fontWeight: "500",
                color: "#999",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              UNDER CONSTRUCTION
              <span style={{ display: "inline-flex", marginLeft: "6px" }}>
                <span
                  style={{
                    display: "inline-block",
                    animation: "bounce 1s infinite",
                    animationDelay: "-0.3s",
                  }}
                >
                  .
                </span>
                <span
                  style={{
                    display: "inline-block",
                    animation: "bounce 1s infinite",
                    animationDelay: "-0.15s",
                  }}
                >
                  .
                </span>
                <span
                  style={{
                    display: "inline-block",
                    animation: "bounce 1s infinite",
                  }}
                >
                  .
                </span>
              </span>
            </p>
          </div>
        </div>
  
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          a:hover { opacity: 0.75; }
        `}</style>
      </section>
    );
  }
  
  export default Hero;