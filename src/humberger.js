document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (!btn || !menu) {
        console.warn('Hamburger button or menu element not found');
        return;
    }

    // initialize aria attributes if not already set
    if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
    if (!menu.hasAttribute('aria-hidden')) menu.setAttribute('aria-hidden', 'true');

    btn.addEventListener('click', () => {
        // Toggle visibility classes. classList.toggle returns true if the class is now present.
        const nowHidden = menu.classList.toggle('hidden');
        // Ensure 'flex' is present when not hidden (use force param)
        menu.classList.toggle('flex', !nowHidden);

        // Update ARIA attributes to reflect the new state
        btn.setAttribute('aria-expanded', String(!nowHidden));
        menu.setAttribute('aria-hidden', String(nowHidden));
    });
});