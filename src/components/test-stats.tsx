interface TestStatsProps {
  totalWords: number;
  wordsTyped: number;
  wordMistakes: number;
  wordAccuracy: number;
  totalChars: number;
  charsTyped: number;
  charMistakes: number;
  charAccuracy: number;
  secondsLeft: number;
}

function TestStats({
  totalWords,
  wordsTyped,
  wordMistakes,
  wordAccuracy,
  totalChars,
  charsTyped,
  charMistakes,
  charAccuracy,
  secondsLeft,
}: TestStatsProps) {
  return (
    <div>
      <p>Total words: {totalWords}</p>
      <p>Words typed: {wordsTyped}</p>
      <p>Word mistakes: {wordMistakes}</p>
      <p>Word accuracy: {wordAccuracy}</p>
      <p>Total characters: {totalChars}</p>
      <p>Characters typed: {charsTyped}</p>
      <p>Character mistakes: {charMistakes}</p>
      <p>Character accuracy: {charAccuracy}</p>
      <p>Seconds left: {secondsLeft}</p>
    </div>
  );
}

export default TestStats;
