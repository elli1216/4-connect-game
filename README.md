
# 4-Connect Game

This is a web-based implementation of the classic 4-connect (Connect Four) game, built with React.

## Features

- Interactive 4-connect game board
- Two-player mode (local)
- Visual feedback for moves and winning combinations
- Responsive design for desktop and mobile
- Simple, intuitive UI

## Gameplay

Players take turns dropping colored circles into a vertical grid. The first player to connect four of their circles in a row (vertically, horizontally, or diagonally) wins the game. If the board fills up without a winner, the game ends in a draw.

## Getting Started

To run the game locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/Components/` - React components for the game (board, circles, header, footer, etc.)
- `src/css/` - CSS styles
- `public/` - Static assets and HTML

## Customization

You can modify the board size, colors, or add new features by editing the React components in `src/Components/`.
