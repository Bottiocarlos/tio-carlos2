#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
apt-get install mc
apt-get install nmap
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm install github:adiwajshing/baileys
npm audit fix --force

echo "[*] Sexy quien lea estoUwU \n"Use npm start ó node index.js\n"para ejecutar al bot :3"
echo "NeKosmic-Bot : Matt M."
