"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticador_1 = require("../controllers/autenticador");
const router = (0, express_1.Router)();
router.get('', autenticador_1.raiz);
router.post('/profesor/:matricula', autenticador_1.authProfes);
router.post('/alumno/:matricula', autenticador_1.authAlums);
router.get('/alumno-E/:matricula', autenticador_1.exAlums);
router.get('/profesor-E/:matricula', autenticador_1.exProf);
exports.default = router;
//# sourceMappingURL=autenticador.routes.js.map