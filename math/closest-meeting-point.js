class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let sumDistances = (assumedPt, people) => {
    let sum = 0;

    for (let i = 0; i < people.length; i++) {
        let pt = people[i]

        let distance = Math.sqrt(
            (pt.x - assumedPt.x) * (pt.x - assumedPt.x) +
            (pt.y - assumedPt.y) * (pt.y - assumedPt.y)
        );

        sum += distance
    }

    return sum;
}

let findClosestPoint = (m, people) => {
    if (people.length === 0) { return 0 }

    if (m < 1) { return 0 }

    let minDistance = +Infinity
    let minPt

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= m; j++) {
            let assumedPt = new Point(i, j)
            let distance = sumDistances(assumedPt, people);

            if (distance < minDistance) {
                minDistance = distance;
                minPt = assumedPt
            }
        }
    }

    return minPt;
};

let points = [
    new Point(1, 2),
    new Point(3, 3),
    new Point(4, 2)
];

let pt = findClosestPoint(5, points);
console.log("Closest Point = p(" + pt.x + ", " + pt.y + ")");

/****/

let calculateCentroid = (points) => {
    let x = 0;
    let y = 0;

    for (let i = 0; i < points.length; i++) {
        x += points[i].x
        y += points[i].y
    }

    centroidX = parseInt(Math.round(x / points.length))
    centroidY = parseInt(Math.round(y / points.length))

    let centroid = new Point(centroidX, centroidY)

    return centroid
}

let findClosestPointLinear = (m, people) => {
    if (people.length === 0) { return 0 }

    if (m < 1) { return 0 }

    let centroid = calculateCentroid(people)
    let minPt = new Point(centroid.x, centroid.y)
    let minDistance = sumDistances(minPt, people)

    for (let i = minPt.x - 1; i <= minPt.x + 1; i++) {
        for (let j = minPt.y - 1; j <= minPt.y + 1; j++) {
            if (i < 1 || j > m) { continue }

            let pt = new Point(i, j)
            let distance = sumDistances(pt, people)
            if (distance < minDistance) {
                minDistance = distance;
                minPt = pt
            }
        }
    }

    return minPt
};

let pt2 = findClosestPointLinear(5, points)
console.log("Closest Point = p(" + pt2.x + ", " + pt2.y + ")")