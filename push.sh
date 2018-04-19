#!/bin/bash
rev=$(git rev-parse --short HEAD)
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git clone https://dennisotugo:${AUTOBUILD_TOKEN}@github.com/HNGInternship/HNGFun 
git checkout prod
git checkout master/profiles/*
git checkout master/answer*
git commit -m "committed at ${rev} [ci skip]"  
git push origin prod
echo -e" Done  "
