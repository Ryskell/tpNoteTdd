export function generateBoard(n: number): string[][] {
    return Array.from({ length: n }, () => Array(n).fill("0"));
}