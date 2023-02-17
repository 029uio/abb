let div = document.querySelectorAll('.m');
let big = document.querySelector('.big_image');
let ani = document.querySelector('.ani')
let btn = document.querySelector('#btn')
let dow = document.querySelector('#dow')
let xc = document.querySelector('#xc')
var index = 0;
xc.onclick = function () {
    big.style.display = 'none'
    index = 0
}

for (let i = 0; i < div.length; i++) {
    div[i].onclick = function () {
        big.style.display = 'block'
        ani.lastElementChild.src = div[i].lastElementChild.src;
        dow.href = div[i].lastElementChild.src;

    }
}

big.onclick = function () {
    if (index < 3) {
        ab();
    } else if (index >= 3 && index < 6) {
        ac();
    } else if (index >= 6) {
        index = 0;
        ab();
    }
}
function ab() {
    index++;
    big.style.width = big.clientWidth + 150 + 'px';
}
function ac() {
    index++;
    big.style.width = big.clientWidth - 150 + 'px';
    // index=3;
}