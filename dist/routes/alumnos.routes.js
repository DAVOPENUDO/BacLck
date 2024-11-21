"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnos_controller_1 = require("../controllers/alumnos.controller");
const router = (0, express_1.Router)();
//Rutas de clases 
router.get('/clases/:matricula');
router.post('/lista', alumnos_controller_1.postPasarLista);
exports.default = router;
//# sourceMappingURL=alumnos.routes.js.map