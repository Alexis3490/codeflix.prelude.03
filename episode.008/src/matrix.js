export default function strToMatrix(matrixStr)
{
    let rowMatrix = matrixStr.split("\n")
        .map(r => r.split(" ")
            .map(Number))
    let mat =
        {
            rows: rowMatrix,
            columns: rowMatrix[0].map((_, i) => rowMatrix.map(row => row[i]))
        }
    return (mat)
}
