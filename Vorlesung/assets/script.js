


document.getElementById('changeable-text').addEventListener('click', function () {
    debugger;
    const element = document.getElementById('changeable-text');

    element.innerHTML = 'Test';
    element.style.color = 'blue';
})