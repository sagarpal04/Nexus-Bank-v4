import React, { Children } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import MainContent from "./components/MainContent";
import HowItWorks from "./components/HowItWorks";
const App = () => {
  return (
    <div className="w-screen overflow-hidden bg-customGreen min-h-screen">
      <Section className="pb-0">
        <Header />
        <MainContent />
      </Section>
      <HowItWorks />
    </div>
  );
};

export default App;
