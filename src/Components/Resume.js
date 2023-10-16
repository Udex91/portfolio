import Footer from "./Footer";
import Navbar from "./Navbar";

const styles = {
  height: "100vh",
  width: "100%",
  allow: "autoplay",
  border: "none",
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
                "https://drive.google.com/file/d/19S0m03OeI6thRC6rPXQEwTrJ1qzb9GUt/preview"
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
