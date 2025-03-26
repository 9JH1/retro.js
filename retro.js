const theme_t = "lime";
const theme_l = "light";

(() => { // import theme
    const theme = document.createElement("link");
    theme.rel = "stylesheet";
    theme.href = `/src/css/themes/${theme_t}.css`;
    document.head.append(theme)
})();
(() => { // import css
    const retroCss = document.createElement("link");
    retroCss.rel = "stylesheet";
    retroCss.href = "src/css/retro.css";
    document.head.append(retroCss)
})();
(() => { // set theme dark/light
    if (theme_l == "dark") {
        window.onload = function () {
            document.body.classList.toggle('dark');
        }
    }
})()

function getTotalPageSize() {
    let totalSize = 0;

    // Get all loaded resources
    performance.getEntriesByType("resource").forEach(resource => {
        if (resource.transferSize) {
            totalSize += resource.transferSize; // Transfer size in bytes
        }
    });

    return (totalSize / 1024).toFixed(2);
}
const size = getTotalPageSize();
