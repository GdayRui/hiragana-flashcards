'use client';

import { hiraganaData, dakutenData } from '@/data/hiragana';
import './HiraganaChart.scss';

export default function HiraganaChart() {

  // Organize basic hiragana by rows
  const hiraganaRows = [
    { label: 'Vowels', chars: hiraganaData.slice(0, 5) }, // あいうえお
    { label: 'K sounds', chars: hiraganaData.slice(5, 10) }, // かきくけこ
    { label: 'S sounds', chars: hiraganaData.slice(10, 15) }, // さしすせそ
    { label: 'T sounds', chars: hiraganaData.slice(15, 20) }, // たちつてと
    { label: 'N sounds', chars: hiraganaData.slice(20, 25) }, // なにぬねの
    { label: 'H sounds', chars: hiraganaData.slice(25, 30) }, // はひふへほ
    { label: 'M sounds', chars: hiraganaData.slice(30, 35) }, // まみむめも
    { label: 'Y sounds', chars: [hiraganaData[35], null, hiraganaData[36], null, hiraganaData[37]] }, // や_ゆ_よ
    { label: 'R sounds', chars: hiraganaData.slice(38, 43) }, // らりるれろ
    { label: 'W sounds', chars: [hiraganaData[43], null, null, null, hiraganaData[44]] }, // わ___を
    { label: 'N', chars: [hiraganaData[45], null, null, null, null] }, // ん____
  ];

  // Organize dakuten by rows
  const dakutenRows = [
    { label: 'G sounds', chars: dakutenData.slice(0, 5) }, // がぎぐげご
    { label: 'Z sounds', chars: dakutenData.slice(5, 10) }, // ざじずぜぞ
    { label: 'D sounds', chars: dakutenData.slice(10, 15) }, // だぢづでど
    { label: 'B sounds', chars: dakutenData.slice(15, 20) }, // ばびぶべぼ
    { label: 'P sounds', chars: dakutenData.slice(20, 25) }, // ぱぴぷぺぽ
  ];

  return (
    <div className="hiragana-chart">
      <div className="chart-section">
        <h2 className="section-title">Basic Hiragana</h2>
        <div className="chart-grid">
          <div className="column-headers">
            <div className="row-label"></div>
            <div className="col-header">a</div>
            <div className="col-header">i</div>
            <div className="col-header">u</div>
            <div className="col-header">e</div>
            <div className="col-header">o</div>
          </div>
          
          {hiraganaRows.map((row, rowIndex) => (
            <div key={rowIndex} className="chart-row">
              <div className="row-label">{row.label}</div>
              {row.chars.map((char, colIndex) => (
                <div key={colIndex} className={`char-cell ${char ? 'filled' : 'empty'}`}>
                  {char && (
                    <>
                      <div className="character">{char.character}</div>
                      <div className="romanization">{char.romanization}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="chart-section dakuten-section">
        <h2 className="section-title">Dakuten & Handakuten</h2>
        <div className="chart-grid">
          <div className="column-headers">
            <div className="row-label"></div>
            <div className="col-header">a</div>
            <div className="col-header">i</div>
            <div className="col-header">u</div>
            <div className="col-header">e</div>
            <div className="col-header">o</div>
          </div>
          
          {dakutenRows.map((row, rowIndex) => (
            <div key={rowIndex} className="chart-row">
              <div className="row-label">{row.label}</div>
              {row.chars.map((char, colIndex) => (
                <div key={colIndex} className="char-cell filled">
                  <div className="character">{char.character}</div>
                  <div className="romanization">{char.romanization}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="chart-info">
        <p>
          <strong>Total characters:</strong> {hiraganaData.length + dakutenData.length} ({hiraganaData.length} basic + {dakutenData.length} dakuten)
        </p>
        <p>This chart shows all Hiragana characters including voiced sounds (dakuten ゛) and semi-voiced sounds (handakuten ゜)</p>
      </div>
    </div>
  );
}