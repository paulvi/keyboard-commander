#!/usr/bin/env bash

rm -Rf build
mkdir build

php index.php > build/index.html

stylus -c -u nib -o build keyboard-commander.styl

cat gamifier/gamifier.js >> build/keyboard-commander.js
cat keyboard-commander.js >> build/keyboard-commander.js

for file in levels/*.js
do
  cat $file >> build/keyboard-commander.js
done

uglifyjs --overwrite build/keyboard-commander.js

htmlcompressor --type html --remove-quotes --simple-bool-attr -o ./build/ ./build/

cp -R images build/images
cp humans.txt build/humans.txt
cp robots.txt build/robots.txt

cp manifest.appcache build/manifest.appcache

for img in images/*.*
do
  echo $img >> build/manifest.appcache
done
