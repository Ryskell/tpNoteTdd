import { generateBoard } from "./nQueen"; 
import { canPlace } from "./nQueen";
import { placeQueens } from "./nQueen";

function printBoard(board: string[][]) {
    return board.map(row => row.join(" ")).join("\n");
}

describe("generateBoard", () => {
    it("doit générer un tableau n x n rempli de '0'", () => {
        const n = 4;
        const expectedBoard = [
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0']
        ];

        const result = generateBoard(n);

        console.log("\n Plateau attendu :\n" + printBoard(expectedBoard));
        console.log("\n Plateau obtenu :\n" + printBoard(result));

        expect(result).toEqual(expectedBoard);
    });

    it("doit générer un tableau vide pour n = 0", () => {
        const expectedBoard: string[][] = [];
        const result = generateBoard(0);

        console.log("\n Plateau attendu :\n", expectedBoard);
        console.log("\n Plateau obtenu :\n", result);

        expect(result).toEqual(expectedBoard);
    });

    it("doit générer un tableau 1x1 avec une seule case", () => {
        const expectedBoard = [['0']];
        const result = generateBoard(1);

        console.log("\n Plateau attendu :\n" + printBoard(expectedBoard));
        console.log("\n Plateau obtenu :\n" + printBoard(result));

        expect(result).toEqual(expectedBoard);
    });
});

describe("canPlace", () => {
    it("doit permettre de placer une reine sur un plateau vide", () => {
        const board = generateBoard(4);
        expect(canPlace(board, 0, 0)).toBe(true);
    });

    it("ne doit pas permettre de placer une reine dans la même ligne", () => {
        const board = generateBoard(4);
        board[1][1] = "#";
        expect(canPlace(board, 1, 2)).toBe(false);
    });

    it("ne doit pas permettre de placer une reine dans la même colonne", () => {
        const board = generateBoard(4);
        board[0][2] = "#";
        expect(canPlace(board, 2, 2)).toBe(false);
    });

    it("ne doit pas permettre de placer une reine sur une diagonale haut-gauche ", () => {
        const board = generateBoard(4);
        board[0][0] = "#";
        expect(canPlace(board, 1, 1)).toBe(false);
    });

    it("ne doit pas permettre de placer une reine sur une diagonale haut-droite ", () => {
        const board = generateBoard(4);
        board[0][3] = "#";
        expect(canPlace(board, 1, 2)).toBe(false);
    });

    it("ne doit pas permettre de placer une reine sur une diagonale bas-gauche", () => {
        const board = generateBoard(4);
        board[2][1] = "#";
        expect(canPlace(board, 1, 2)).toBe(false);
    });

    it("ne doit pas permettre de placer une reine sur une diagonale bas-droite ", () => {
        const board = generateBoard(4);
        board[2][2] = "#";
        expect(canPlace(board, 1, 1)).toBe(false);
    });
});

describe("placeQueens", () => {
    it("doit placer les reines correctement sur un plateau 4x4", () => {
        const board = generateBoard(4);
        const result = placeQueens(board);

        console.log("\n Plateau final après placement pour N=4:");
        console.table(board);

        // Vérifie que la fonction a bien trouvé une solution
        expect(result).toBe(true);

        // Vérifie qu'il y a exactement 4 reines placées
        const queenCount = board.reduce((count, row) => count + row.filter(cell => cell === "#").length, 0);
        expect(queenCount).toBe(4);

        // Vérifie qu'aucune reine ne peut en attaquer une autre
        let isValid = true;
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (board[row][col] === "#") {
                    board[row][col] = "0"; // Retirer temporairement pour vérifier
                    if (!canPlace(board, row, col)) {
                        isValid = false;
                    }
                    board[row][col] = "#"; // Remettre la reine
                }
            }
        }
        expect(isValid).toBe(true);
    });
});