import profile from "../assets/profile.jpeg";
export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.98)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
            border: "4px solid #2c3e50",
          }}
        />

        {/* Name */}
        <h2
          style={{
            color: "#2c3e50",
            marginBottom: "10px",
          }}
        >
          Vignesh Ram jagannath
        </h2>

        {/* Role */}
        <h2
          style={{
            color: "#fda10c",
            marginBottom: "20px",
          }}
        >
          Web Developement
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          Welcome to my portfolio website.
          I am currently learning React,
          JavaScript, and Full Stack Development.
          I enjoy building modern web applications
          and improving my frontend development skills.
        </p>

        {/* Button */}
        <button 
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#2c3e50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Explore More 
        </button>
      </div>
    </div>
  );
}