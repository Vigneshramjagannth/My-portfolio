export default function Info() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          My Information
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#dcdcdc",
          }}
        >
          Full Stack Web Development Learner
        </p>
      </div>

      {/* Main Card */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.1)",
          padding: "35px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Personal Info */}
        <section style={{ marginBottom: "35px" }}>
          <h2 style={headingStyle}>Personal Info</h2>

          <p>
            <strong>Name:</strong>
            {" "}G. Vignesh Ram Jagannath
          </p>

          <p>
            <strong>Education:</strong>
            {" "}BSc Computer Science Student at
            Aditya Degree College
          </p>

          <p>
            <strong>About Me:</strong>
            {" "}I am a Full Stack Web Development
            learner and enthusiastic about
            Artificial Intelligence, Machine Learning,
            and Cloud Computing.
          </p>
        </section>

        {/* General Skills */}
        <section style={{ marginBottom: "35px" }}>
          <h2 style={headingStyle}>General Skills</h2>

          <div style={skillContainer}>
            <span style={skillBox}>Spoken English</span>
            <span style={skillBox}>Communication</span>
            <span style={skillBox}>Teamwork</span>
            <span style={skillBox}>Reliability</span>
          </div>
        </section>

        {/* Technical Skills */}
        <section style={{ marginBottom: "35px" }}>
          <h2 style={headingStyle}>Technical Skills</h2>

          <div style={skillContainer}>
            <span style={skillBox}>C</span>
            <span style={skillBox}>Java</span>
            <span style={skillBox}>Python</span>
            <span style={skillBox}>HTML</span>
            <span style={skillBox}>CSS</span>
            <span style={skillBox}>JavaScript</span>
            <span style={skillBox}>React</span>
            <span style={skillBox}>Node.js</span>
            <span style={skillBox}>MS Office</span>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 style={headingStyle}>Hobbies & Interests</h2>

          <div style={skillContainer}>
            <span style={skillBox}>Watching Anime</span>
            <span style={skillBox}>Cooking</span>
            <span style={skillBox}>Playing Badminton</span>
          </div>
        </section>
      </div>
    </div>
  );
}

/* Reusable Styles */

const headingStyle = {
  color: "#f39c12",
  marginBottom: "15px",
};

const skillContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
};

const skillBox = {
  background: "rgba(255,255,255,0.15)",
  padding: "10px 18px",
  borderRadius: "10px",
  fontSize: "15px",
};