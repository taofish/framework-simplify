import { quickSort } from '../utils/quick-sort.js'

const arr = [
    1,
    2,
    9,
    0,
    2,
    4,
    5,
    8
]

console.log('origin', JSON.parse(JSON.stringify(arr)))
console.log('sort', quickSort(arr))
