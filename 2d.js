let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerHeight - 100
canvas.height = window.innerHeight - 100

ctx.fillstyle = 'green';
ctx.fillRect(10, 10, 100, 100)