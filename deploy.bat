@echo off
echo Deploying changes to Logos 7 Site...
git add .
git commit -m "Fix Stripe link and add Privacy Policy"
git push
echo.
echo Deployment command finished. Check above for any errors.
REM pause

