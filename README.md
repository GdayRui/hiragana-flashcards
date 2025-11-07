# Hiragana Flash Cards

A web application for learning Japanese Hiragana characters built with Next.js, React, TypeScript, and SCSS.

## Features

- Display random Hiragana characters
- Input field for typing romanization
- Immediate feedback on answers
- Shows correct answer when incorrect
- Clean, responsive design
- Keyboard support (Enter key to submit/continue)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd hiragana-flash-cards
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## How to Use

1. A Hiragana character will be displayed on the screen
2. Type the romanization (English pronunciation) in the input field
3. Press Enter or click "Check Answer" to submit your answer
4. The app will show if your answer is correct or incorrect
5. If incorrect, the correct answer will be displayed
6. Press Enter or click "Next Character" to get a new character

## Project Structure

```
src/
├── app/
│   ├── globals.scss       # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── FlashCard.tsx     # Main flash card component
│   └── FlashCard.scss    # Flash card styles
├── data/
│   └── hiragana.ts       # Hiragana character data
└── types/
    └── index.ts          # TypeScript interfaces
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **SCSS** - Enhanced CSS with variables and nesting
- **ESLint** - Code linting

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This application is deployed on AWS Amplify with automatic deployment from GitHub:

### Deployment Architecture
- **AWS Amplify**: Handles automatic builds and deployments on every commit to `main`
- **GitHub Actions**: Used only for infrastructure management (manual trigger only)
- **CloudFormation**: Manages AWS Amplify app configuration

### Deployment Process
1. **Automatic**: Push to `main` branch → Amplify auto-builds and deploys
2. **Infrastructure Updates**: Use `workflow_dispatch` in GitHub Actions for Amplify configuration changes

### Manual Infrastructure Deployment
```bash
# Trigger infrastructure update via GitHub Actions (manual)
# Go to Actions tab → "Deploy to AWS Amplify" → "Run workflow"
```

## Hiragana Characters Included

The app includes all basic Hiragana characters:
- Vowels (あ, い, う, え, お)
- K sounds (か, き, く, け, こ)
- S sounds (さ, し, す, せ, そ)
- T sounds (た, ち, つ, て, と)
- N sounds (な, に, ぬ, ね, の)
- H sounds (は, ひ, ふ, へ, ほ)
- M sounds (ま, み, む, め, も)
- Y sounds (や, ゆ, よ)
- R sounds (ら, り, る, れ, ろ)
- W sounds (わ, を)
- N (ん)

## License

This project is open source and available under the [MIT License](LICENSE).