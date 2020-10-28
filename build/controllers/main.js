"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadFile_1 = require("./../utils/ReadFile");
var controller_1 = require("./../controllers/controller");
var GenericQueue_1 = require("../models/GenericQueue");
var constants_1 = require("../utils/constants");
var world = ReadFile_1.default('./../../test/nivel1.txt');
var queue = new GenericQueue_1.default();
var initialNode = {
    deep: 0,
    path: '',
    positionBoxes: world.initialPositionBoxes,
    positionPlayer: world.initialPositionPlayer
};
controller_1.expandNode(initialNode, queue, world.map, constants_1.Algorithm.BFS);
console.log("Initial position player [ " + initialNode.positionPlayer[0] + " , " + initialNode.positionPlayer[1] + " ]");
console.log('\n');
queue.printQueue();
