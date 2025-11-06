'use client';

import { useState, useEffect, KeyboardEvent, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { HiraganaCharacter } from '@/types';
import { getAllHiragana } from '@/data/hiragana';
import './ChallengeCard.scss';

interface ChallengeItem extends HiraganaCharacter {
  userAnswer: string;
  isCorrect: boolean | null;
}

export default function ChallengeCard() {
  const searchParams = useSearchParams();
  const includeDakuten = searchParams.get('dakuten') === 'true';
  
  const [challengeList, setChallengeList] = useState<ChallengeItem[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    generateChallenge();
  }, [includeDakuten]);

  const generateChallenge = () => {
    // Get 20 random unique characters
    const allChars = getAllHiragana(includeDakuten);
    const shuffled = [...allChars].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    
    const challengeItems: ChallengeItem[] = selected.map(char => ({
      ...char,
      userAnswer: '',
      isCorrect: null
    }));
    
    setChallengeList(challengeItems);
    setCurrentInput('');
    setIsCompleted(false);
    setScore(0);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkAllAnswers();
    }
  };

  const checkAllAnswers = () => {
    if (!currentInput.trim()) return;

    const answers = currentInput.toLowerCase().split(/[\s,]+/).map(s => s.trim()).filter(s => s);
    
    const updatedList = challengeList.map((item, index) => {
      const userAnswer = answers[index] || '';
      const isCorrect = userAnswer === item.romanization.toLowerCase();
      return {
        ...item,
        userAnswer,
        isCorrect
      };
    });

    setChallengeList(updatedList);
    setIsCompleted(true);
    
    const correctCount = updatedList.filter(item => item.isCorrect).length;
    setScore(correctCount);
  };

  const handleRetry = () => {
    generateChallenge();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const getScoreColor = () => {
    const percentage = (score / 20) * 100;
    if (percentage >= 90) return '#48bb78';
    if (percentage >= 70) return '#ed8936';
    return '#e53e3e';
  };

  return (
    <div className="challenge-card">
      <div className="character-grid">
        {challengeList.map((item, index) => (
          <div 
            key={index} 
            className={`character-item ${
              item.isCorrect === true ? 'correct' : 
              item.isCorrect === false ? 'incorrect' : ''
            }`}
          >
            <div className="character">{item.character}</div>
            <div className="number">{index + 1}</div>
            {item.isCorrect === false && (
              <div className="correct-answer">{item.romanization}</div>
            )}
          </div>
        ))}
      </div>

      <div className="input-section">
        <div className="instructions">
          {!isCompleted ? (
            <p>Type the romanization for all characters separated by spaces or commas, then press Enter</p>
          ) : (
            <div className="results">
              <h3 style={{ color: getScoreColor() }}>Score: {score}/20 ({Math.round((score/20)*100)}%)</h3>
              <p>Great job! {score === 20 ? 'Perfect score! 🎉' : 'Keep practicing to improve!'}</p>
            </div>
          )}
        </div>
        
        <div className="input-controls">
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter all romanizations (e.g., a i u e o ka ki ku...)"
            className="challenge-input"
            disabled={isCompleted}
            autoFocus
          />
          
          {!isCompleted ? (
            <button onClick={checkAllAnswers} className="check-button">
              Check Answers
            </button>
          ) : (
            <button onClick={handleRetry} className="retry-button">
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}