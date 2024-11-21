"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alumno {
    constructor() { }
    CrearListaHoy(db, codigo, matricula) {
        return new Promise((resolve, reject) => {
            const consulta = `INSERT INTO listaAlums VALUES (?,?,NOW())`;
            db.query(consulta, [
                codigo, matricula //, limite, duracion
            ], (err, result) => {
                if (err)
                    reject({ msj: 'Error al registrar la lista de hoy' });
                else
                    resolve({ msj: 'Se ha asociado el codigo correctamente' });
            });
        });
    }
    BuscarClase(db, codigo) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT * FROM clases AS c, lista AS l, horario AS h WHERE c.idClase=h.idClase AND h.idHorario=l.idHorario AND l.codigo=?`;
            db.query(consulta, [codigo], (err, result) => {
                if (err)
                    reject({ msj: 'Error al obtener la informacion', status: false });
                else
                    resolve(result);
            });
        });
    }
    VerificarregistroUnico(db, codigo, matricula) {
        return new Promise((resolve, reject) => {
            const consulta = 'SELECT * FROM listaAlums AS l WHERE l.codigo=? AND l.matriculaAlum=?';
            db.query(consulta, [codigo, matricula], (err, result) => {
                if (err)
                    reject({ msj: 'Error al obtener la informacion', status: false });
                else
                    resolve(result);
            });
        });
    }
    ObtenerDatosAlumno(db, matricula) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT * FROM alumnos AS a WHERE a.matriculaAlum=?`;
            db.query(consulta, [matricula], (err, result) => {
                if (err)
                    reject({ msj: 'Error al obtener la informacion del usuario', status: false });
                else
                    resolve(result);
            });
        });
    }
} //FIN CLASS
exports.default = Alumno;
//# sourceMappingURL=alumno.js.map