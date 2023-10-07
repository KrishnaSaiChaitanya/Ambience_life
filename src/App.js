import logo from "./logo.svg";
import "./App.css";
import TextSlider from "./Components/TextSlider";
import Home from "./Components/Home";
import AnimatedCard from "./Components/_BrickJournalEntry";

function App() {
  const texts = [
    "A big welcome and thank you for joining our community!",
    "We created this app to help others (and, ourselves), lead happier, healthier, more fulfilling lives.",
    "Within this app — and, based on your membership level — you'll find a varying degree of semi-interactive and fully interactive features centered around getting more from life.",
    "In our Freebies section, you'll find our Curated Content and Destinations sections...",
    "... which contain thousands of hand-selected videos for varying topics and destinations worldwide.",
    "Within the Xclusives section, you'll find our centerpiece features (available to Glow membership and above).",
  ];

  return (
    <div className="App">
      <AnimatedCard
        weekOfYear={20}
        year={2023}
        prompt="By the end of this year, what is one achievable goal you'd like to reach in your personal life? What is one in your professional life?"
        entry="For reading: <br /> 1) Set aside 30 minutes daily for reading
                  <br /> 2) Join a book club <br /> 3) Reduce screen time before
                  bed. <br />
                  For certification: <br />
                  1) Research best courses <br />
                  2) Dedicate weekends for study <br /> 3) Join study groups"
        advancedPrompt="Advanced Prompt: 'What is one challenging but achievable goal you'd like to reach in your personal life? Professional life?'"
        advancedEntry="Introducing the ambience.LIFE app!"
      />
      {/* <AAppAFunction /> */}
      {/* <VerticalTabs /> */}
      {/* <AnimatedText text={textToAnimate} /> */}
      {/* <TextSlider texts={texts} /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
