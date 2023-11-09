import { useState, useEffect } from "react";
import TestStats from "./test-stats.tsx";
import useCountdown from "../useCountdown.ts";

interface charObjects {
  character: string;
  correct: boolean;
}

function TypingTest() {
  const [paragraph, setParagraph] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at ea dolorum reiciendis quod animi ducimus culpa repellendus nihil dignissimos distinctio delectus, pariatur consectetur reprehenderit cum asperiores nemo similique eos!"
  );

  /*
  useEffect(() => {
    async function fetchQuote() {
      const quote = await updateQuote();
      setParagraph(quote);
    }
    fetchQuote();
  });
  */

  useEffect(() => {
    // Add the event listener
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const [testRunning, setTestRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { secondsLeft, start } = useCountdown();
  const [index, setIndex] = useState(0);

  const [totalWords, setTotalWords] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [wordMistakes, setWordMistakes] = useState(0);
  const [wordAccuracy, setWordAccuracy] = useState(0);

  const [totalChars, setTotalChars] = useState(0);
  const [charsTyped, setCharsTyped] = useState(0);
  const [charMistakes, setCharMistakes] = useState(0);
  const [charAccuracy, setCharAccuracy] = useState(0);

  const [charArray, setCharArray] = useState(
    paragraph.split("").map((char) => {
      return {
        character: char,
        correct: false,
      };
    })
  );

  if (showResults) {
    return (
      <div className="test-container">
        <TestStats
          totalWords={totalWords}
          wordsTyped={wordsTyped}
          wordMistakes={wordMistakes}
          wordAccuracy={wordAccuracy}
          totalChars={totalChars}
          charsTyped={charsTyped}
          charMistakes={charMistakes}
          charAccuracy={charAccuracy}
          secondsLeft={secondsLeft}
        />
      </div>
    );
  }

  const handleTestStart = () => {
    setIndex(0);
    start(60);
    setTestRunning(true);
  };

  const handleTestEnd = () => {
    updateAccuracy({
      paragraph,
      charArray,
      index,
      setTotalWords,
      setWordsTyped,
      setWordMistakes,
      setWordAccuracy,
      setTotalChars,
      setCharsTyped,
      setCharMistakes,
      setCharAccuracy,
    });
    setTestRunning(false);
    setShowResults(true);
  };

  const isAlphanumeric = (key: string) => {
    return /^[a-zA-Z0-9 ]$/i.test(key);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!isAlphanumeric(event.key) && event.key !== "Backspace") return;
    if (!testRunning) handleTestStart();

    setIndex((currentIndex) => {
      if (event.key === "Backspace") {
        if (currentIndex === 0) return 0; // return current index if it's already 0
        // Set the previous character to incorrect
        setCharArray((currentCharArray) => {
          const newCharArray = [...currentCharArray];
          newCharArray[currentIndex - 1].correct = false;
          return newCharArray;
        });
        return currentIndex - 1;
      }

      if (event.key === charArray[currentIndex].character) {
        // Set the current character to correct
        setCharArray((currentCharArray) => {
          const newCharArray = [...currentCharArray];
          newCharArray[currentIndex].correct = true;
          return newCharArray;
        });
      } else {
        // Handle incorrect character
      }

      if (currentIndex === charArray.length - 1) {
        handleTestEnd();
      }

      return currentIndex + 1; // Return the new index
    });
  };

  // Separate charArray to typed characters and untyped characters
  const typedChars: charObjects[] = charArray.slice(0, index);
  const untypedChars: charObjects[] = charArray.slice(index, charArray.length);

  const TypedChars: React.FC = () => {
    return (
      <div>
        {typedChars.map((charObject, index) => (
          <p
            key={index}
            className={
              "char-object " +
              (charObject.correct
                ? "typed-correct-char"
                : "typed-incorrect-char")
            }
          >
            {charObject.character}
          </p>
        ))}
      </div>
    );
  };

  const UntypedChars: React.FC = () => {
    return (
      <div>
        {untypedChars.map((charObject, index) => (
          <p key={index} className="char-object untyped-char">
            {charObject.character}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="typing-field">
      <TypedChars />
      <UntypedChars />
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
    console.log("Quote unable to be fetched", data.content);
    // TODO: Create function to call from local database if quote cannot be fetched
  }
}

interface updateAccuracyParameters {
  paragraph: string;
  charArray: charObjects[];
  index: number;
  setTotalWords: React.Dispatch<React.SetStateAction<number>>;
  setWordsTyped: React.Dispatch<React.SetStateAction<number>>;
  setWordMistakes: React.Dispatch<React.SetStateAction<number>>;
  setWordAccuracy: React.Dispatch<React.SetStateAction<number>>;
  setTotalChars: React.Dispatch<React.SetStateAction<number>>;
  setCharsTyped: React.Dispatch<React.SetStateAction<number>>;
  setCharMistakes: React.Dispatch<React.SetStateAction<number>>;
  setCharAccuracy: React.Dispatch<React.SetStateAction<number>>;
}

function updateAccuracy({
  paragraph,
  charArray,
  index,
  setTotalWords,
  setWordsTyped,
  setWordMistakes,
  setWordAccuracy,
  setTotalChars,
  setCharsTyped,
  setCharMistakes,
  setCharAccuracy,
}: updateAccuracyParameters) {
  const wordArray = paragraph.split(" ");
  setTotalWords(wordArray.length);
  let wordsTyped = 0;
  let wordMistakes = 0;

  let wordCorrect = true;
  let i = 0;
  while (i < index) {
    if (charArray[i].character === " ") {
      if (wordCorrect) wordsTyped += 1;
      else {
        wordMistakes += 1;
        wordCorrect = true; // Reset for next word
      }
    } else {
      if (!charArray[i].correct) wordCorrect = false;
    }
    i++;
  }

  setWordsTyped(wordsTyped);
  setWordMistakes(wordMistakes);
  setWordAccuracy((wordArray.length / wordsTyped) * 100);

  setTotalChars(charArray.length);
  let charsTyped = 0;
  let charMistakes = 0;
  for (let i = 0; i < index; i++) {
    if (charArray[i].correct) {
      charsTyped += 1;
    } else {
      charMistakes += 1;
    }
  }
  setCharsTyped(charsTyped);
  setCharMistakes(charMistakes);
  setCharAccuracy((charArray.length / charsTyped) * 100);
}

export default TypingTest;
