export type WordsToNumbersOptions = {
  fuzzy?: boolean;
  impliedHundreds?: boolean;
};

export type Token = {
  start: number;
  end: number;
  value: string;
  lowerCaseValue: string;
  type: number | undefined;
};

export type SubRegion = {
  tokens: Token[];
  type: number | undefined;
};

export type Region = SubRegion & {
  start: number;
  end: number;
  hasDecimal?: boolean;
  subRegions?: SubRegion[];
};
