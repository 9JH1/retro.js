# `RETRO.js`
> Light-weight theme loader with a styled 90's look.
![image](/src/img/2025-03-27_10-00-58.png)
## Quickstart
To install retro.js simply place this inside your html pages head element.
```html
<script src="https://9jh1.github.io/retro.js/retro.js" defer></script>
```
## Install Locally 
```bash
git clone https://github.com/9jh1/retro.js/
git cd retro.js
mv * ../
```
After installing locally you can edit the settings at the top of retro.js
```js
var theme_t = "lime";
var theme_l = "light";
var retro=true;
var online=true;
```
First things first, remove the `online` var or change its value to false, this changes the source from online to local.<br>the `theme_l` var can be either `light` or `dark`, theme files can be found inside `/src/css/themes` there are three built in ones `monochrome`, `blue` and `lime`.