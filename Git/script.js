// Get the cityscape container element
const cityscapeContainer = document.querySelector('.cityscape');

// Create skyscraper elements
for (let i = 0; i < 20; i++) {
  const skyscraper = document.createElement('div');
  skyscraper.classList.add('skyscraper');
  skyscraper.style.left = `${Math.random() * 100}vw`;
  skyscraper.style.height = `${Math.random() * 50 + 20}vmin`;
  skyscraper.style.width = `${Math.random() * 10 + 5}vmin`;
  skyscraper.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  skyscraper.style.filter = `drop-shadow(0 0 2vmin ${skyscraper.style.backgroundColor})`;
  skyscraper.style.animationDuration = `${Math.random() * 5 + 5}s`;
  skyscraper.style.animationDelay = `${Math.random() * 10}s`;
  cityscapeContainer.appendChild(skyscraper);
}

// Animate the skyscrapers
const skyscrapers = document.querySelectorAll('.skyscraper');
skyscrapers.forEach(skyscraper => {
  skyscraper.style.animation = 'skyscraperAnimation infinite linear';
});

// Define the skyscraper animation
const keyframes = `
  @keyframes skyscraperAnimation {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(100vw);
    }
  }
`;

const style = document.createElement('style');
style.innerHTML = keyframes;
document.head.appendChild(style);