'use client';

import { useRouter } from 'next/navigation';
import './page.scss';

export default function Home() {
  const router = useRouter();

  const handleFreeModeClick = () => {
    router.push('/free-mode');
  };

  const handleChallengeModeClick = () => {
    router.push('/challenge-mode');
  };

  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Hiragana Flash Cards</h1>
        <p className="subtitle">Learn Japanese Hiragana characters</p>
        
        <div className="mode-selection">
          <button onClick={handleFreeModeClick} className="mode-button">
            <div className="mode-icon">📚</div>
            <h2>Free Mode</h2>
            <p>Practice with random Hiragana characters at your own pace</p>
          </button>
          
          <button onClick={handleChallengeModeClick} className="mode-button">
            <div className="mode-icon">🎯</div>
            <h2>Challenge Mode</h2>
            <p>Test yourself with a list of 20 characters</p>
          </button>
        </div>
      </div>
    </main>
  );
}