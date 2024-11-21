"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exProf = exports.exAlums = exports.authAlums = exports.authProfes = exports.raiz = void 0;
const conect_1 = __importDefault(require("../db/conect"));
const auth_1 = __importDefault(require("../models/auth"));
const auth = new auth_1.default();
const raiz = (req, res) => {
    res.json({ msj: 'Ruta para autenticar usuarios de la app' });
};
exports.raiz = raiz;
const authProfes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    const { password } = req.body;
    try {
        const resutl = yield auth.AutenticarProfesor(conect_1.default, matricula, password);
        res.json(resutl);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.authProfes = authProfes;
const authAlums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    const { password } = req.body;
    try {
        const result = yield auth.AutenticarAlumno(conect_1.default, matricula, password);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.authAlums = authAlums;
const exAlums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    try {
        const result = yield auth.AlumExiste(conect_1.default, matricula);
        res.json(result);
    }
    catch (ex) {
        res.status(404).json(ex);
    }
});
exports.exAlums = exAlums;
const exProf = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    try {
        const result = yield auth.ProfExiste(conect_1.default, matricula);
        res.json(result);
    }
    catch (ex) {
        res.status(404).json(ex);
    }
});
exports.exProf = exProf;
//# sourceMappingURL=autenticador.js.map