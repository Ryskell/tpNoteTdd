export function generateBoard(n: number): string[][] {
    return Array.from({ length: n }, () => Array(n).fill("0"));
}

export function canPlace(board: string[][], row: number, col: number): boolean {
    const n = board.length;

    // Vérifier la ligne 
    if (board[row].indexOf("#") !== -1) {
        return false;
    }

    // Vérifier la colonne 
    for (let i = 0; i < row; i++) {
        if (board[i][col] === "#") {
            return false;
        }
    }

    // Vérifier la diagonale haut-gauche 
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "#") {
            return false;
        }
    }

    // Vérifier la diagonale haut-droite 
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === "#") {
            return false;
        }
    }

    // Vérifier la diagonale bas-gauche (↙)
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j] === "#") {
            return false;
        }
    }

    // Vérifier la diagonale bas-droite 
    for (let i = row, j = col; i < n && j < n; i++, j++) {
        if (board[i][j] === "#") {
            return false;
        }
    }

    return true; 
}

