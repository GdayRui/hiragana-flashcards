export interface HiraganaCharacter {
  character: string;
  romanization: string;
  katakana: string;
}

export interface FlashCardResult {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
}