#!/bin/bash

clear
echo "automating output files..."

cp -R build/* ../ncov/skeleton/src/main/resources/public

echo "files copied to server location"

cd ../ncov/skeleton

#mvn clean install

echo "done."
