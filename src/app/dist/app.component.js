"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AppComponent = exports.NotesService = void 0;
var core_1 = require("@angular/core");
var notes_api_service_1 = require("./services/notes/notes-api.service");
var local_storage_notes_service_1 = require("./services/notes/local-storage-notes.service");
var storage_type_service_1 = require("./services/storage-type.service");
var NotesService = /** @class */ (function () {
    function NotesService() {
    }
    return NotesService;
}());
exports.NotesService = NotesService;
var AppComponent = /** @class */ (function () {
    function AppComponent(notesService, storageTypeService) {
        this.notesService = notesService;
        this.storageTypeService = storageTypeService;
        this.notes = [];
        this.newNoteTitle = '';
        this.newNoteContent = '';
        this.storageType = 'api';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.storageType = this.storageTypeService.getStorageType();
        this.loadNotes();
    };
    AppComponent.prototype.loadNotes = function () {
        var _this = this;
        var result = this.notesService.getNotes();
        if (this.storageType === 'localstorage') {
            this.notes = result;
        }
        else {
            result.subscribe(function (notes) { return (_this.notes = notes); });
        }
    };
    AppComponent.prototype.addNote = function () {
        var _this = this;
        if (!this.newNoteTitle || !this.newNoteContent)
            return;
        var noteData = {
            title: this.newNoteTitle,
            content: this.newNoteContent
        };
        var result = this.notesService.addNote(noteData);
        if (this.storageType === 'localstorage') {
            this.notes = __spreadArrays(this.notes, [result]);
        }
        else {
            result.subscribe(function (savedNote) {
                _this.notes = __spreadArrays(_this.notes, [savedNote]);
            });
        }
        this.newNoteTitle = '';
        this.newNoteContent = '';
    };
    AppComponent.prototype.switchToApi = function () {
        this.storageTypeService.setStorageType('api');
    };
    AppComponent.prototype.switchToLocalStorage = function () {
        this.storageTypeService.setStorageType('localstorage');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.less'],
            providers: [
                {
                    provide: NotesService,
                    useFactory: function (injector) {
                        var storageTypeService = injector.get(storage_type_service_1.StorageTypeService);
                        var type = storageTypeService.getStorageType();
                        return type === 'api'
                            ? injector.get(notes_api_service_1.NotesApiService)
                            : injector.get(local_storage_notes_service_1.LocalStorageNotesService);
                    },
                    deps: [core_1.Injector]
                },
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
