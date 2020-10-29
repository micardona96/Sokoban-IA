"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericQueue = /** @class */ (function () {
    function GenericQueue() {
        this.items = [];
    }
    GenericQueue.prototype.enqueueFront = function (elements) {
        this.items = this.items.concat(elements);
    };
    GenericQueue.prototype.enqueueBack = function (elements) {
        this.items = elements.concat(this.items);
    };
    GenericQueue.prototype.dequeue = function () {
        var shiftNode = this.items.shift();
        return shiftNode;
    };
    GenericQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    GenericQueue.printNode = function (node) {
        console.log("Position player: [ " + node.positionPlayer[0] + ", " + node.positionPlayer[1] + " ]");
        console.log("Position boxes:");
        for (var _i = 0, _a = node.positionBoxes; _i < _a.length; _i++) {
            var box = _a[_i];
            console.log("[ " + box[0] + ", " + box[1] + " ]");
        }
        console.log("Deep: " + node.deep);
        console.log("Path: " + node.path);
        console.log('\n');
    };
    GenericQueue.prototype.printQueue = function () {
        console.log('Generic Queue');
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var node = _a[_i];
            GenericQueue.printNode(node);
        }
    };
    return GenericQueue;
}());
exports.default = GenericQueue;
