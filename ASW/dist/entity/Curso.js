"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const typeorm_1 = require("typeorm");
let Curso = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _ID_decorators;
    let _ID_initializers = [];
    let _ID_extraInitializers = [];
    let _Descripción_decorators;
    let _Descripción_initializers = [];
    let _Descripción_extraInitializers = [];
    let _Fecha_de_inicio_decorators;
    let _Fecha_de_inicio_initializers = [];
    let _Fecha_de_inicio_extraInitializers = [];
    var Curso = _classThis = class {
        constructor() {
            this.ID = __runInitializers(this, _ID_initializers, void 0);
            this.Descripción = (__runInitializers(this, _ID_extraInitializers), __runInitializers(this, _Descripción_initializers, void 0));
            this.Fecha_de_inicio = (__runInitializers(this, _Descripción_extraInitializers), __runInitializers(this, _Fecha_de_inicio_initializers, void 0));
            __runInitializers(this, _Fecha_de_inicio_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Curso");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ID_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _Descripción_decorators = [(0, typeorm_1.Column)()];
        _Fecha_de_inicio_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _ID_decorators, { kind: "field", name: "ID", static: false, private: false, access: { has: obj => "ID" in obj, get: obj => obj.ID, set: (obj, value) => { obj.ID = value; } }, metadata: _metadata }, _ID_initializers, _ID_extraInitializers);
        __esDecorate(null, null, _Descripción_decorators, { kind: "field", name: "Descripci\u00F3n", static: false, private: false, access: { has: obj => "Descripci\u00F3n" in obj, get: obj => obj.Descripción, set: (obj, value) => { obj.Descripción = value; } }, metadata: _metadata }, _Descripción_initializers, _Descripción_extraInitializers);
        __esDecorate(null, null, _Fecha_de_inicio_decorators, { kind: "field", name: "Fecha_de_inicio", static: false, private: false, access: { has: obj => "Fecha_de_inicio" in obj, get: obj => obj.Fecha_de_inicio, set: (obj, value) => { obj.Fecha_de_inicio = value; } }, metadata: _metadata }, _Fecha_de_inicio_initializers, _Fecha_de_inicio_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Curso = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Curso = _classThis;
})();
exports.Curso = Curso;
