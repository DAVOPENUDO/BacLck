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
exports.postClase = exports.getCodigoClass = exports.postPassList = exports.postHorario = exports.postListaHoy = exports.getHistorialListas = exports.getAlumsAsistidos = exports.getHorarioIdClass = exports.getHorarioHoy = exports.getClases = exports.getHorarioProfe = void 0;
const conect_1 = __importDefault(require("../db/conect"));
const profesor_1 = __importDefault(require("../models/profesor"));
const profesor = new profesor_1.default();
const getHorarioProfe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    try {
        const result = yield profesor.ObtenerHorarioProfesor(conect_1.default, matricula);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.getHorarioProfe = getHorarioProfe;
const getClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    try {
        const result = yield profesor.ObtenerClasesProfesor(conect_1.default, matricula);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.getClases = getClases;
const getHorarioHoy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula, dia } = req.params;
    try {
        const resultado = yield profesor.ObtenerHorarioHoy(conect_1.default, matricula, dia);
        res.json(resultado);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.getHorarioHoy = getHorarioHoy;
const getHorarioIdClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idClase } = req.params;
    try {
        const result = yield profesor.ObtenerHorarioClassId(conect_1.default, idClase);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.getHorarioIdClass = getHorarioIdClass;
const getAlumsAsistidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    try {
        const result = yield profesor.ObtenerAlumnosAsistidos(conect_1.default, codigo);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.getAlumsAsistidos = getAlumsAsistidos;
const getHistorialListas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { grado, grupo, clase } = req.params;
    try {
        const result = yield profesor.ObtenerHistorialLista(conect_1.default, grado, grupo, clase);
        res.json(result);
    }
    catch (ex) {
        res.status(404).json(ex);
    }
});
exports.getHistorialListas = getHistorialListas;
const postListaHoy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.body;
    const { horario } = req.params;
    try {
        const result = yield profesor.CrearListaHoy(conect_1.default, codigo, horario);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.postListaHoy = postListaHoy;
const postHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { horaInit, horaFin, salon, idDiaSemana } = req.body;
    const { idClase } = req.params;
    try {
        const result = yield profesor.CrearHorario(conect_1.default, idClase, horaInit, horaFin, salon, idDiaSemana);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.postHorario = postHorario;
const postPassList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo, matricula } = req.params;
    try {
        const alumno = yield profesor.BuscarAlumno(conect_1.default, matricula);
        const { matriculaAlum } = alumno;
        const result = yield profesor.RegistrarAlumnoListaHoy(conect_1.default, codigo, matriculaAlum);
        res.json(result);
    }
    catch (ex) {
        res.status(404).json(ex);
    }
});
exports.postPassList = postPassList;
const getCodigoClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idHorario } = req.params;
    try {
        const codigo = yield profesor.ObtenerCodigoClaseHoy(conect_1.default, idHorario);
        res.json(codigo);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.getCodigoClass = getCodigoClass;
const postClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.params;
    const { nombre, grado, grupo } = req.body;
    try {
        const result = yield profesor.CrearClase(conect_1.default, nombre, grado, grupo, matricula);
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.postClase = postClase;
//# sourceMappingURL=profesores.controller.js.map