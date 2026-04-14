var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.buttons button');

buttons.forEach((but) => {
    but.addEventListener('click', () => {
    var buttxt = but.textContent.trim();
    if (buttxt === 'C') {
        screen.textContent = '0';
    } else if (buttxt === '=') {
        try {
        screen.textContent = eval(screen.textContent);
        } catch {
        screen.textContent = 'Error';
        }
    } else {
        screen.textContent += buttxt; 
    }
    });
});
