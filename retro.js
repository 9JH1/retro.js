// set a theme from the
// src/css/themes directory
// if set to online then only 3
// themese will be available:
// lime, blue and monochrome.
var theme_t = "lime";

// light or dark straightforward
var theme_l = "light";

// setting this to true will make 
// enable the retro.css injection
// without it the colors and the 
// custom styles will not load, 
// this effectivly disables this
// script.
var retro=/*enable theming*/true;

// setting true means that the code will
// get fetch the styles and themes from 
// the online repo, this will not work
// offline.
var online= /*set the source*/true;



(()=>{
    if(online){
        online = "https://9jh1.github.io/retro.js"
    } else {
        online = ""
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
  
