function Paragraph({ string: paragraph }) {
  interface charObjects {
    character: string;
    typed: boolean;
  }

  const typedChars: charObjects[] = [];
  const untypedChars: charObjects[] = paragraph.split("").map((char) => {
    return {
      character: char,
      typed: false,
    };
  });

  return <div></div>;
}

export default Paragraph;
