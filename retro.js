// set a theme from the
// src/css/themes directory
// if set to online then only 3
// themese will be available:
// lime, blue and monochrome.
var theme_t = "blue";

// light or dark straightforward
var theme_l = "light";

// setting this to true will make 
// enable the retro.css injection
// without it the colors and the 
// custom styles will not load, 
// this effectivly disables this
// script.
var retro =/*enable theming*/true;

// setting true means that the code will
// get fetch the styles and themes from 
// the online repo, this will not work
// offline.
var online = /*set the source*/false;

function retro_reload() {
    document.getElementById("retro-preload").remove()
    document.getElementById("retro-css").remove()
    document.getElementById("retro-theme").remove()
    retro_load()
}
function retro_load() {
    (() => { // handle online resources
        if (online) online = "https://9jh1.github.io/retro.js";
        else online = "";
    })();
    (() => { // preload stylesheet ( base custom styles )
        const retroPreload = document.createElement("link");
        retroPreload.rel = "stylesheet";
        retroPreload.href = `${online}/src/css/preload.css`;
        retroPreload.id = "retro-preload";
        document.head.append(retroPreload)
    })();

    (() => { // import theme
        if (theme_t != false) {
            const theme = document.createElement("link");
            theme.rel = "stylesheet";
            theme.href = `${online}/src/css/themes/${theme_t}.css`;
            theme.id = "retro-theme";
            document.head.append(theme)
        }
    })();
    (() => { // import css
        if (retro) {
            const retroCss = document.createElement("link");
            retroCss.rel = "stylesheet";
            retroCss.href = `${online}/src/css/retro.css`;
            retroCss.id = "retro-css";
            document.head.append(retroCss)
        }
    })();
    (() => { // set theme dark/light
        if (theme_l == "dark") {
            document.body.classList.add('dark');
        } else if (document.body.classList.contains("dark")){
            document.body.classList.remove("dark");
        }
    })();
    document.querySelectorAll(".retro-capitalize").forEach(element => {
        const element_string = String(element.innerText);
        let out=""
        for (let i = 0; i < element_string.length; i++) {
            const element_letter = element_string.charAt(i);
            if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(element_letter)) {
                out += `<u>${element_letter}</u>`;
            } else { 
                out += element_letter;
            }
        }
        element.innerHTML = out;
    });
}
retro_load();
