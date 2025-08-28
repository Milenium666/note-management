"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StorageTypeService = void 0;
var core_1 = require("@angular/core");
var StorageTypeService = /** @class */ (function () {
    function StorageTypeService() {
        this.STORAGE_KEY = 'noteStorageType';
    }
    StorageTypeService.prototype.getStorageType = function () {
        return localStorage.getItem(this.STORAGE_KEY) || 'api';
    };
    StorageTypeService.prototype.setStorageType = function (type) {
        localStorage.setItem(this.STORAGE_KEY, type);
        window.location.reload();
    };
    StorageTypeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StorageTypeService);
    return StorageTypeService;
}());
exports.StorageTypeService = StorageTypeService;
