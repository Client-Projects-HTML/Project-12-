/**
 * SiteScaffold Main Script
 * Handles global functionality like Theme Toggle, Sticky Header, etc.
 */

document.addEventListener('alpine:init', () => {
    // Alpine Store for global state
    Alpine.store('theme', {
        mode: localStorage.getItem('theme') || 'light',
        dir: localStorage.getItem('dir') || 'ltr',

        toggle() {
            this.mode = this.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.mode);
            setTheme(this.mode);
        },

        toggleRTL() {
            this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
            localStorage.setItem('dir', this.dir);
            setDir(this.dir);
        }
    });
});

// Immediate Theme & Dir Check to avoid FOUC
function setTheme(mode) {
    if (mode === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function setDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    if (dir === 'rtl') {
        document.documentElement.classList.add('rtl');
    } else {
        document.documentElement.classList.remove('rtl');
    }
}

// Check on load
const savedTheme = localStorage.getItem('theme') || 'light';
const savedDir = localStorage.getItem('dir') || 'ltr';
setTheme(savedTheme);
setDir(savedDir);


// Sticky Navbar Logic
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('is-sticky');
            header.classList.add('shadow-md', 'bg-white/90', 'backdrop-blur-md', 'dark:bg-slate-900/90');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('is-sticky');
            header.classList.remove('shadow-md', 'bg-white/90', 'backdrop-blur-md', 'dark:bg-slate-900/90');
            header.classList.add('bg-transparent');
        }
    }
});

// Mobile Menu Toggle (Generic helper if not using Alpine for this specific part)
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}
