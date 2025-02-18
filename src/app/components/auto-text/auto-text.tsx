'use client'
import { Typewriter } from "react-simple-typewriter";

const AutoText = () => {
  return (
    <Typewriter
      words={["Hello I am your AI assistant.How can I enhance your business today","I can help optimize your workflow with neural network","Would you like to explore our AI intergration solutions?.", "Let me assit you with advance data analystic"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
    />
  );
};

export default AutoText;