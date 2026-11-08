@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Starting Portify on http://localhost:3000 ...
start "" http://localhost:3000
npm start
pause
