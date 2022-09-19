/** @format */

//tao package.json
//truy cap toi thu muc cd duong dan(giong linux)
//go lenh npm init
//Tao file npm install webpack webpack-cli --save-dev
//trong webpackage.config.js
/*
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
trong muc pagekage.json them  "build": "webpack" vao script

trong terminal chay lenh npm run build
 trong webpack.config.js them lenh mode: "development",
 sau khi copy tiep tuc chay lenh npm run build
 cai thu vien lodash
 npm install --save-dev style-loader css-loader cai loading css
 dung lenh import {./(thu muc chua)} de import css
 copy cau truc:
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
de khoi chay css
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActivesScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSy5GuuLdn095I1O6_B2rXobgZBW8Wb1M",
  authDomain: "chatpage-3770f.firebaseapp.com",
  projectId: "chatpage-3770f",
  storageBucket: "chatpage-3770f.appspot.com",
  messagingSenderId: "887831309029",
  appId: "1:887831309029:web:58330769f6ec38a066c20c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

setActivesScreen("loginPage");
