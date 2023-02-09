const themeButton = document.getElementById("theme-button");
const body = document.body;
const lightTheme = "light-theme";
const iconTheme = "light";

// get previously selected theme from local storage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// obtain the current active theme
const getCurrentTheme = () => {
    if (body.classList.contains(lightTheme)) {
        return "light";
    } else {
        return "dark";
    }
}

const getCurrentIcon = () => {
    if (themeButton.classList.contains(iconTheme)) {
        return 'light';
    } else {
        return 'dark';
    }
}

// check if user previously selected a theme
if (selectedTheme) {
    if (selectedTheme === 'dark') {
        body.classList.remove(lightTheme);
        themeButton.classList.remove(iconTheme);
    } else {
        body.classList.add(lightTheme);
        themeButton.classList.add(iconTheme);
    }
}

themeButton.addEventListener("click", () => {
    // toggle light or dark theme
    themeButton.classList.toggle("light");
    body.classList.toggle("light-theme");

    // save theme to local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
