import Profile from '../Assets/Bede_Ogbonna.png';

function About() {
  return (
    <div id="about" className="container">
      <div className="about">
        <h3 className="about-title">ABOUT ME</h3>
        <div className="sub-about">
          <div className="pix">
            <p className="about-desc">
            I'm a passionate frontend developer with love for crafting
            engaging and intuitive user interfaces.
            Some technologies I enjoy working with
              include Jamstack(JavaScript, APIs + Markup) 
              and ReactJS + Nodejs.
            </p>
          </div>
          <img src={Profile} alt="Bede Ogbonna profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
