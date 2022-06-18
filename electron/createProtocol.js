"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = __importStar(require("path"));
var fs_1 = require("fs");
var url_1 = require("url");
exports["default"] = (function (scheme, customProtocol) {
    (customProtocol || electron_1.protocol).registerBufferProtocol(scheme, function (request, respond) {
        var pathName = decodeURI(new url_1.URL(request.url).pathname);
        var asarPath = path.resolve(__dirname, '..');
        (0, fs_1.readFile)(path.join(asarPath, pathName), function (_, data) {
            var extension = path.extname(pathName).toLowerCase();
            var mimeType = '';
            if (extension === '.js') {
                mimeType = 'text/javascript';
            }
            else if (extension === '.html') {
                mimeType = 'text/html';
            }
            else if (extension === '.css') {
                mimeType = 'text/css';
            }
            else if (extension === '.svg' || extension === '.svgz') {
                mimeType = 'image/svg+xml';
            }
            else if (extension === '.json') {
                mimeType = 'application/json';
            }
            else if (extension === '.wasm') {
                mimeType = 'application/wasm';
            }
            respond({ mimeType: mimeType, data: data });
        });
    });
    return scheme;
});
