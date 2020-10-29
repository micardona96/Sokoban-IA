#!/bin/bash
# chmod u+x ./run.sh

if [ "$1" == "BFS" ];
then
  node ./build/controllers/BFS.js $2
elif [ "$1" == "DFS" ];
then
  node ./build/controllers/DFS.js $2
elif [ "$1" == "IDFS" ];
then
  node ./build/controllers/IterativeDeep.js $2
else
  echo "$ ./run.sh <BFS | DFS | IDFS> <PATH>"
fi


