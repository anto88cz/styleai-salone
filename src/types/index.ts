export interface RecommendedCut {
  name: string;
  description: string;
  why: string;
  maintenance: string;
}

export interface ColorSuggestion {
  color: string;
  technique: string;
  why: string;
}

export interface HairAnalysis {
  faceShape: string;
  eyeColor: string;
  skinTone: string;
  currentHair: string;
  recommendedCuts: RecommendedCut[];
  colorSuggestions: ColorSuggestion[];
  professionalNotes: string;
}