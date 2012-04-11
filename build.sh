#!/usr/bin/env bash

rm -Rf build
mkdir build

php output.php > build/index.html

stylus -c -u nib -o build keyboard-commander.styl

wget -O build/keyboard-commander.js https://raw.github.com/thomasjbradley/gamifier/master/gamifier.js

cat keyboard-commander.js >> build/keyboard-commander.js

cat levels/level-1.js levels/level-2.js levels/level-3.js levels/level-4.js levels/level-5.js levels/level-6.js levels/level-7.js levels/level-8.js levels/level-9.js levels/level-10.js >> build/keyboard-commander.js

uglifyjs --overwrite build/keyboard-commander.js

htmlcompressor --type html --remove-quotes --simple-bool-attr -o ./build/ ./build/

cp -R images build/images
