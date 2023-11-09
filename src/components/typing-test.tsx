import { useState, useEffect } from "react";
import TestStats from "./test-stats.tsx";
import Paragraph from "./paragraph.tsx";
import useCountdown from "../useCountdown.ts";

function TypingTest() {
  const [testRunning, setTestRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const { secondsLeft, start } = useCountdown();

  const handleTestStart = () => {
    start(60);
    setTestRunning(true);
  };

  const handleTestEnd = () => {
    setTestRunning(false);
    setShowResults(true);
  };

  const [paragraph, setParagraph] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at ea dolorum reiciendis quod animi ducimus culpa repellendus nihil dignissimos distinctio delectus, pariatur consectetur reprehenderit cum asperiores nemo similique eos!"
  );

  useEffect(() => {
    async function fetchQuote() {
      const quote = await updateQuote();
      setParagraph(quote);
    }
    fetchQuote();
  }, []);

  // const numChars = // TODO; find and set numChars
  // const numWords = // TODO: find and set numWords

  if (showResults) {
    return (
      <div className="test-container">
        <TestStats />
      </div>
    );
  }

  interface charObjects {
    character: string;
    typed: boolean;
  }

  // Convert paragraph to typed and untyped character arrays
  const typedChars: charObjects[] = [];
  const untypedChars: charObjects[] = paragraph.split("").map((char) => {
    return {
      character: char,
      typed: false,
    };
  });

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!testRunning) {
      handleTestStart();
    }
  };

  // Revert character arrays back to strings
  const untypedCharString: string = untypedChars
    .map((charObj) => charObj.character)
    .join("");
  const typedCharString: string = typedChars
    .map((charObj) => charObj.character)
    .join("");

  return (
    <div>
      <p className="typed-chars">{typedCharString}</p>
      {
        //TODO: Vertical line to show position in paragraph
      }
      <p className="untyped-chars">{untypedCharString}</p>
    </div>
  );
}

async function updateQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch(
    "http://api.quotable.io/random?minLength=150&maxLength=500"
  );
  const data = await response.json();
  if (response.ok) {
    return data.content;
  } else {
    console.log("An error occurred", data.content);
    // TODO: Create function to call from local database if quote cannot be fetched
  }
}

export default TypingTest;
