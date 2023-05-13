import "./App.scss";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import LearningDisabilities from "./components/LearningDisabilites";
import Navbar from "./components/Navbar";
import ReadingComparison from "./components/ReadingComparison";
import Tips from "./components/Tips";

function App() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-10/12">
          <Navbar />
          <Hero />
          <ReadingComparison />
          <Tips />
          <LearningDisabilities />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
