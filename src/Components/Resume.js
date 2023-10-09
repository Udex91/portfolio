import Footer from "./Footer";
import Navbar from "./Navbar";

const styles = {
  height: "100vh",
  width: "100%",
  allow: "autoplay",
  border:"none",
};

function Resume() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="resume">
            <iframe
              title="My Resume"
              src={
                "https://drive.google.com/file/d/1tZQlSn8-7fWZpG8PgSsSVW783GZSoyWi/preview"
              }
              style={styles}
            ></iframe>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Resume;
