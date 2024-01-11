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
                "https://drive.google.com/file/d/158igb1BIOf8S6Mw5Ufqfy19ScdxoBapJ/view"
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
