'use client';

import { useState, useEffect, KeyboardEvent, useRef } from 'react';
import { HiraganaCharacter, FlashCardResult } from '@/types';
import { getRandomHiragana } from '@/data/hiragana';
import './FlashCard.scss';

export default function FlashCard() {
  const [currentCharacter, setCurrentCharacter] = useState<HiraganaCharacter | null>(null);
  const [userInput, setUserInput] = useState<string>('');
  const [result, setResult] = useState<FlashCardResult | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    generateNewCharacter();
  }, []);

  const generateNewCharacter = () => {
    setCurrentCharacter(getRandomHiragana());
    setUserInput('');
    setResult(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (!currentCharacter || !userInput.trim()) return;

    const isCorrect = userInput.toLowerCase().trim() === currentCharacter.romanization.toLowerCase();
    const newResult: FlashCardResult = {
      isCorrect,
      userAnswer: userInput.trim(),
      correctAnswer: currentCharacter.romanization
    };

    setResult(newResult);
    setShowResult(true);
    
    // Focus the next button after a short delay to ensure it's rendered
    setTimeout(() => {
      nextButtonRef.current?.focus();
    }, 100);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (showResult) {
        generateNewCharacter();
      } else {
        checkAnswer();
      }
    }
  };

  const handleNextCard = () => {
    generateNewCharacter();
    // Focus back to input for the next question
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  if (!currentCharacter) {
    return <div className="flash-card loading">Loading...</div>;
  }

  return (
    <div className="flash-card">
      <div className="main-content">
        <div className="left-section">
          <div className="character-display">
            <h1 className="hiragana-character">{currentCharacter.character}</h1>
          </div>

          <div className="input-section">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type the romanization..."
              className="romanization-input"
              disabled={showResult}
              autoFocus
            />
            
            {!showResult ? (
              <button onClick={checkAnswer} className="check-button">
                Check Answer
              </button>
            ) : (
              <button ref={nextButtonRef} onClick={handleNextCard} className="next-button">
                Next Character
              </button>
            )}
          </div>
        </div>

        <div className="right-section">
          {showResult && result && (
            <div className={`result ${result.isCorrect ? 'correct' : 'incorrect'}`}>
              {result.isCorrect ? (
                <div className="success">
                  <h2>Correct! 🎉</h2>
                  <p>Great job!</p>
                </div>
              ) : (
                <div className="error">
                  <h2>Incorrect</h2>
                  <p>Your answer: <span className="user-answer">{result.userAnswer}</span></p>
                  <p>Correct answer: <span className="correct-answer">{result.correctAnswer}</span></p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}