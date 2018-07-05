
var intersectAlt = function(nums1, nums2) {
    let hash = {}
    let out = []

    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = hash[nums1[i]] + 1 || 1
    }

    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]] > 0) {
            out.push(nums2[i])
            hash[nums2[i]]--
        }
    }

    return out
};

let findIntersect = (nums1, nums2) => {
    let results = []

    let i = 0
    let j = 0

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            results.push(nums1[i])
            i++
            j++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            i++
        }
    }

    return results
}

let findIntersectNoDups = (nums1, nums2) => {
    let results = new Set()

    nums1 = nums1.sort((x, y) => x - y)
    nums2 = nums2.sort((x, y) => x - y)

    let i = 0
    let j = 0

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            results.add(nums1[i])
            i++
            j++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            i++
        }
    }

    return Array.from(results)
}

let nums1 = [2, 1]
let nums2 = [1, 1]

console.log(findIntersectNoDups(nums1, nums2))