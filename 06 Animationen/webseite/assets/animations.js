
// Credits: https://www.sitepoint.com/get-started-anime-js/
anime({
    targets: '#rod',
    rotate: [60, -60], // from 60 to -60 degrees
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});