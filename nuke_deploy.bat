@echo off
echo STARTING FRESH DEPLOYMENT (NUCLEAR OPTION)...
echo ---------------------------------------

echo 1. Removing old Git history (fixing the large file error)...
rmdir /s /q .git

echo 2. Initializing fresh Git repository...
git init
git config user.email "admin@logos7.org"
git config user.name "Logos 7 Admin"

echo 3. Linking to GitHub...
git remote add origin https://github.com/sandoreclegane/Logos-7-Intelligence-Systems.git

echo 4. Staging files (ignoring hidden junk)...
git add .

echo 5. Committing...
git commit -m "Fresh Deploy: Site Update"

echo 6. Force Pushing...
git branch -M main
git push -f -u origin main

echo ---------------------------------------
echo.
echo SUCCESS! Your site should be live now.
echo.
pause
