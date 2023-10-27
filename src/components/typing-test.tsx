import { useState, useEffect } from "react";
import TestStats from "./test-stats.tsx";
import Paragraph from "./paragraph.tsx";
import useCountdown from "../useCountdown.ts";

function TypingTest() {
  const [testComplete, setTestComplete] = useState(false);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const { secondsLeft, start } = useCountdown();

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

  return (
    <div className="test-container">
      {testComplete ? (
        <TestStats />
      ) : (
        <Paragraph
          paragraph={paragraph}
          setWordsTyped={setWordsTyped}
          setMistakes={setMistakes}
        />
      )}
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
