"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesores_controller_1 = require("../controllers/profesores.controller");
const router = (0, express_1.Router)();
//Rutas de clases 
router.get('/clases/:matricula', profesores_controller_1.getClases);
router.post('/clase/:matricula', profesores_controller_1.postClase);
//Rutas de horario
router.get('/horario/:matricula', profesores_controller_1.getHorarioProfe);
router.get('/horario/:matricula/:dia', profesores_controller_1.getHorarioHoy);
router.get('/horario-id/:idClase', profesores_controller_1.getHorarioIdClass);
router.post('/horario-c/:idClase', profesores_controller_1.postHorario);
//Rutas de listas
router.post('/lista/:horario', profesores_controller_1.postListaHoy);
router.get('/lista/:grado/:grupo/:clase', profesores_controller_1.getHistorialListas);
router.get('/lista/alums/:codigo', profesores_controller_1.getAlumsAsistidos);
router.post('/lista/passList/:codigo/:matricula', profesores_controller_1.postPassList);
router.get('/lista/passList-c/:idHorario', profesores_controller_1.getCodigoClass);
exports.default = router;
//# sourceMappingURL=profes.routes.js.map