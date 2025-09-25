// Magazine Flip Effect JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the magazine element
    const magazine = document.querySelector('.magazine');
    
    // Initialize variables
    let isFlipped = false;
    
    // Add click event listener to the magazine
    if (magazine) {
        magazine.addEventListener('click', function() {
            flipPage();
        });
        
        // Add keyboard event listener for accessibility
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                flipPage();
            }
        });
    }
    
    // Function to flip the page
    function flipPage() {
        if (isFlipped) {
            magazine.classList.remove('flipped');
            isFlipped = false;
            console.log('Page flipped back to page 1');
        } else {
            magazine.classList.add('flipped');
            isFlipped = true;
            console.log('Page flipped to page 2');
        }
    }
    
    // Function to get current page
    function getCurrentPage() {
        return isFlipped ? 2 : 1;
    }
    
    // Initialize console message
    console.log('Magazine Flip Effect initialized successfully!');
    console.log('Click on the magazine or press Enter/Space to flip pages');
    
    // Add smooth scrolling behavior (if needed for larger magazines)
    function smoothScrollToMagazine() {
        magazine.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    
    // Export functions for potential external use
    window.MagazineFlipEffect = {
        flip: flipPage,
        getCurrentPage: getCurrentPage,
        scrollToMagazine: smoothScrollToMagazine,
        isFlipped: function() { return isFlipped; }
    };
});