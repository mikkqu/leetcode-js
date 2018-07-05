/*
    The keys in Map preserves insertion order
        vs
    The order of keys in Objects is not determined

    The keys of an Object are Strings and Symbols
        vs
    The keys of a Map can be any value, including functions, objects, and any primitive

    You can get the size of a Map easily with the size property
        vs
    Number of properties in an Object must be determined manually

    A Map is an iterable and can thus be directly iterated
        vs
    Iterating over an Object requires obtaining its keys and iterating over them.

    An Object has a prototype, so there are default keys that could collide with your keys
    As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.

    A Map may perform better in scenarios involving frequent addition and removal of key pairs.
*/

let m = new Map()

console.log(m.size)

m.set(3, "Three")
m.set(4, "Four")
m.set(5, "Five")

console.log(m.size)

for (let [key, value] of m) {
    console.log(key + ": " + value)
}