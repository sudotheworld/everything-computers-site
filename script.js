const categories = document.querySelectorAll('.category');
const descriptionBlock = document.getElementById('description-block');
const descriptionText = document.querySelector('.description-text');
const descriptionImage = document.querySelector('.description-image');

const descriptions = {
    'phones-tablets': {
        title: 'PHONES & TABLETS: $75 + COST OF PARTS',
        time: '(10 minutes - 7 days)',
        image: 'images/phone-tablet-repair.jpeg',
        description: 'Quick and reliable repairs for a wide range of phones and tablets, ensuring your device is up and running in no time.'
    },
    'microsoldering': {
        title: 'MICROSOLDERING & BOARD REPAIRS: $100 + COST OF PARTS',
        time: '(2 - 7 days)',
        image: 'images/microsoldering.jpeg',
        description: 'Expert microsoldering and board repairs for intricate electronic issues, bringing life back to your devices.'
    },
    'tune-ups': {
        title: 'TUNE-UPS/VIRUS REMOVAL/CUSTOMIZATION: STARTING AT $75 + COST OF PARTS',
        time: '(1 - 14 days)',
        image: 'images/customized-computer.jpeg',
        description: 'Enhance your device\'s performance with comprehensive tune-ups, virus removal, and personalized customization.'
    },
    'data-recovery': {
        title: 'DATA RECOVERY: $199-$699 + COST OF PARTS',
        time: '(3 - 14 days)',
        image: 'images/forensic-data-recovery.jpeg',
        description: 'Professional data recovery services to retrieve your lost data from damaged or corrupted storage devices.'
    },
    'advanced-data-recovery': {
        title: 'ADVANCED DATA RECOVERY: PRICING AS LOW AS $999.99',
        time: '(10 - 30 days)',
        image: 'images/forensic-data-recovery.jpeg',
        description: 'Specialized advanced data recovery for severely damaged devices, handled with the utmost care and precision.'
    }
};

function showDescription(categoryId) {
    const data = descriptions[categoryId];
    descriptionText.innerHTML = `<span class="title">${data.title}</span><br>${data.time}<br><span class="small-print">${data.description}</span>`;
    descriptionImage.src = data.image;
    descriptionBlock.style.display = 'block';
}

categories.forEach(category => {
    category.addEventListener('mouseenter', () => showDescription(category.id));
    category.addEventListener('click', () => showDescription(category.id));
    category.addEventListener('mouseleave', () => {
        descriptionBlock.style.display = 'none';
    });
});
