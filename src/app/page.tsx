import FlashCard from '@/components/FlashCard';

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Hiragana Flash Cards</h1>
        <p className="subtitle">Learn Japanese Hiragana characters</p>
        <FlashCard />
      </div>
    </main>
  );
}