import { useState, useEffect } from "react";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "../styles/base.css";
import "../styles/default.css";

export default function Root() {
  const [resultsVisibility, setResultsVisibility] = useState(false);
  return (
    <div id="app">
      <div id="centerContent">
        <Navbar />

        <div className="middle">
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

  return (
    <>
      <div id="testConfig"></div>
      <div id="typingTest">
        <div id="paragraphContainer">
          <p> {paragraph} </p>
        </div>
      </div>
    </>
  );
}

async function updateQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch(
    "http://api.quotable.io/random?minLength=150&maxLength=500"
  );
  const data = await response.json();
  if (response.ok) {
    console.log("Quote fetched: ", data.content);
    return data.content;
  } else {
    console.log("An error occurred", data.content);
    // TODO: Create function to call from local database if quote cannot be fetched
  }
}

function Results() {
  return <div id="results" className="hidden"></div>;
}
