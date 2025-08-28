"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocalStorageNotesService = void 0;
var core_1 = require("@angular/core");
var LocalStorageNotesService = /** @class */ (function () {
    function LocalStorageNotesService() {
        this.storageKey = 'notes';
    }
    LocalStorageNotesService.prototype.getNotes = function () {
        var notes = localStorage.getItem(this.storageKey);
        return notes ? JSON.parse(notes) : [];
    };
    LocalStorageNotesService.prototype.addNote = function (note) {
        var notes = this.getNotes();
        var newNote = __assign({ id: notes.length > 0 ? Math.max.apply(Math, notes.map(function (n) { return n.id; })) + 1 : 1 }, note);
        notes.push(newNote);
        localStorage.setItem(this.storageKey, JSON.stringify(notes));
        return newNote;
    };
    LocalStorageNotesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocalStorageNotesService);
    return LocalStorageNotesService;
}());
exports.LocalStorageNotesService = LocalStorageNotesService;
