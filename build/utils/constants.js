"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOVEMENTS = exports.Algorithm = void 0;
var Algorithm;
(function (Algorithm) {
    Algorithm[Algorithm["BFS"] = 0] = "BFS";
    Algorithm[Algorithm["DFS"] = 1] = "DFS";
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
exports.MOVEMENTS = [
    { direction: 'U', isRow: true, addValue: -1 },
    { direction: 'D', isRow: true, addValue: 1 },
    { direction: 'L', isRow: false, addValue: -1 },
    { direction: 'R', isRow: false, addValue: 1 }
];
