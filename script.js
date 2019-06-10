var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var stopPropgationInput = document.getElementById('stopPropogation');

stopPropgationAt = 0;

stopPropgationInput.addEventListener('blur', (ev) => {
    if (stopPropgationInput.value > 3) {
        stopPropgationInput.value = 3
        stopPropgationAt = 3;
    } if (stopPropgationInput.value < 0) {
        stopPropgationInput.value = 0
        stopPropgationAt = 0;
    } else {
        stopPropgationAt = stopPropgationInput.value;
    }
});

div1.addEventListener('click', (ev) => {
    if (stopPropgationAt == '1') ev.stopPropagation();
    console.log('div1');
});

div2.addEventListener('click', (ev) => {
    if (stopPropgationAt == '2') ev.stopPropagation();
    console.log('div2');
});

div3.addEventListener('click', (ev) => {
    if (stopPropgationAt == '3') ev.stopPropagation();
    console.log('div3');
});

div4.addEventListener('click', (ev) => {
    console.log('div4');
})