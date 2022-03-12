const leftAr = document.getElementById('left');
const rightVr = document.getElementById('right');
const mid = document.getElementById('mid');
const goLeft = document.getElementById('goLeft');
const goRight = document.getElementById('goRight');
const backRight = document.getElementById('backRight');
const backLeft = document.getElementById('backLeft');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
   let y = window.scrollY;
   if (y >= 200) {
       nav.style.top = '-1%';
   } else {
       nav.style.top = '-30%';
   }
});

function leftToGo() {
    let leftInner = backLeft.innerText;

    if (leftInner === 'ar') {
        leftAr.classList.remove('d-none');
        mid.style.transform = 'translateX(150%)';
        leftAr.style.left = '0';
        backLeft.innerText = 'vr';
        backRight.innerText = 'feed';
    } else if (leftInner === 'feed') {
        rightVr.classList.add('d-none');
        mid.style.transform = 'translateX(0)';
        rightVr.style.left = '150%';
        backLeft.innerText = 'ar';
        backRight.innerText = 'vr';
    } else if (leftInner === 'vr') {
        rightVr.classList.remove('d-none');
        mid.style.transform = 'translateX(-150%)';
        leftAr.style.left = '-150%';
        rightVr.style.left = '0';
        backLeft.innerText = 'feed';
        backRight.innerText = 'ar';
        leftAr.classList.add('d-none');
    }

}

function rightToGo() {
    let rightInner = backRight.innerText;

    if (rightInner === 'vr') {
        rightVr.classList.remove('d-none');
        mid.style.transform = 'translateX(-150%)';
        rightVr.style.left = '0';
        backLeft.innerText = 'feed';
        backRight.innerText = 'ar';
    } else if (rightInner === 'feed') {
        mid.style.transform = 'translateX(0)';
        leftAr.style.left = '-150%';
        backLeft.innerText = 'ar';
        backRight.innerText = 'vr';
        leftAr.classList.add('d-none');
    } else if (rightInner === 'ar') {
        leftAr.classList.remove('d-none');
        mid.style.transform = 'translateX(150%)';
        leftAr.style.left = '0';
        rightVr.style.left = '150%';
        backLeft.innerText = 'vr';
        backRight.innerText = 'feed';
        rightVr.classList.add('d-none');
    }

}

backRight.addEventListener('click', rightToGo);
backLeft.addEventListener('click', leftToGo);

goLeft.addEventListener('click', () => {
    leftAr.classList.remove('d-none');
    mid.style.transform = 'translateX(100%)';
    leftAr.style.left = '0';
    backLeft.innerText = 'vr';
    backRight.innerText = 'feed';
});

goRight.addEventListener('click', () => {
    rightVr.classList.remove('d-none');
    mid.style.transform = 'translateX(-100%)';
    rightVr.style.left = '0';
    backLeft.innerText = 'feed';
    backRight.innerText = 'ar';
});

// const first = document.getElementById('first');
// const leftAr = document.getElementById('leftAr');
// const rightVr = document.getElementById('rightVr');
// const mid = document.getElementById('mid');
// var count = 0;

// first.addEventListener('touchstart', handleTouchStart, false);
// first.addEventListener('touchmove', handleTouchMove, false);
//
// function getTouches(e) {
//     return e.touches || e.originalEvent.touches;
// }
//
// function handleTouchStart(e) {
//     const firstTouch = getTouches(e)[0];
//     xDown = firstTouch.clientX;
//     yDown = firstTouch.clientY;
// }
//
// function handleTouchMove(e) {
//     if (!xDown || !yDown) {
//         return;
//     }
//
//     var xUp = e.touches[0].clientX;
//     var yUp = e.touches[0].clientY;
//
//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
//
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
//         if (xDiff > 0) {
//             // swipe left
//             if (count === 0) {
//                 mid.style.left = '-100%';
//                 rightVr.style.left = '0';
//                 count += 1;
//             } else if (count === -1) {
//                 leftAr.style.left = '-100%';
//                 mid.style.left = '0';
//                 count += 1;
//             }
//         } else {
//             // swipe right
//             if (count === 0) {
//                 mid.style.left = '-100%';
//                 leftAr.style.left = '0';
//                 count -= 1;
//             } else if (count === 1) {
//                 rightVr.style.left = '100%';
//                 mid.style.left = '0';
//                 count -= 1;
//             }
//         }
//     } else {
//         if ( yDiff > 0 ) {
//             // swipe up
//         } else {
//             // swipe down
//         }
//     }
//     xDown = null;
//     yDown = null;
// }