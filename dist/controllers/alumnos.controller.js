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
exports.postClase = exports.putActualizarPerfil = exports.postPasarLista = exports.getClasesHoy = exports.getHorario = void 0;
const conect_1 = __importDefault(require("../db/conect"));
const alumno_1 = __importDefault(require("../models/alumno"));
const alumno = new alumno_1.default;
const getHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getHorario = getHorario;
const getClasesHoy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getClasesHoy = getClasesHoy;
const postPasarLista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo, matricula } = req.body;
    try {
        let claseEncontrada = yield alumno.BuscarClase(conect_1.default, codigo);
        if (claseEncontrada.length > 0) {
            const nombreMateria = claseEncontrada[0].nombre;
            const { grado, grupo } = claseEncontrada[0];
            const alumnoEncontrado = yield alumno.ObtenerDatosAlumno(conect_1.default, matricula);
            if (alumnoEncontrado.length > 0) {
                let registroUnico = yield alumno.VerificarregistroUnico(conect_1.default, codigo, matricula);
                if (registroUnico.length == 0) {
                    const nomAlumn = alumnoEncontrado[0].nombre;
                    const { apellidoPa, apellidoMa } = alumnoEncontrado[0];
                    const gradoAlum = alumnoEncontrado[0].grado;
                    const grupoAlum = alumnoEncontrado[0].grupo;
                    if (gradoAlum == grado && grupoAlum == grupo) {
                        yield alumno.CrearListaHoy(conect_1.default, codigo, matricula);
                        res.json({
                            msj: `El ususario ${nomAlumn} ha registrado su asistencia en la materia ${nombreMateria}`,
                            nomAlumn: `${nomAlumn} ${apellidoPa} ${apellidoMa}`,
                            matricula,
                            fecha: new Date(),
                            status: true
                        });
                    }
                    else {
                        res.json({ msj: 'El usuario no pertenece a la clase asociada del codigo QR', status: false });
                    }
                }
                else {
                    const { hora } = registroUnico[0];
                    res.json({ msj: `El usuario ya ha sido resgistrado en esta lista anteriorente a las ${hora}`, status: false });
                }
            }
            else {
                res.json({ msj: 'no se encuentra la informacion del usuario', status: false });
            }
        }
        else {
            res.json({ msj: 'El codigo no esta asociado con ningun horario de alguna categortia', status: false });
        }
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.postPasarLista = postPasarLista;
const putActualizarPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.putActualizarPerfil = putActualizarPerfil;
const postClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.postClase = postClase;
//# sourceMappingURL=alumnos.controller.js.map