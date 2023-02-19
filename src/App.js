/** @format */

import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero";
import StorySection from "./components/storySection";
import ExperienceSection from "./components/ExperienceSection";
import SelectedProjects from "./components/selectedProjects";
import StackSection from "./components/StackSection";
import ConnectSection from "./components/ConnectSection";
import Resume from "./components/Resume";
import SocialProofs from "./components/SocialProofs.jsx";
import SendMessage from "./components/sendMessage";

function App() {
  return (
    <div className="font-ivy">
      <Header />
      <Hero />
      <StorySection />
      <ExperienceSection />
      <SelectedProjects />
      <StackSection />
      <ConnectSection />
      <Resume />
      <SocialProofs />
      <SendMessage />
    </div>
  );
}

export default App;
