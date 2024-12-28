# Electron A-Z Setup

In this repo setup, the Electron app step by step uses React with Typescript and creates it using Vite.

If you use this to set up your Electron app or your Webapp to set up with electron, follow these steps and if you need to create it from scratch but need to use other web technologies like Angular, Vue, or Svelte, you can set it up.

## Create project
* Create Vite project.
```cmd
npm create vite .
```

* Install packages.
```cmd
npm install
```

* Run projects.
```cmd
npm run dev
```

<br><br>

## Update project structure
* Move everything in the `src` folder items into the `ui` folder that is created in the src folder.

![alt text](README-imgs/src-with-ui.png)

* Update `index.html` file.

![alt text](README-imgs/update-index-html.png)

* Remove favicons that aren't needed for the electron app ( Remove the `Public folder` and update the `App.tsx` file and `index.html` file ).

* Update the `vite.config.ts` file to rename web-app output files ( now this will change the build dir ).

![alt text](README-imgs/vite-config-build-dir-chnage.png)

* Also, update the `.gitignore` file with build dir.

![alt text](README-imgs/gitignore-with-new-web-build-dir.png)

<br><br>

## Setup electron app
```cmd
npm install --save-dev electron
```
* Should be set to project into module format for that update `package.json` file if it doesn't update like this.

![alt text](README-imgs/pakage.-json-set-type-to-module-format.png)

* Create a `main.js` file inside the `src/electron` folder.

![alt text](README-imgs/electron-folder.png)
![alt text](README-imgs/main-electron-setup.png)

* Update `package.json` file with electron setup ( `"main": "src/electron/main",` and `"dev:electron": "electron .",` ) and change web dev ( `"dev:web": "vite"` ).

![alt text](README-imgs/pakage-json-electron-setup.png)

* Add base path into `vite.config.ts` file ( because default build output use `/` to refer to `.css` and `.js` files, setting up with this, it will use base path, and without setting this electron app will not work ).

![alt text](README-imgs/set-base-path-into-vite-config.png)

Before
![alt text](README-imgs/befor-base-path-index-html.png)

After
![alt text](README-imgs/after-base-path-index-html.png)

```cmd
npm run dev:electron
```

![alt text](README-imgs/electron-app.png)

<br><br>

## Update electron app with typescript
* Update the `tsconfig.json` file or `tsconfig.app.json` like this to set up Typescript with electron.

![alt text](README-imgs/typescrip-setup-for-electron.png)

* 

















