let isAnagram = (s, t) => {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    if (s.length !== t.length){
        return false
    }

    for (let i = 0; i < s.length; i++){
        if(s[i] !== t[i]) {
            return false
        }
    }

    return true
}

console.log(isAnagram('ssta', 'sast'))