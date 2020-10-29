"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadFile_1 = require("./../utils/ReadFile");
var controller_1 = require("./../controllers/controller");
var GenericQueue_1 = require("../models/GenericQueue");
var constants_1 = require("../utils/constants");
var world = ReadFile_1.default('./../../test/nivel4.txt');
var queue = new GenericQueue_1.default();
var mode = constants_1.Algorithm.DFS;
var initialNode = {
    deep: 0,
    path: '',
    positionBoxes: world.initialPositionBoxes,
    positionPlayer: world.initialPositionPlayer
};
//queue.enqueueFront(initialNode);
queue.enqueueBack([initialNode]);
var node = queue.dequeue();
var contador = 0;
while (!controller_1.isSolved(node, world.endPositionBoxes)) {
    if (node.deep <= 64) {
        contador++;
        controller_1.expandNode(node, queue, world.map, mode);
    }
    console.log(contador);
    if (!queue.isEmpty()) {
        queue.printQueue();
        node = queue.dequeue();
    }
    else {
        console.log("No se encontró solución");
        console.log("Último nodo");
        console.log(node);
        node = null;
        break;
    }
}
if (node !== null) {
    console.log("La solución es: ");
    console.log(node);
}
/*
expandNode(initialNode, queue, world.map, Algorithm.BFS)
console.log(`Initial position player [ ${initialNode.positionPlayer[0]} , ${initialNode.positionPlayer[1]} ]`)
console.log('\n');
queue.printQueue();

*/