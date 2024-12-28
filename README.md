# Electron

## Create project
* create vite project.
```cmd
npm create vite .
npm install
npm run dev
```

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

## Setup electron app
```cmd
npm install --save-dev electron
```
* Sud be set project into module format for that update `package.json` file if it desent update like this.

![alt text](README-imgs/pakage.-json-set-type-to-module-format.png)





















