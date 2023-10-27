interface paragraphProps {
  paragraph: string;
  setWordsTyped: React.Dispatch<React.SetStateAction<number>>;
  setMistakes: React.Dispatch<React.SetStateAction<number>>;
}

function Paragraph({ paragraph, setWordsTyped, setMistakes }: paragraphProps) {
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

export default Paragraph;
