export function calculateEuclid(vector1, vector2) {
    const
        [x1, x2, x3] = vector1,
        [y1, y2, y3] = vector2

    return Math.sqrt((x1 - y1) ** 2 + (x2 - y2) ** 2 + (x3 - y3) ** 2).toFixed(3)
}

export function calculateManhattan(vector1, vector2) {
    const
        [x1, x2, x3] = vector1,
        [y1, y2, y3] = vector2

    return Math.abs(x1 - y1) + Math.abs(x2 - y2) + Math.abs(x3 - y3)
}

export function calculateChebyshev(vector1, vector2) {
    const
        [x1, x2, x3] = vector1,
        [y1, y2, y3] = vector2

    return Math.max(Math.abs(x1 - y1), Math.abs(x2 - y2), Math.abs(x3 - y3))
}