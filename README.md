# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview

```

## 작업 폴더 생성 및 이동

```bash
C:\Users\SAINTI\Desktop\SAINTI Hompage

=> cd C:\Users\SAINTI\Desktop\SAINTI Hompage
```

## nuxt3 시작(Doc : https://nuxt.com/docs/getting-started/installation)

```bash
npx nuxi@latest init SAINTI
설치 방법 설정(npm, yarn 등)
=> 이후 해당 폴더로 이동
cd SAINTI
=> 종속 모듈 설치
npm install
=> nuxt3 실행 확인
npm run dev
```

## git 연동(github Doc 확인)

```bash
echo "# SAINTI" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sodole/SAINTI.git
git push -u origin main
```

### 이후 git 연동

```bash
git remote add origin https://github.com/Sodole/SAINTI.git
git branch -M main
git push -u origin main
```

### 일반적인 git push 방법

```bash
git add --all
git commit -m "commit 내용"
git push
```

## eslint, prettier 설정(블로그 : https://univdev.page/posts/eslint-prettier-installation/)

### eslint 설정

```bash
VScode extention => eslint 설치
npm i -g eslint
eslint --init => npm init @eslint/config 추가됨
=> To check syntax, find problems, and enforce code style
=> CommonJS(express middleware 때문)
=> Vue.js
=> typeScirpt => No
=> runtime 설정 => ALL(Browser, Node)
=> Use a popular style guide => Airbnb: https://github.com/airbnb/javascript
=> JavaScript
=> Would you like to install them now?(조속모듈 설치) => Yes
=> npm, yarn 원하는 방식
=> Installing eslint-plugin-vue@latest, eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2(설치됨)
=> package.json 설치 확인
=> nuxt3 eslint 설치 => npm install -D @nuxtjs/eslint-module
```

### prettier 설정(블로그 : https://velog.io/@2wndrhs/%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4-%EC%93%B8%EB%8D%B0%EC%9E%88%EB%8A%94-ESLint-Prettier-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95)

```bash
VScode extention => pritter 설치
npm i -D prettier eslint-config-prettier(설치)
* eslint-config-prettier : eslint에서 prettier와 충돌할 수 있는 rule을 꺼버림
   (코드 오류를 잡는데는 eslint, 코드 포맷팅에는 prettier를 사용하는 방법이다.)
=> package.json 설치 확인
=> ESlint & prettier 충돌방지 설정
=> .eslintrc.cjs => extends => "prettier" 추가
=> 오른쪽 아래 prettier에서 실행되고 있는지 파악 가능
```

### eslint 및 prettier 적용 불가 시

```bash
해당 데이터 추가
  "eslint.validate": ["vue", "javascript", "javascriptreact"],
  "eslint.workingDirectories": [
    // 보통 이렇게 디렉토리 설정을 안해서 자동고침이 안된다
    {
      "mode": "auto"
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // eslint
  },
  // formatter
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true
```

## tailwindCSS 추가(Doc : https://tailwindcss.com/docs/guides/nuxtjs#standard)

```bash
Install Tailwind CSS with Nuxt(참조) : Standard installation
VScode extention => Tailwind CSS IntelliSense 설치
npm install -D tailwindcss postcss autoprefixer
=> tailwind.config.js 생성됨
=> nuxt.config.ts파일 defineNuxtConfig안에  postcss: {    plugins: {      tailwindcss: {},      autoprefixer: {},    },  }, 추가
=> tailwind.config.js => content 속에 적용할 루트 추가
=>   content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue",],
=> tailwind CSS 파일 적용 => assets 폴더 생성 및 tailwind 사용 표시
=> ./assets/css/main.css 해당 파일 생성 => @tailwind base; @tailwind components; @tailwind utilities; 명시
=> nuxt.config.js 파일에   css: ['~/assets/css/main.css'] css 사용유무 추가
```

## pinia Setting

```bash
npm install pinia @pinia/nuxt
package.json => "overrides": {  "vue": "latest" } 추가
 * overrides하면 패키지 설치 안되니 설치시 지우기 바랍니다
nuxt.config.ts =>   modules: [   '@pinia/nuxt',  ], 추가
=>   pinia: { autoImports: ['defineStore',  ['defineStore', 'definePiniaStore'], ], }, 추가
```
