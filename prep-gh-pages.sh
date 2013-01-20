#!/usr/bin/env bash

# Move all the files from the build directory into the root directory

rm -Rf images

for file in build/*
do
  mv -f $file ./
done
