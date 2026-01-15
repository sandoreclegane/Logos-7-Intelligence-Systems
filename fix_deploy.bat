@echo off
echo REPAIRING LOGOS 7 DEPLOYMENT SYSTEM...
echo ---------------------------------------

echo 1. Initializing Git repository...
git init
git config user.email "admin@logos7.org"
git config user.name "Logos 7 Admin"

echo 2. Setting up remote connection...
git remote remove origin 2>NUL
git remote add origin https://github.com/sandoreclegane/Logos-7-Intelligence-Systems.git

echo 3. Cleaning and Staging files...
git rm -r --cached .
git add .

echo 4. Committing changes...
git commit -m "Emergency fix: Repair deployment and Stripe link"

echo 5. Pushing to live site...
git branch -M main
git push -f -u origin main

echo ---------------------------------------
echo.
echo REPAIR COMPLETE.
echo If you see a green "Success" message above, the site is updating.
echo.
REM pause
