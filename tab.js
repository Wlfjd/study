
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


$('.form-select').eq(0).on('change', function () {
    if (this.value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide')
    } else {
        $('.form-select').eq(1).addClass('form-hide')
    }
})

let p = document.createElement('p'); // 태그 생성
p.innerHTML = '안녕' // html 생성
document.querySelector('#test').append(p)