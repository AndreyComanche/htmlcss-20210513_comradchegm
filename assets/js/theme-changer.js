const changerHdr = document.getElementById('theme-changer-hdr');
const changerBrg = document.getElementById('theme-changer-brg');
const html = document.documentElement;

let currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.setAttribute('data-theme-dark', 'true');
    changerHdr.checked = true;
    changerBrg.checked = true;
}

toggleDark = function (event) {
    target = event.currentTarget;
    if (target.checked) {
        html.setAttribute('data-theme-dark', 'true');
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme-dark');
        localStorage.setItem('theme', 'light');
    }
    if (target === changerHdr) {
        if (target.checked !== changerBrg.checked) {
            changerBrg.checked = target.checked;
        }
    } else {
        if (target.checked !== changerHdr.checked) {
            changerHdr.checked = target.checked;
        }
    }
};
changerHdr.addEventListener('change', toggleDark);
changerBrg.addEventListener('change', toggleDark);
