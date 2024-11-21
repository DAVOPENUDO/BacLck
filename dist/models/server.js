"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conect_1 = __importDefault(require("../db/conect"));
//Imports de Rutas 
const profes_routes_1 = __importDefault(require("../routes/profes.routes"));
const alumnos_routes_1 = __importDefault(require("../routes/alumnos.routes"));
const autenticador_routes_1 = __importDefault(require("../routes/autenticador.routes"));
const registros_routes_1 = __importDefault(require("../routes/registros.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Metodos Inicales
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }
    routes() {
        this.app.use('/auth', autenticador_routes_1.default);
        this.app.use('/registro', registros_routes_1.default);
        this.app.use('/profesores', profes_routes_1.default);
        this.app.use('/alumnos', alumnos_routes_1.default);
        console.log('Rutas Listas');
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del Body
        this.app.use(express_1.default.json());
        //Carpeta Publica
        this.app.use(express_1.default.static('public'));
        console.log('Middelwares Listos');
    }
    conectarDB() {
        try {
            conect_1.default.connect((err) => {
                if (err) {
                    console.log('Error al establecer la conexion');
                    conect_1.default.on('error', this.conectarDB);
                }
                else
                    console.log('Conectado a la base de datos');
            });
        }
        catch (ex) {
            console.log('Ha fallado el servidor');
        }
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map