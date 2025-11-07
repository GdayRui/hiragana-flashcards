import HiraganaChart from '@/components/HiraganaChart';
import Link from 'next/link';
import './page.scss';

export default function HiraganaChartPage() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <Link href="/free-mode" className="back-button">← Back to Free Mode</Link>
          <div className="title-section">
            <h1 className="title">Complete Hiragana Chart</h1>
            <p className="subtitle">All Japanese Hiragana characters with romanization</p>
          </div>
        </div>
        <HiraganaChart />
      </div>
    </main>
  );
}