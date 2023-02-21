





let spoiler = document.getElementById('spoiler');
let img = spoiler.querySelector('img');

let hand = document.getElementById('hand');
let img3 = hand.querySelector('img');
console.log(img3)
console.log(hand)

let blackScreen = document.querySelector('.black-screen');
let centeredImage = document.querySelector('.centered-image');
let img2 = centeredImage.querySelector('img');

gsap.set(img, {
    opacity: 0.4,
    cursor: 'pointer'
});

gsap.set(img3, {
    cursor: 'pointer'
});

spoiler.addEventListener('mouseenter', () => {
    gsap.to(img, {
        scale: 1.2,
        duration: 0.5
    });
});

spoiler.addEventListener('mouseleave', () => {
    gsap.to(img, {
        scale: 1,
        duration: 0.5
    });
});

hand.addEventListener('mouseenter', () => {
    gsap.to(img3, {
        scale: 1.2,
        duration: 0.5
    });
});

hand.addEventListener('mouseleave', () => {
    gsap.to(img3, {
      scale: 1,
      duration: 0.5
    });
});

spoiler.addEventListener('click', () => {
    gsap.to(img, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            img.src = 'assets/img/fave.webp';
            gsap.to(img, {
                opacity: 1,
                duration: 0.5
            });
        }
    });
});





gsap.set(blackScreen, {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
});

gsap.set(centeredImage, {
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2
});


const tl = gsap.timeline();

tl.to(blackScreen, {
});

tl.to(centeredImage, {
    opacity: 1,
    duration: 1,
});


tl.to(centeredImage, {
    opacity: 0,
    duration: 3,
    delay: 2,
    onComplete: () => {
        centeredImage.style.display = 'none'; // Hide the image
    }
});

tl.to(blackScreen, {
    opacity: 0,
    duration: 2,
});


