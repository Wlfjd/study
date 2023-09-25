
// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function () {
//         console.log($('.tab-button').length)
//         $('.tab-button').removeClass('orange')
//         $('.tab-button').eq(i).addClass('orange')
//         $('.tab-content').removeClass('show')
//         $('.tab-content').eq(i).addClass('show')
//     })
// }

$('.list').click(function (e) {
    if (e.target == document.querySelectorAll('.tab-button')[0]) {
        tapOpen(0)
    }
    if (e.target == document.querySelectorAll('.tab-button')[1]) {
        tapOpen(1)
    }
    if (e.target == document.querySelectorAll('.tab-button')[2]) {
        tapOpen(2)
    }
})

function tapOpen(i) {
    $('.tab-button').removeClass('orange')
    $('.tab-button').eq(i).addClass('orange')
    $('.tab-content').removeClass('show')
    $('.tab-content').eq(i).addClass('show')
}

var car2 = { name: '소나타', price: [50000, 3000, 4000] }
$('.name').html(car2.name)
$('.price').html(car2.price[1])

let shirts = [90, 95, 100, 105];
let pants = [28, 30, 32, 34];

$('.form-select').eq(0).on('change', function () {
    if (this.value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide')
        $('.form-select').eq(1).html('')
        shirts.forEach((data) => {
            $('.form-select').eq(1).append(`<option>${data}</option>`)
        })
    } else if (this.value == '바지') {
        $('.form-select').eq(1).html('')
        pants.forEach((data) => {
            $('.form-select').eq(1).removeClass('form-hide')
            $('.form-select').eq(1).append(`<option>${data}</option>`)
        })
    } else {
        $('.form-select').eq(1).addClass('form-hide')
    }
})


// let p = document.createElement('p'); // 태그 생성
// p.innerHTML = '안녕' // html 생성
// document.querySelector('#test').appendChild(p)

let p = '<p>안녕하세요</p>'
document.querySelector('#test').insertAdjacentHTML('beforeend', p)
$('#test').append(p)

let obj = { name: 'kim', age: 30 }

for (let key in obj) [
    console.log(obj[key])
]


function Score(befores, newScore) {
    let sum = 0;
    let avg = 0;
    befores.forEach(function (data) {
        sum += data;
    })
    avg = sum / befores.length
    if (avg < newScore) {
        console.log(`평균보다 ${newScore - avg}점이 올랐네요`)
    } else {
        console.log(`평균보다 ${avg - newScore}점이 떨어졌네요`)

    }
}
Score([10, 20, 30, 40, 50], 40)