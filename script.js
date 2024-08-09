const categories = document.querySelectorAll('.category');
const descriptionBlock = document.getElementById('description-block');
const descriptionText = document.querySelector('.description-text');
const descriptionImage = document.querySelector('.description-image');

const descriptions = {
    'phones-tablets': {
        text: 'Phones & Tablets: $75 + cost of parts (10 minutes - 7 days)',
        image: 'phones-tablets.jpg'
    },
    'microsoldering': {
        text: 'Microsoldering & Board Repairs: $100 + cost of parts (2 - 7 days)',
        image: 'microsoldering.jpg'
    },
    'tune-ups': {
        text: 'Tune-Ups/Virus Removal/Customization: Starting at $75 + cost of parts (1 - 14 days)',
        image: 'tune-ups.jpg'
    },
    'data-recovery': {
        text: 'Data Recovery: $199-$699 + cost of parts (3 - 14 days)',
        image: 'data-recovery.jpg'
    },
    'advanced-data-recovery': {
        text: 'Advanced Data Recovery: Pricing as low as $999.99 (10 - 30 days)',
        image: 'advanced-data-recovery.jpg'
    }
};

categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        const categoryId = category.id;
        descriptionBlock.style.display = 'block';
        descriptionText.textContent = descriptions[categoryId].text;
        descriptionImage.src = descriptions[categoryId].image;
    });

    category.addEventListener('mouseleave', () => {
        descriptionBlock.style.display = 'none';
    });
});
