function Projects() {
    return (
      <section id="projects"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f0ebe3",
          color: "#1a1a1a",
          padding: "0",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0.5rem 2rem 6rem",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              borderBottom: "2px solid #1a1a1a",
              display: "inline-block",
              paddingBottom: "2px",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            Projects
          </h2>
  
          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            
            {/* FILE STORAGE */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)")
              }
            >
              <a
                href="https://github.com/Murtaza88962/s3-lite-springboot"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src="/github_fullscreeen.png"
                  alt="File Storage App"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </a>
  
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0 0 0.4rem",
                  }}
                >
                  File Storage App
                </h3>
  
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#555",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  A lightweight file storage application built with Spring
                  Boot — designed for simplicity, clean APIs, and reliable
                  file management.
                </p>
  
                <a
                  href="https://github.com/Murtaza88962/s3-lite-springboot"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.8rem",
                    color: "#0070c9",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginTop: "0.8rem",
                  }}
                ><svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
                  View on GitHub
                </a>

                
              </div>
              
            </div>
            {/* NFC HEALTH HUB */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)")
              }
            >
              <a
                href="https://github.com/Murtaza88962/NFC_health_hub"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src="/github_fullscreeen.png"
                  alt="NFC Health Hub"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </a>
  
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0 0 0.4rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  NFC Health Hub
                </h3>
  
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#555",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  A smart health management system using NFC technology to
                  store and retrieve patient records instantly — bridging
                  physical and digital healthcare.
                </p>
  
                <a
                  href="https://github.com/Murtaza88962/NFC_health_hub"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.8rem",
                    color: "#0070c9",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginTop: "0.8rem",
                  }}
                  onMouseOver={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                      "underline")
                  }
                  onMouseOut={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                      "none")
                  }
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
  
          </div>

                  {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* your project cards */}
        </div>

        {/* UNDER CONSTRUCTION */}
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#666",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
            }}
          >
            UNDER CONSTRUCTION

            <span
              style={{
                display: "inline-flex",
                marginLeft: "8px",
              }}
            >
              <span className="animate-bounce">.</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.15s" }}
              >
                .
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                .
              </span>
            </span>
          </h2>
        </div>
        </div>

        
      </section>
    );
  }
  
  export default Projects;