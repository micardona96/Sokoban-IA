"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericQueue = /** @class */ (function () {
    function GenericQueue() {
        this.items = [];
    }
    GenericQueue.prototype.enqueueFront = function (element) {
        this.items.push(element);
    };
    GenericQueue.prototype.enqueueBack = function (element) {
        this.items.splice(0, 0, element);
    };
    GenericQueue.prototype.dequeue = function () {
        var shiftNode = this.items.shift();
        return shiftNode;
    };
    GenericQueue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    GenericQueue.prototype.printQueue = function () {
        console.log('Generic Queue');
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var node = _a[_i];
            console.log("Position player: [ " + node.positionPlayer[0] + ", " + node.positionPlayer[1] + " ]");
            console.log("Position boxes:");
            for (var _b = 0, _c = node.positionBoxes; _b < _c.length; _b++) {
                var box = _c[_b];
                console.log("[ " + box[0] + ", " + box[1] + " ]");
            }
            console.log("Deep: " + node.deep);
            console.log("Path: " + node.path);
            console.log('\n');
        }
    };
    return GenericQueue;
}());
exports.default = GenericQueue;
