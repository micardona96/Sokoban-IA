"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadFile_1 = require("./../utils/ReadFile");
var controller_1 = require("./../controllers/controller");
var GenericQueue_1 = require("../models/GenericQueue");
var constants_1 = require("../utils/constants");
//ESTADO INICIAL DEL MUNDO
//'./../../test/nivel_prueba.txt'
var world = ReadFile_1.default(process.argv[2]);
var initialNode = {
    deep: 0,
    path: '',
    positionBoxes: world.initialPositionBoxes,
    positionPlayer: world.initialPositionPlayer
};
BFSAlgorithm(initialNode, world);
function BFSAlgorithm(initialNode, world) {
    var queue = new GenericQueue_1.default();
    var expandedNodes = [];
    var mode = constants_1.Algorithm.BFS;
    var level = 0;
    queue.enqueueBack([initialNode]);
    var currentNode = queue.dequeue();
    // let cost = 0
    // let nivel = 0
    while (!controller_1.isSolved(currentNode, world.endPositionBoxes)) {
        // if(currentNode.deep > nivel){
        //   nivel++
        //   console.log(cost)
        // }
        if (currentNode.deep < 64) {
            controller_1.expandNode(currentNode, queue, world.map, mode, expandedNodes);
            expandedNodes.push(currentNode);
        }
        if (!queue.isEmpty()) {
            // cost++
            currentNode = queue.dequeue();
            // GenericQueue.printNode(currentNode);
        }
        else {
            console.log("No se encontró solución");
            currentNode = null;
            break;
        }
    }
    if (currentNode !== null) {
        // console.log("La solución es: ");
        console.log(currentNode.path);
    }
}
