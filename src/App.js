import logo from "./logo.svg";
import "./App.css";
import TextSlider from "./Components/TextSlider";
import Home from "./Components/Home";
import AnimatedCard from "./Components/_BrickJournalEntry";
import Loading_Animation from "./Components/Loading_Animation";

function App() {
  return (
    <div className="App">
      {/* <AnimatedCard
        weekOfYear={20}
        year={2023}
        prompt="By the end of this year, what is one achievable goal you'd like to reach in your personal life? What is one in your professional life?"
        entry="For reading: <br /> 1) Set aside 30 minutes daily for reading
                  <br /> 2) Join a book club <br /> 3) Reduce screen time before
                  bed. <br />
                  "
        advancedPrompt="Advanced Prompt: 'What is one challenging but achievable goal you'd like to reach in your personal life? Professional life?'"
        advancedEntry="Introducing the ambience.LIFE app!"
      /> */}
      <Loading_Animation />
    </div>
  );
}

export default App;
