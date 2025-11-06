export interface HiraganaCharacter {
  character: string;
  romanization: string;
}

export interface FlashCardResult {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
}