/** Given an array of 1s and 0s which has all 1s first followed by all 0s, returns the number of zeroes in the array.
 * 
 * Example: countZeroes([1,1,1,1,0,0]) // 2
 */
function countZeroes(arr) {
    findZero(arr);
    if (findZero(arr) === -1) return 0;

    function findZero(arr, low = 0, high = arr.length - 1) {
        if (high >= low) {
            let middle = low + Math.floor((high - low) / 2);
            if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
                return middle;
            } else if (arr[middle] === 1) {
                return findZero(arr, low, mid + 1);
            } return findZero(arr, low, mid - 1);
        }
        return -1;
    }
}

module.exports = countZeroes