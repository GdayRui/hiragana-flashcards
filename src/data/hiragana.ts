import { HiraganaCharacter } from '@/types';

export const hiraganaData: HiraganaCharacter[] = [
  // Vowels
  { character: 'あ', romanization: 'a', katakana: 'ア' },
  { character: 'い', romanization: 'i', katakana: 'イ' },
  { character: 'う', romanization: 'u', katakana: 'ウ' },
  { character: 'え', romanization: 'e', katakana: 'エ' },
  { character: 'お', romanization: 'o', katakana: 'オ' },
  
  // K sounds
  { character: 'か', romanization: 'ka', katakana: 'カ' },
  { character: 'き', romanization: 'ki', katakana: 'キ' },
  { character: 'く', romanization: 'ku', katakana: 'ク' },
  { character: 'け', romanization: 'ke', katakana: 'ケ' },
  { character: 'こ', romanization: 'ko', katakana: 'コ' },
  
  // S sounds
  { character: 'さ', romanization: 'sa', katakana: 'サ' },
  { character: 'し', romanization: 'shi', katakana: 'シ' },
  { character: 'す', romanization: 'su', katakana: 'ス' },
  { character: 'せ', romanization: 'se', katakana: 'セ' },
  { character: 'そ', romanization: 'so', katakana: 'ソ' },
  
  // T sounds
  { character: 'た', romanization: 'ta', katakana: 'タ' },
  { character: 'ち', romanization: 'chi', katakana: 'チ' },
  { character: 'つ', romanization: 'tsu', katakana: 'ツ' },
  { character: 'て', romanization: 'te', katakana: 'テ' },
  { character: 'と', romanization: 'to', katakana: 'ト' },
  
  // N sounds
  { character: 'な', romanization: 'na', katakana: 'ナ' },
  { character: 'に', romanization: 'ni', katakana: 'ニ' },
  { character: 'ぬ', romanization: 'nu', katakana: 'ヌ' },
  { character: 'ね', romanization: 'ne', katakana: 'ネ' },
  { character: 'の', romanization: 'no', katakana: 'ノ' },
  
  // H sounds
  { character: 'は', romanization: 'ha', katakana: 'ハ' },
  { character: 'ひ', romanization: 'hi', katakana: 'ヒ' },
  { character: 'ふ', romanization: 'fu', katakana: 'フ' },
  { character: 'へ', romanization: 'he', katakana: 'ヘ' },
  { character: 'ほ', romanization: 'ho', katakana: 'ホ' },
  
  // M sounds
  { character: 'ま', romanization: 'ma', katakana: 'マ' },
  { character: 'み', romanization: 'mi', katakana: 'ミ' },
  { character: 'む', romanization: 'mu', katakana: 'ム' },
  { character: 'め', romanization: 'me', katakana: 'メ' },
  { character: 'も', romanization: 'mo', katakana: 'モ' },
  
  // Y sounds
  { character: 'や', romanization: 'ya', katakana: 'ヤ' },
  { character: 'ゆ', romanization: 'yu', katakana: 'ユ' },
  { character: 'よ', romanization: 'yo', katakana: 'ヨ' },
  
  // R sounds
  { character: 'ら', romanization: 'ra', katakana: 'ラ' },
  { character: 'り', romanization: 'ri', katakana: 'リ' },
  { character: 'る', romanization: 'ru', katakana: 'ル' },
  { character: 'れ', romanization: 're', katakana: 'レ' },
  { character: 'ろ', romanization: 'ro', katakana: 'ロ' },
  
  // W sounds
  { character: 'わ', romanization: 'wa', katakana: 'ワ' },
  { character: 'を', romanization: 'wo', katakana: 'ヲ' },
  
  // N
  { character: 'ん', romanization: 'n', katakana: 'ン' },
];

// Dakuten characters (voiced sounds)
export const dakutenData: HiraganaCharacter[] = [
  // G sounds (ga, gi, gu, ge, go)
  { character: 'が', romanization: 'ga', katakana: 'ガ' },
  { character: 'ぎ', romanization: 'gi', katakana: 'ギ' },
  { character: 'ぐ', romanization: 'gu', katakana: 'グ' },
  { character: 'げ', romanization: 'ge', katakana: 'ゲ' },
  { character: 'ご', romanization: 'go', katakana: 'ゴ' },
  
  // Z sounds (za, ji, zu, ze, zo)
  { character: 'ざ', romanization: 'za', katakana: 'ザ' },
  { character: 'じ', romanization: 'ji', katakana: 'ジ' },
  { character: 'ず', romanization: 'zu', katakana: 'ズ' },
  { character: 'ぜ', romanization: 'ze', katakana: 'ゼ' },
  { character: 'ぞ', romanization: 'zo', katakana: 'ゾ' },
  
  // D sounds (da, chi, tsu, de, do)
  { character: 'だ', romanization: 'da', katakana: 'ダ' },
  { character: 'ぢ', romanization: 'di', katakana: 'ヂ' },
  { character: 'づ', romanization: 'du', katakana: 'ヅ' },
  { character: 'で', romanization: 'de', katakana: 'デ' },
  { character: 'ど', romanization: 'do', katakana: 'ド' },
  
  // B sounds (ba, bi, bu, be, bo)
  { character: 'ば', romanization: 'ba', katakana: 'バ' },
  { character: 'び', romanization: 'bi', katakana: 'ビ' },
  { character: 'ぶ', romanization: 'bu', katakana: 'ブ' },
  { character: 'べ', romanization: 'be', katakana: 'ベ' },
  { character: 'ぼ', romanization: 'bo', katakana: 'ボ' },
  
  // P sounds (pa, pi, pu, pe, po)
  { character: 'ぱ', romanization: 'pa', katakana: 'パ' },
  { character: 'ぴ', romanization: 'pi', katakana: 'ピ' },
  { character: 'ぷ', romanization: 'pu', katakana: 'プ' },
  { character: 'ぺ', romanization: 'pe', katakana: 'ペ' },
  { character: 'ぽ', romanization: 'po', katakana: 'ポ' },
];

export const getRandomHiragana = (includeDakuten: boolean = false): HiraganaCharacter => {
  const availableChars = includeDakuten ? [...hiraganaData, ...dakutenData] : hiraganaData;
  const randomIndex = Math.floor(Math.random() * availableChars.length);
  return availableChars[randomIndex];
};

export const getAllHiragana = (includeDakuten: boolean = false): HiraganaCharacter[] => {
  return includeDakuten ? [...hiraganaData, ...dakutenData] : hiraganaData;
};