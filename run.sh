#!/bin/bash
# chmod u+x ./run.sh

if [ "$2" == "BFS" ];
then
  node ./build/controllers/BFS.js $1
elif [ "$2" == "DFS" ];
then
  node ./build/controllers/DFS.js $1
elif [ "$2" == "IDFS" ];
then
  node ./build/controllers/IterativeDeep.js $1
else
  echo "$ ./run.sh <PATH> <BFS | DFS | IDFS>"
fi


