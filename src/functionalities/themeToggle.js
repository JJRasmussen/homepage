getThemePreference = () => {
    const lightThemePrefered = window.matchMedia('(prefers-color-scheme: light');
    if (lightThemePrefered.matches){
        return 'light'
    } else {
        return 'dark'
    }
}

const themePreference = getThemePreference()
const themeToggleButton = document.querySelector('.themeToggle')
const toggleButtonText = themePreference === 'dark' ? 'light' : 'dark'
const root = document.documentElement;
root.className = themePreference

setTheme = () => {
    const oldTheme = root.className
    const newTheme = oldTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

document.querySelector('.themeToggle').addEventListener('click', setTheme)

