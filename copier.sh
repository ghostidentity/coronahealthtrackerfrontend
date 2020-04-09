#!/bin/bash

clear
echo "automating output files..."

#!/bin/sh

case "$(uname -s)" in

   Darwin)
     echo 'Mac OS X'
     cp -R build/* ../coronahealthtrackerbackend/skeleton/src/main/resources/public
    cd ../coronahealthtrackerbackend/skeleton
    #mvn clean install
     ;;

   Linux)
     echo 'Linux'
     cp -R build/* ../ncov/skeleton/src/main/resources/public
     cd ../ncov/skeleton
     #mvn clean install
     ;;

   CYGWIN*|MINGW32*|MSYS*|MINGW*)
     echo 'MS Windows'
     ;;

   # Add here more strings to compare
   # See correspondence table at the bottom of this answer

   *)
     echo 'Other OS' 
     ;;
esac

echo "Done, files copied to server location"
