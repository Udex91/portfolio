import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Project from "../Components/Project";

function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
