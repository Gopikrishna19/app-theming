remote=$(git config --get remote.origin.url)
branch=gh-pages

npx rimraf dist
npm run build

cd dist
echo Switching to $PWD

git init
git add .
git commit -m 'deploy'
git checkout -b $branch
git push $remote $branch --force

cd ..
echo Switching to $PWD
npx rimraf dist