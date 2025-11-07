import { Suspense } from 'react';
import FlashCard from '@/components/FlashCard';
import Link from 'next/link';
import './page.scss';

export default function FreeMode() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <Link href="/" className="back-button">← Back to Menu</Link>
          <div className="title-section">
            <h1 className="title">Free Mode</h1>
            <p className="subtitle">Practice at your own pace</p>
          </div>
        </div>
        <Suspense fallback={<div className="loading">Loading flash cards...</div>}>
          <FlashCard />
        </Suspense>
        
        <div className="chart-link-section">
          <p className="chart-suggestion">Want to see the full chart?</p>
          <Link href="/hiragana-chart" className="chart-button">
            View Complete Hiragana Chart
          </Link>
        </div>
      </div>
    </main>
  );
}