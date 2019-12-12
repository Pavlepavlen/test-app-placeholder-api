export const getFilledWithIndexesArray = ( count, multiplier = 1 ) => 
    Array.from(Array(parseInt(count)), (i, index) => (index + 1) * multiplier)