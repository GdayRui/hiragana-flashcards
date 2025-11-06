import { HiraganaCharacter } from '@/types';

export const hiraganaData: HiraganaCharacter[] = [
  // Vowels
  { character: 'あ', romanization: 'a' },
  { character: 'い', romanization: 'i' },
  { character: 'う', romanization: 'u' },
  { character: 'え', romanization: 'e' },
  { character: 'お', romanization: 'o' },
  
  // K sounds
  { character: 'か', romanization: 'ka' },
  { character: 'き', romanization: 'ki' },
  { character: 'く', romanization: 'ku' },
  { character: 'け', romanization: 'ke' },
  { character: 'こ', romanization: 'ko' },
  
  // S sounds
  { character: 'さ', romanization: 'sa' },
  { character: 'し', romanization: 'shi' },
  { character: 'す', romanization: 'su' },
  { character: 'せ', romanization: 'se' },
  { character: 'そ', romanization: 'so' },
  
  // T sounds
  { character: 'た', romanization: 'ta' },
  { character: 'ち', romanization: 'chi' },
  { character: 'つ', romanization: 'tsu' },
  { character: 'て', romanization: 'te' },
  { character: 'と', romanization: 'to' },
  
  // N sounds
  { character: 'な', romanization: 'na' },
  { character: 'に', romanization: 'ni' },
  { character: 'ぬ', romanization: 'nu' },
  { character: 'ね', romanization: 'ne' },
  { character: 'の', romanization: 'no' },
  
  // H sounds
  { character: 'は', romanization: 'ha' },
  { character: 'ひ', romanization: 'hi' },
  { character: 'ふ', romanization: 'fu' },
  { character: 'へ', romanization: 'he' },
  { character: 'ほ', romanization: 'ho' },
  
  // M sounds
  { character: 'ま', romanization: 'ma' },
  { character: 'み', romanization: 'mi' },
  { character: 'む', romanization: 'mu' },
  { character: 'め', romanization: 'me' },
  { character: 'も', romanization: 'mo' },
  
  // Y sounds
  { character: 'や', romanization: 'ya' },
  { character: 'ゆ', romanization: 'yu' },
  { character: 'よ', romanization: 'yo' },
  
  // R sounds
  { character: 'ら', romanization: 'ra' },
  { character: 'り', romanization: 'ri' },
  { character: 'る', romanization: 'ru' },
  { character: 'れ', romanization: 're' },
  { character: 'ろ', romanization: 'ro' },
  
  // W sounds
  { character: 'わ', romanization: 'wa' },
  { character: 'を', romanization: 'wo' },
  
  // N
  { character: 'ん', romanization: 'n' },
];

export const getRandomHiragana = (): HiraganaCharacter => {
  const randomIndex = Math.floor(Math.random() * hiraganaData.length);
  return hiraganaData[randomIndex];
};