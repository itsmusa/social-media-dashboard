console.log("Dashboard Script Loaded");

// THEME TOGGLE
const storageKey = "theme",
themeBtn = document.querySelector("#theme-toggle"),
doc = document.firstElementChild;

const getThemePreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    }
    else {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light': 'dark';
    }
}

let themePreference = getThemePreference();

const setTheme = () => {
    localStorage.setItem(storageKey, themePreference);
    doc.setAttribute('color-scheme', themePreference);
    themeBtn.classList.add(themePreference);
}

setTheme();

// Toggling
themeBtn.addEventListener("click", () => {
    if (themeBtn.classList.contains('dark')) {
        themePreference = "light";
        themeBtn.classList.remove("dark");
        setTheme();
    }
    else {
        themePreference = "dark";
        themeBtn.classList.remove("light");
        setTheme();
    }
})
