console.log('hanoi')

// const canvas = document.querySelector('#canvas')
// const canvas = document.getElementById('game')
// const width = canvas.width// 500
// const height = canvas.height// 300

let poleDistance = 160
let largestDiscWidth = 100
let poleThickness = 10
let poleHeight = 100
let discThickness = 10
let discWidthDifference = 18
let discDistance = 15

let startX = 50
let startY = 100

let xPos = 0
let yPos = 0

// console.log(canvas.height)

// let ctx = canvas.getContext('2d')

// ctx.fillStyle = '#ce3c3c'
// ctx.strokeStyle = '#6f0606' //'#1a1e23' //'#eaeaf4'

// ctx.fillRect(5, 5, 100, 10)
// ctx.strokeRect(5, 5, 100, 10)

var drawPoles = () => {
    for (let i = 0; i < 3; i++) {
        ctx.fillRect(startX + i * poleDistance, startY, poleThickness, poleHeight)
        ctx.strokeRect(startX + i * poleDistance, startY, poleThickness, poleHeight)       
    }
}

var drawDiscs = () => {
    let sx = startX + poleThickness / 2 - largestDiscWidth / 2
    let sy = startY + poleHeight - discThickness
    for (let i = 0; i < 5; i++) {
        ctx.fillRect(sx + i * discWidthDifference / 2, sy - discDistance * i, largestDiscWidth - discWidthDifference * i, discThickness)
        ctx.strokeRect(sx + i * discWidthDifference / 2, sy - discDistance * i, largestDiscWidth - discWidthDifference * i, discThickness)       
    }
}

var moveDisc = () => {
    let i = 30
    let sx = startX + poleThickness / 2 - largestDiscWidth / 2
    let sy = startY + poleHeight - discThickness

    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(xPos + sx + i * discWidthDifference / 2, yPos + sy - discDistance * i, largestDiscWidth - discWidthDifference * i, discThickness)
    ctx.strokeRect(xPos + sx + i * discWidthDifference / 2, yPos + sy - discDistance * i, largestDiscWidth - discWidthDifference * i, discThickness)       

    xPos += 5

    if (xPos >400) cancelAnimationFrame(moveDisc)
}


function animate() {
    moveDisc();
    requestAnimationFrame(animate); 
}

// drawPoles()
// drawDiscs()

// setInterval(() => {
//     moveDisc()
//   }, 500)

// setInterval(moveDisc, 500)

// function init() {
//     // window.addEventListener("keydown",doKeyDown,false);
//     // barImg=document.getElementById("bar");
//     canvas = document.getElementById("canvas");
//     ctx = canvas.getContext("2d");
//     timer=setInterval(moveDisc, 10);
//     return timer;
//   }

function setup() {
    poleDistance = 160
    largestDiscWidth = 100
    poleThickness = 10
    poleHeight = 100
    discThickness = 10
    discWidthDifference = 18
    discDistance = 15

    const startX = 50
    const startY = 100

    xPos = 0
    yPos = 0

    i = 0

    sx = startX + poleThickness / 2 - largestDiscWidth / 2
    sy = startY + poleHeight - discThickness
    
    createCanvas(500, 500)
    fill(220, 150, 120)
    stroke(100)
    rect(xPos + sx + i * discWidthDifference / 2, yPos + sy - discDistance * i, largestDiscWidth - discWidthDifference * i, discThickness)
}

// function draw() {
//     background(220)
//     rect(xPos + sx + i * discWidthDifference / 2, yPos + sy - discDistance * i, largestDiscWidth - discWidthDifference * i, discThickness)
//     xPos++
//     // console.log('hello')
// }

function Disc() {
    this.x = 0
    this.y = 0

}

var moveIt = (from, target) => {
    console.log(`move from ${from} to ${target}`)
}
var moveVia = (from, via, target) => {
    moveIt(from, via)
    moveIt(via, target)
}

let counter = 0
var hanoi = (n, from, helper, target) => {
    // counter++
    // console.log('layer 1 - call # ' + counter + ' n = ' + n)
    if (n == 0) return
    hanoi(n-1, from, target, helper)
    moveIt(from, target)
    // console.log('layer 2 - call # ' + counter + ' n = ' + n)
    hanoi(n-1,helper,from,target)

}
// moveIt('a', 'b')
// moveVia('a', 'c', 'b')

// hanoi(4,'a','b','c')

var solve_hanoi = (n) => {
    if (n == 0) return
    solve_hanoi(n-1)
    move_disc(n-1)
    solve_hanoi(n-1)
}
var move_disc = (n) => {
    let disc_nos = ['a', 'b', 'c']
    // console.log(n%2)
    if (n == 0) {
        console.log(`move from ${disc_nos[1]} to ${disc_nos[2]}`)
        return
    }
    if (n%2 == 0)
        console.log(`move from ${disc_nos[0]} to ${disc_nos[1]}`)
    else if (n%2 == 1)
        console.log(`move from ${disc_nos[0]} to ${disc_nos[2]}`)
    // console.log(`move from ${disc_nos[0 + n%2]} to ${disc_nos[1 + n%2]}`)
}

solve_hanoi(4)
console.log('')
console.log('other solution:')
console.log('')
hanoi(4,'a','b','c')

console.log('hey')