// Initialize Lucide icons
lucide.createIcons();

// Add smooth scrolling for any future navigation
document.addEventListener('DOMContentLoaded', function() {
  // Animate message cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = '0s';
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe message cards
  const messageCards = document.querySelectorAll('.message-card');
  messageCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  // Add click effect to story cards
  const storyCards = document.querySelectorAll('.story-card');
  storyCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  // Add sparkle effect on hero section
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '1rem';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });

  // Add sparkle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sparkle {
      0% {
        opacity: 1;
        transform: scale(0) rotate(0deg);
      }
      50% {
        opacity: 1;
        transform: scale(1) rotate(180deg);
      }
      100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);

  // Love meter animation
  const meterFill = document.querySelector('.meter-fill');
  if (meterFill) {
    setTimeout(() => {
      meterFill.style.width = '100%';
    }, 1000);
  }
});

// Add some romantic interactions
document.addEventListener('click', function(e) {
  // Create heart effect on click
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.fontSize = '1.5rem';
  heart.style.zIndex = '9999';
  heart.style.animation = 'heartFloat 2s ease-out forwards';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 2000);
});

// Add heart float animation
const heartStyle = document.createElement('style');
heartStyle.textContent = `
  @keyframes heartFloat {
    0% {
      opacity: 1;
      transform: scale(0) translateY(0);
    }
    50% {
      opacity: 1;
      transform: scale(1) translateY(-30px);
    }
    100% {
      opacity: 0;
      transform: scale(0.5) translateY(-60px);
    }
  }
`;
document.head.appendChild(heartStyle);