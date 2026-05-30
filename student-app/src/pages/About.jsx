export default function About() {
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
          maxWidth: "800px",
          background: "rgba(253, 44, 44, 0.1)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "42px",
            color: "#f39c12",
            marginBottom: "20px",
          }}
        >
          About Me
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#e0e0e0",
          }}
        >
          Hello! I am{" "}
          <strong>G. Vignesh Ram Jagannath</strong>,
          a BSc Computer Science student at
          Aditya Degree College.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#e0e0e0",
            marginTop: "20px",
          }}
        >
          I am currently learning
          Full Stack Web Development and
          exploring technologies like
          Artificial Intelligence,
          Machine Learning, and
          Cloud Computing.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#e0e0e0",
            marginTop: "20px",
          }}
        >
          I enjoy building modern web
          applications, learning new technologies,
          and improving my programming skills every day.
        </p>

        {/* Button */}
        <button
          style={{
            marginTop: "30px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#f39c12",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Thank You for Visiting
        </button>
      </div>
    </div>
  );
}