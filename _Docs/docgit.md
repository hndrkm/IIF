git remote add origin URL
git remote
git remote -v
git pull origin master --allow-unrelated-histories
git push origin master

# Start a new feature
git checkout -b new-feature main
# Edit some files
git add <file>
git commit -m "Start a feature"
# Edit some files
git add <file>
git commit -m "Finish a feature"
# Merge in the new-feature branch
git checkout main
git merge new-feature
git branch -d new-feature
  
  
  
  install server
  cd etc/apache/sites-aviable 
  create config file.
  server
  {
    listen 80;
    server_name ip;
    root /var/www/app/build;
    index index.html
    access_log /var/log/apache/app.access.log;
    error_log /var/log/apache/app.error.log;
    location / {
      try
    }
  }
  
  
  package.json
  
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    --- "export": "npm run build && next export -o _static"
},
  
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -H 0.0.0.0 -p ${PORT:-8080}",
    . . .
 sudo ufw app list
  
  systemctl status nginx
  
    https://www.coderrocketfuel.com/article/how-to-deploy-a-next-js-website-to-a-digital-ocean-server
