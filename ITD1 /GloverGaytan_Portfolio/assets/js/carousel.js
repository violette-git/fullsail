// Get the carousel container and items
const carouselContainer = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

// Set the current slide to the first slide
let currentSlide = 0;

// Define the function to show the current slide
function showSlide() {
  // Hide all slides
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the current slide
  carouselItems[currentSlide].style.display = 'block';
}

// Define the function to move to the next slide
function nextSlide() {
  // Increment the current slide, looping back to the start if necessary
  currentSlide = (currentSlide + 1) % carouselItems.length;

  // Show the new slide
  showSlide();
}

// Define the function to move to the previous slide
function prevSlide() {
  // Decrement the current slide, looping back to the end if necessary
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;

  // Show the new slide
  showSlide();
}

// Show the first slide on page load
showSlide();

// Add event listeners to the next and previous buttons
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);



// let pop = document.getElementById('carousel')
let button = document.getElementById('left-b')
let button2 = document.getElementById('right-b')
// let pop2 = pop.querySelector('img')

let pro = document.getElementById('pro')
let pro1 = document.getElementById('pro-1')
let pro2 = document.getElementById('pro-2')
let pro3 = document.getElementById('pro-3')
let pro4 = document.getElementById('pro-4')

gsap.set(button, {
    cursor: 'pointer'
});
gsap.set(button2, {
    cursor: 'pointer'
});
gsap.set(button2, {
    cursor: 'pointer'
});



pro1.addEventListener('mouseenter', () => {
    gsap.to(pro1, {
        scale: 1.2,
        duration: 0.5
    });
}); 
pro2.addEventListener('mouseenter', () => {
    gsap.to(pro2, {
        scale: 1.2,
        duration: 0.5
    });
}); 
pro3.addEventListener('mouseenter', () => {
    gsap.to(pro3, {
        scale: 1.2,
        duration: 0.5
    });
}); 
pro4.addEventListener('mouseenter', () => {
    gsap.to(pro4, {
        scale: 1.2,
        duration: 0.5
    });
}); 
pro1.addEventListener('mouseleave', () => {
    gsap.to(pro1, {
        scale: 1.0,
        duration: 0.5
    });
}); 
pro2.addEventListener('mouseleave', () => {
    gsap.to(pro2, {
        scale: 1.0,
        duration: 0.5
    });
}); 
pro3.addEventListener('mouseleave', () => {
    gsap.to(pro3, {
        scale: 1.0,
        duration: 0.5
    });
}); 
pro4.addEventListener('mouseleave', () => {
    gsap.to(pro4, {
        scale: 1.0,
        duration: 0.5
    });
}); 
pro.addEventListener('mouseenter', () => {
    gsap.to(pro, {
        scale: 1.2,
        duration: 0.5
    });
}); 
pro.addEventListener('mouseleave', () => {
    gsap.to(pro, {
        scale: 1.0,
        duration: 0.5
    });
}); 



button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.2,
        duration: 0.5
    });
});

button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.5
    });
});

button2.addEventListener('mouseenter', () => {
    gsap.to(button2, {
        scale: 1.2,
        duration: 0.5
    });
});

button2.addEventListener('mouseleave', () => {
    gsap.to(button2, {
        scale: 1,
        duration: 0.5
    });
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});