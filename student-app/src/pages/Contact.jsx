import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            Contact Me
          </h1>

          <p
            style={{
              color: "#dcdcdc",
              marginBottom: "35px",
            }}
          >
            Feel free to connect with me
          </p>
        </div>

        {/* Contact Details */}
        <div style={{ display: "grid", gap: "20px" }}>

          {/* Phone */}
          <div style={contactCard}>
            <h3 style={titleStyle}>
              <FaPhone /> Phone
            </h3>

            <p>+91 9390909560</p>
          </div>

          {/* Email */}
          <div style={contactCard}>
            <h3 style={titleStyle}>
              <FaEnvelope /> Email
            </h3>

            <p>jagannathvignesh@gmail.com</p>
          </div>

          {/* WhatsApp */}
          <div style={contactCard}>
            <h3 style={titleStyle}>
              <FaWhatsapp /> WhatsApp
            </h3>

            <p>+91 9390909560</p>
          </div>

          {/* LinkedIn */}
          <div style={contactCard}>
            <h3 style={titleStyle}>
              <FaLinkedin /> LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/vignesh-ram-jagannath-150214347/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Visit LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div style={contactCard}>
            <h3 style={titleStyle}>
              <FaGithub /> GitHub
            </h3>

            <a
              href="https://github.com/Vigneshramjagannth"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Styles */

const contactCard = {
  background: "rgba(255,255,255,0.12)",
  padding: "20px",
  borderRadius: "15px",
};

const titleStyle = {
  color: "#ffe1b2",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "20px",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "bold",
};