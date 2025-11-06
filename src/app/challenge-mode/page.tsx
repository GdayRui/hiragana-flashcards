import ChallengeCard from '@/components/ChallengeCard';
import Link from 'next/link';
import './page.scss';

export default function ChallengeMode() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <Link href="/" className="back-button">← Back to Menu</Link>
          <div className="title-section">
            <h1 className="title">Challenge Mode</h1>
            <p className="subtitle">Type the romanization for all 20 characters</p>
          </div>
        </div>
        <ChallengeCard />
      </div>
    </main>
  );
}