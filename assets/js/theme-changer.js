const changerHdr = document.getElementById('theme-changer-hdr');
const changerBrg = document.getElementById('theme-changer-brg');
const html = document.documentElement;

toggleDark = function (event) {
    target = event.currentTarget;
    html.toggleAttribute('data-theme-dark');
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
