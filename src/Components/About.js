import Profile from "../Assets/profile.png";

function About() {
  return (
    <div className="container">
      <div className="about">
        <h3 className="about-title">ABOUT ME</h3>
        <div className="sub-about">
          <div className="pix">
            <p className="about-desc">
              I am a computer science graduate with a passion for IT and
              software development. Some technologies I enjoy working with
              include MERN Stack(Mongodb, Express, ReactJS + Nodejs) and
              Jamstack(JavaScript, APIs + Markup).
            </p>
          </div>
          <img src={Profile} alt="Chukwu Godgive Profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
