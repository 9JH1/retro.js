var theme_t = "lime";
var theme_l = "light";
var retro=true;
var online=true;



(()=>{
    if(online){
        online = "https://9jh1.github.io/retro.js"
    }
})();
(() => { // import theme
    if(theme_t !=false){
        const theme = document.createElement("link");
        theme.rel = "stylesheet";
        theme.href = `${online}/src/css/themes/${theme_t}.css`;
        theme.id = "retro-theme";
        document.head.append(theme)
    }
})();
(() => { // import css
    if(retro){
        const retroCss = document.createElement("link");
        retroCss.rel = "stylesheet";
        retroCss.href = `${online}/src/css/retro.css`;
        retroCss.id="retro-css";
        document.head.append(retroCss)
    }
})();
(() => { // set theme dark/light
    if (theme_l == "dark") {
        window.onload = function () {
            document.body.classList.toggle('dark');
        }
    }
})();

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


function resizeText() {
    document.querySelectorAll(".dropdown a").forEach(text => {
      const container = text.parentElement; // The .dropdown container
      let fontSize = 100; // Start large
      text.style.fontSize = `${fontSize}px`;
  
      // Decrease font size until it fits inside the container
      while (text.scrollWidth > container.clientWidth || text.scrollHeight > container.clientHeight) {
        fontSize--;
        text.style.fontSize = `${fontSize}px`;
      }
    });
  }
  
  // Run on load and window resize
  window.addEventListener("resize", resizeText);
  resizeText();
  
