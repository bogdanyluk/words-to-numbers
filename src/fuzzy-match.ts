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
    (bestMatch, stat) => (stat.score > bestMatch.score ? stat : bestMatch),
    {
      word: "",
      score: 0,
    }
  ).word;
};

export default fuzzyMatch;
