import { checkWinner } from "@/utils/checkWinner";

export function GetAIMove(
    board: string[],
    difficulty: "easy" | "normal" | "hard"
): number {
    const empty: number[] = board
        .map((v, i) => (v === "" ? i : -1))
        .filter((i): i is number => i !== -1);

    if (empty.length === 0) return -1;

    if (difficulty === "hard") {
        return findBestMove(board);
    }

    if (difficulty === "normal") {
        const winMove = findImmediateWin(board, "O");
        if (winMove !== -1) return winMove;

        const blockMove = findImmediateWin(board, "X");
        if (blockMove !== -1) return blockMove;

        if (Math.random() < 0.5) {
            return findSmartMove(board, 3);
        } else {
            return strategicMove(empty, board);
        }
    }

    return Math.random() < 0.8
        ? empty[Math.floor(Math.random() * empty.length)]
        : smartMove(empty, board);
}

function findImmediateWin(board: string[], player: string): number {
    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = player;
            const result = checkWinner(board);
            board[i] = "";
            if (result.winner === player) return i;
        }
    }
    return -1;
}

function strategicMove(empty: number[], board: string[]): number {
    if (empty.includes(4)) return 4;

    const cornerPairs = [[0, 8], [2, 6]];
    
    for (const [a, b] of cornerPairs) {
        if (board[a] === "X" && empty.includes(b)) return b;
        if (board[b] === "X" && empty.includes(a)) return a;
    }

    const corners = [0, 2, 6, 8].filter((i) => empty.includes(i));

    if (corners.length > 0) {
        return corners[Math.floor(Math.random() * corners.length)];
    }
        
    const edges = [1, 3, 5, 7].filter((i) => empty.includes(i));

    if (edges.length > 0) {
        return edges[Math.floor(Math.random() * edges.length)];
    }
        
    return empty[Math.floor(Math.random() * empty.length)];
}

function smartMove(empty: number[], board: string[]): number {
    if (empty.includes(4)) return 4;

    const corners = [0, 2, 6, 8].filter((i) => empty.includes(i));
    
    if (corners.length > 0) {
        return corners[Math.floor(Math.random() * corners.length)];
    }
        
    return empty[Math.floor(Math.random() * empty.length)];
}

function findBestMove(board: string[]): number {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = "O"; 
            const score = minimax(board, 0, false, Infinity);
            board[i] = "";
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
}

function findSmartMove(board: string[], maxDepth: number): number {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = "O";
            const score = minimax(board, 0, false, maxDepth);
            board[i] = "";
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
}

function minimax(
    board: string[],
    depth: number,
    isMaximizing: boolean,
    maxDepth: number
): number {
    const result = checkWinner(board);
    if (result.winner === "O") return 10 - depth; 
    if (result.winner === "X") return depth - 10; 
    if (!board.includes("")) return 0; 
    if (depth >= maxDepth) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = "O";
                const score = minimax(board, depth + 1, false, maxDepth);
                board[i] = "";
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = "X";
                const score = minimax(board, depth + 1, true, maxDepth);
                board[i] = "";
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// const empty: number[] = board
// .map((v, i) => (v === "" ? i : -1))
// .filter((i): i is number => i !== -1);

// if (empty.length === 0) return -1;

// for (const i of empty) {
//     const copy = [...board];
//     copy[i] = "O";
//     if (checkWinner(copy).winner === "O") return i;
// }

// for (const i of empty) {
//     const copy = [...board];
//     copy[i] = "X";
//     if (checkWinner(copy).winner === "X") return i;
// }

// if (empty.includes(4)) return 4;

// return empty[Math.floor(Math.random() * empty.length)];

//  const empty: number[] = board
//      .map((v, i) => (v === "" ? i : -1))
//      .filter((i): i is number => i !== -1);
//  if (empty.length === 0) return -1;
//  for (const i of empty) {
//      const copy = [...board];
//      copy[i] = "O";
//      if (checkWinner(copy).winner === "O") return i;
//  }

//  for (const i of empty) {
//      const copy = [...board];
//      copy[i] = "X";
//      if (checkWinner(copy).winner === "X") return i;
//  }

//  const preferredMoves = [4, 0, 2, 6, 8, 1, 3, 5, 7];
//  for (const i of preferredMoves) {
//      if (empty.includes(i)) return i;
//  }

//  return empty[Math.floor(Math.random() * empty.length)];
