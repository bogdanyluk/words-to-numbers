import { jaroWinkler } from "@skyra/jaro-winkler";
import { ALL_WORDS } from "./constants";

type FuzzyMatch = {
  word: string;
  score: number;
};

const fuzzyMatch = (word: string): string => {
  return ALL_WORDS.map<FuzzyMatch>((numberWord) => ({
    word: numberWord,
    score: jaroWinkler(numberWord, word),
  })).reduce<FuzzyMatch>(
    (bestMatch, currentMatch) =>
      currentMatch.score > bestMatch.score ? currentMatch : bestMatch,
    {
      word: "",
      score: 0,
    }
  ).word;
};

export default fuzzyMatch;
