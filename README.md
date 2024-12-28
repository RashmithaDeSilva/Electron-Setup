# Electron

## Create project
* create vite project.
```cmd
npm create vite .
npm install
npm run dev
```

<br><br>

## Update project structure
* move every thins in src folder items into ui folder that create in src folder.

![alt text](README-imgs/src-with-ui.png)

* Update `index.html` file.

![alt text](README-imgs/update-index-html.png)

* Remove fav-icon that dont need for electron app ( Remove `Public folder` and update `App.tsx` file and `index.html` file ).

* Update `vite.config.ts` file for reneme web-app output files ( now this will change build dir ).

![alt text](README-imgs/vite-config-build-dir-chnage.png)

* Also update `.gitignore` file with build dir.

![alt text](README-imgs/gitignore-with-new-web-build-dir.png)

<br><br>

## Setup electron app
```cmd
npm install --save-dev electron
```
* Sud be set project into module format for that update `package.json` file if it desent update like this.

![alt text](README-imgs/pakage.-json-set-type-to-module-format.png)

* Create `main.js` file inside `sru/electron` folder.

![alt text](README-imgs/electron-folder.png)
![alt text](README-imgs/main-electron-setup.png)

* Update `package.json` file with electron setup ( `"main": "src/electron/main",` and `"dev:electron": "electron .",` ) and change web dev ( `"dev:web": "vite"` ).

![alt text](pakage-json-electron-setup.png)

* Add base path into `vite.config.ts` file ( becose default build output use `/` to refer `.css` and `.js` files, setingup with this i will use base path and without seting this electron app will not wock ) 

![alt text](set-base-path-into-vite-config.png)

befor
![alt text](befor-base-path-index-html.png)

after
![alt text](after-base-path-index-html.png)

```cmd
npm run dev:electron
```

![alt text](electron-app.png)

<br><br>

## Update electron app with Typescript
* Update `tsconfig.json` file or `tsconfig.app.json` like this to set up Typescript with electron.

![alt text](typescrip-setup-for-electron.png)

* 

















