let compareVersion = (version1, version2) => {
    let vSplit1 = version1.split('.')
    let vSplit2 = version2.split('.')

    let vlength = vSplit1.length > vSplit2.length ?
                  vSplit2.length : vSplit1.length;
    // let compare = (a, b) => {
    //     if (a - b > 0)
    //         return true
    //     else
    //         return false
    // };

    for (let i = 0; i < vlength; i++) {
        if (vSplit1[i] - vSplit2[i] > 0) {
            return 1
        } else if (vSplit1[i] - vSplit2[i] < 0) {
            return -1
        } else {
            continue
        }
    }

    if (vSplit1.length > vSplit2.length) {
        for (var i = vSplit2.length; i < vSplit1.length; i++) {
            if (vSplit1[i] != 0) {
                return 1
            }
        }
    }

    if (vSplit1.length < vSplit2.length) {
        for (let i = vSplit1.length; i < vSplit2.length; i++) {
            if (vSplit2[i] != 0) {
                return -1
            }
        }
    }

    return 0
};

console.log(compareVersion('1.5', '1.5.2'))