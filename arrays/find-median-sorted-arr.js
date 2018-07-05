
/*
    O(M + N)
*/
let findMedianSortedArrays = (nums1, nums2) => {
    let num = []

    let i1 = 0
    let i2 = 0

    while (i1 < nums1.length && i2 < nums2.length) {
        if (nums1[i1] < nums2[i2]) {
            num.push(nums1[i1++]);
        } else {
            num.push(nums2[i2++]);
        }
    }

    if (i1 < nums1.length) { num = num.concat(nums1.slice(i1)) }
    if (i2 < nums2.length) { num = num.concat(nums2.slice(i2)) }

    let l = num.length;
    if (l % 2 === 1) {
        return num[parseInt((l - 1) / 2)]
    } else {
        return (num[parseInt((l - 1) / 2)] + num[parseInt(l / 2)]) / 2
    }
}

/*
    O(log(M + N))
*/
let findMedianSortedArrays_log = (nums1, nums2) => {
    let m = nums1.length
    let n = nums2.length

    if (m > n) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
        m = nums1.length;
        n = nums2.length;
    }

    let iMin = 0
    let iMax = m
    let halfLen = Math.floor((m + n + 1) / 2)

    while (iMin < iMax) {
        let i = Math.floor((iMax + iMin) / 2)
        let j = halfLen - i

        if (i < iMax && nums2[j - 1] > nums1[i]) {
            iMin = i + 1
        } else if (i > iMin && nums2[j] < nums1[i - 1]) {
            iMax = i - 1
        } else {
            let maxLeft = 0
            if (i === 0) {
                maxLeft = nums2[j - 1]
            } else if (j === 0) {
                maxLeft = nums1[i - 1]
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
            }
            if ((m + n) % 2 === 1) {
                return maxLeft
            }

            let minRight = 0
            if (i === m) {
                minRight = nums2[j]
            } else if (j === n) {
                minRight = nums1[i]
            } else {
                minRight = Math.min(nums2[j], nums1[i])
            }

            return (maxLeft + minRight) / 2
        }
    }

    return 0
}

/*
    Elegant
*/
let findMedian = (nums1, nums2) => {
    let totalLen = nums1.length + nums2.length

    if (totalLen % 2 === 0) {
        return (
            findKthLargest(Math.floor(totalLen / 2), nums1, nums2) +
            findKthLargest(Math.floor(totalLen / 2) - 1, nums1, nums2)
        ) / 2
    }

    return findKthLargest(Math.floor(totalLen / 2), nums1, nums2)
}

let findKthLargest = (k, nums1, nums2) => {
    console.log(k, nums1, nums2)

    if (!nums1.length) { return nums2[k] }
    if (!nums2.length) { return nums1[k] }

    let mid1 = Math.floor(nums1.length / 2)
    let mid2 = Math.floor(nums2.length / 2)

    if (k > mid1 + mid2) {
        if (nums1[mid1] > nums2[mid2]) {
            return findKthLargest(
                k - mid2 - 1, nums1, nums2.slice(mid2 + 1)
            )
        } else {
            return findKthLargest(
                k - mid1 - 1, nums1.slice(mid1 + 1), nums2
            )
        }
    } else {
        if (nums1[mid1] > nums2[mid2]) {
            return findKthLargest(k, nums1.slice(0, mid1), nums2)
        } else {
            return findKthLargest(k, nums1, nums2.slice(0, mid2))
        }
    }
}


console.log(findMedian([1, 3, 5], [2, 4, 6]))