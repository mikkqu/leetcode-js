
/*
    Brute Force
*/
function findPairsWithGivenDifferenceN2(arr, k) {
    let out = []

    for (let i = 0; i < arr.length; i++) {
      let x = arr[i] + k

      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === x) {
           out.push([arr[j], arr[i]])
        }
      }
    }

    return out
}

/*
    Binary Search
*/
let binarySearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return true
      }
    }

    return false
  }

let findPairsWithGivenDifferenceB = (arr, k) => {
    let out = []

    arr.sort((x, y) => x - y)

    for (let i = 0; i < arr.length; i++) {
      let y = arr[i] - k

      if (binarySearch(arr, y)) {
        out.push([arr[i], y])
      }
    }

    return out
}

/*
    Hash
*/
let findPairsWithGivenDifferenceH = (arr, k) => {
    let hash = {}
    let out = []

    for (let i = 0; i < arr.length; i++) {
      hash[arr[i]] = arr[i]
    }

    for (let i = 0; i < arr.length; i++) {
      let compl = k + arr[i] // 1 - -1 = 0

      if (hash.hasOwnProperty(compl)) {  //
        out.push([hash[compl], arr[i]])  // 1, 0
      }

      hash[arr[i]] = arr[i]
    }

    return out
  }

/*
    Two pointers
*/
let findPairsWithGivenDifference = (arr, k) => {
    arr.sort((x, y) => x - y)

    let out = []
    let left = 0
    let right = 1

    while (right < arr.length && left < arr.length) {
        if (left != right && arr[right] - arr[left] == k) {
            out.push( [arr[right], arr[left]] )
            left++
            right++
        } else if (arr[right] - arr[left] < k) {
            right++
        } else {
            left++
        }
    }

    return out
}


let arr = [0, -1, -2, 2, 1]
let k = 1
// Expected: [[1,0],[0,-1],[-1,-2],[2,1]]
console.log(findPairsWithGivenDifference(arr, k))