# git-config

git config --global user.name 'Eвгений Толкач'
git config --global user.email 'tolkachevgeniy007@gmail.com'

git config --list # посмотреть настройки 
git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn
git config --global init.defaultBranch main

git init
git add .
git commit 'описание'
git status -
git diff -
git diff --color-words
git checkout . # вернуть к последнему коммиту
