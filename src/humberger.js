document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (!btn || !menu) {
        console.warn('Hamburger button or menu element not found');
        return;
    }

    // Initialize aria attributes
    if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
    if (!menu.hasAttribute('aria-hidden')) menu.setAttribute('aria-hidden', 'true');

    btn.addEventListener('click', () => {
        // Toggle visibility
        const nowHidden = menu.classList.toggle('hidden');
        menu.classList.toggle('flex', !nowHidden);

        // Update ARIA attributes
        btn.setAttribute('aria-expanded', String(!nowHidden));
        menu.setAttribute('aria-hidden', String(nowHidden));
    });
});