import { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Paragraph from "../components/paragraph.tsx";
import TestStats from "../components/test-stats.tsx";

export default function Root() {
  const [resultsVisibility, setResultsVisibility] = useState(false);
  return (
    <div className="layout">
      <div className="content">
        <Navbar />

        <div className="main">
          {resultsVisibility ? <Results /> : <TypingTest />}
        </div>

        <Footer />
      </div>
    </div>
  );
}

function TypingTest() {
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

  const numWords = 0; // TODO: Set numWords
  const [wordsTyped, setWordstyped] = useState(0);

  interface paragraphProps {
    paragraph: string;
  }

  return (
    <div className="test-container">
      <Paragraph paragraph={paragraph} />
      <TestStats />
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

function Results() {
  return <div id="results" className="hidden"></div>;
}
