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

Run electron app
```cmd
npm run dev:electron
```
![alt text](README-imgs/electron-app.png)

<br><br>

## Update electron app with typescript
* Update the `tsconfig.json` file or `tsconfig.app.json` like this to set up Typescript with electron.

    ![alt text](README-imgs/typescrip-setup-for-electron.png)

* Create a new `tsconfig.json` file for the electron ( create it inside the `src/electron` folder ). 

    ![alt text](README-imgs/tsconfig-json-for-electron.png)

* Update `package.json` for setup electron with typescript ( adding `transpile:electron` part and resetting `main` in `package.json` ).

    ![alt text](README-imgs/reupdate-pakage-json-for-setup-electron-with-typescript.png)

* Update `.gitignore` with electron output `dis-electron`.

    ![alt text](README-imgs/update-gitignore-with-electron-outputs.png)

<br><br>

## Setup electron builder
* Install electron builder.
    ```cmd
    npm install --save-dev electron-builder
    ```

* Create and setup `electron-builder.json` configs also it should create in the project root ( `\` ) and add the desktop icon `.png` ( `desktop Icon.png` ) to avoid windows build errors.

    ![alt text](README-imgs/electron-builder-and-destop-icon-setup-in-root.png)
    ![alt text](README-imgs/electron-builder-json-setup.png)

* Update `package.json` to build an electron desktop app for a specific OS and update `"main": "dist-electron/main.js"` this `main` value with `main.js.
* Also, you must run the build command in administrator mode and make sure you are targeting the system you are using right now. 

    ![alt text](README-imgs/electon-destop-app-builder-configs-setup-for-packege-json.png)

* Run specific commands that work for your OS.

    Windows
    ```cmd
    npm run dist:win
    ```

    Mac OS
    ```cmd
    npm run dist:mac
    ```

    Linux
    ```cmd
    npm run dist:linux
    ```

<br><br>

## Setup dev env
* Setup vite HMR ( Hot Module Reloading ) for development and pre-build application in production.

    ```cmd
    npm install --save-dev cross-env
    ```

* Update the `package.json` file with `"dev:electron"` command.

    ![alt text](README-imgs/dev-electron-update-with-cross-env.png)

* Add this function to create a new file called `util.ts` inside the `src/electron` folder.

    ![alt text](README-imgs/util-function-for-check-env.png)

* Set up the HMR ( Hot Module Reloading ) server updating the `vite.config.ts` file and setting the `.env` file for configer `DEV_PORT`.

    ```cmd
    npm install --save-dev dotenv
    ```

    ![alt text](README-imgs/env-with-dev-port.png)

    ![alt text](README-imgs/setup-HRM-server.png)

* Update the `main.ts` file in the `src/electron` folder to setup and run dev mode and production using `.env` to get `DEV_PORT`.

    ![alt text](README-imgs/electron-main-ts-update-with-dev-and-prod-modes.png)

* Install `npm-run-all` to run the electron app and web app same time in dev mode.

    ```cmd
    npm install --save-dev npm-run-all
    ```

* Update the `package.json` file to set up `npm-run-all` by changing `dev:electron` and adding `dev`.

    ![alt text](README-imgs/update-package-json-with-adding-npm-run-all.png)

    ```cmd
    npm run dev
    ```

    ![alt text](README-imgs/dev-mode-run-both-app-using-npm-run-all.png)


