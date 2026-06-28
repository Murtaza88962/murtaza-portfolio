function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0ebe3",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#1a1a1a",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "3rem 2rem 6rem",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
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
            Contact
          </h2>

          <p
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#444",
              marginBottom: "2rem",
            }}
          >
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#f0ebe3",
                border: "none",
                padding: "0.9rem 1.5rem",
                fontSize: "0.95rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                cursor: "pointer",
                alignSelf: "flex-start",
                transition: "opacity 0.2s ease",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.95rem 1rem",
  border: "1px solid #cfc7bb",
  backgroundColor: "#faf7f2",
  fontSize: "0.95rem",
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  color: "#1a1a1a",
  outline: "none",
  boxSizing: "border-box" as const,
};

export default Contact;