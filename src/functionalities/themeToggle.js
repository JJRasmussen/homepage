setTheme = () => {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    document.querySelector('.themeToggle').textContent = newTheme
}

document.querySelector('.themeToggle').addEventListener('click', setTheme)

