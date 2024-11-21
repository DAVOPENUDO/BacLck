"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registros_1 = require("../controllers/registros");
const router = (0, express_1.default)();
router.get('', registros_1.raiz);
router.post('/profesor', registros_1.postProfesor);
router.post('/alumno', registros_1.postAlumno);
exports.default = router;
//# sourceMappingURL=registros.routes.js.map