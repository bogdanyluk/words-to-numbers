import { jaroWinkler } from "@skyra/jaro-winkler";
import { ALL_WORDS } from "./constants";

type FuzzyMatch = {
  word: string;
  score: number;
};

const fuzzyMatch = (word: string): string => {
  const allMatches = ALL_WORDS.map<FuzzyMatch>((numberWord) => ({
    word: numberWord,
    score: jaroWinkler(numberWord, word),
  }));

  const bestMatch = allMatches.reduce<FuzzyMatch>(
    (best, current) => (current.score > best.score ? current : best),
    { word: "", score: 0 }
  );

  return bestMatch.word;
};

export default fuzzyMatch;
