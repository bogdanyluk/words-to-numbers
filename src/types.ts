export interface WordsToNumbersOptions {
  fuzzy?: boolean;
  impliedHundreds?: boolean;
}

export interface Token {
  start: number;
  end: number;
  value: string;
  lowerCaseValue: string;
  type: number | undefined;
}

export interface SubRegion {
  tokens: Token[];
  type: number | undefined;
}

export interface Region extends SubRegion {
  start: number;
  end: number;
  hasDecimal: boolean;
  subRegions: SubRegion[];
}
