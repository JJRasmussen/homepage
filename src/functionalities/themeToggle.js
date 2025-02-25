getThemePreference = () => {
    const lightThemePrefered = window.matchMedia('(prefers-color-scheme: light');
    if (lightThemePrefered.matches){
        return 'light'
    } else {
        return 'dark'
    }
}

checkLocalStorage = () => {
    let localTheme = localStorage.getItem('theme')
    if (typeof localTheme == "string"){
        console.log("localTheme is" + localTheme);
        console.log(typeof localTheme)
        return localTheme
    } else {
        console.log("localTheme is" + localTheme);
        console.log(typeof localTheme)
        return getThemePreference()
    }
}

const themePreference = checkLocalStorage()
const themeToggleButton = document.querySelector('.themeToggle')
const toggleButtonText = themePreference === 'dark' ? 'light' : 'dark'
const root = document.documentElement;
root.className = themePreference

setTheme = () => {
    const oldTheme = root.className
    const newTheme = oldTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    //set new local storage
    localStorage.setItem('theme', newTheme)
}



document.querySelector('.themeToggle').addEventListener('click', setTheme)

