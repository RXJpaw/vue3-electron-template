### RXJpaw's Vue.js & Electron Template
A template for Vue.js and Electron to quit using [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder) since its outdated and buggy.

# How do I use the template?
1. Download the [latest release](https://github.com/RXJpaw/vue-electron-template/releases/latest)'s Source Code.
2. Open your IDE and install all the package-lock's dependencies:
```bash
npm ci
```
3. That's it. The only thing you have to know now is the file structure.

# Well... how is this template structured?
First of all... you need basic electron knowledge to get this part.  
All files in `/electron` are (obv.?) normal electron files you can change them like you always did.  
All other files are regular vue-files. f.e. `/src`, `/public`, `main.ts`.

# Now, how do build and serve?
To serve just use:
```bash
npm run serve
```
* using my serve command will hotupdate all changes you make
To build just use:
```bash
npm run build
```
* you're building all vue and electron files in `dist_vue` and `dist_electron`

# Sidenotes
* Feel free to open issues if I did something terribly wrong or it's not quite fitting your usecase.  
* Please dont open issues if you have questions about electron's and vue.js's basics.
