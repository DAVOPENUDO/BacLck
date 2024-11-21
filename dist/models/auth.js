"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor() {
    }
    validarPassword(p1, p2) {
        let validacion;
        if (p1 == p2)
            validacion = true;
        else
            validacion = false;
        return validacion;
    }
    AutenticarProfesor(con, matricula, password) {
        return new Promise((resolve, reject) => {
            con.query({
                sql: 'SELECT * FROM profesor where matricula=? ',
                values: [matricula]
            }, (err, results) => {
                if (err) {
                    reject({ 'status': 'Ha ocurrido un error' });
                }
                else {
                    if (results.length == 1) {
                        const passwordAsoc = results[0].password;
                        if (this.validarPassword(passwordAsoc, password))
                            resolve({ profesor: results[0], res: true });
                        else
                            reject({ msj: 'Contraseña incorrecta', res: false });
                    }
                    else {
                        reject({ 'msj': 'El administrador no ha sido registrado', res: false });
                    }
                }
            });
        });
    }
    AutenticarAlumno(con, matricula, password) {
        return new Promise((resolve, reject) => {
            con.query({
                sql: 'SELECT * FROM alumnos where matriculaAlum=? ',
                values: [matricula]
            }, (err, results) => {
                if (err) {
                    reject({ 'status': 'Ha ocurrido un error' });
                }
                else {
                    if (results.length == 1) {
                        const passwordAsoc = results[0].password;
                        if (this.validarPassword(passwordAsoc, password))
                            resolve({ alumno: results[0], res: true });
                        else
                            reject({ msj: 'Contraseña incorrecta', res: false });
                    }
                    else {
                        reject({ 'msj': 'El usuario no ha sido registrado', res: false });
                    }
                }
            });
        });
    }
    AlumExiste(con, matricula) {
        return new Promise((resolve, reject) => {
            con.query({
                sql: 'SELECT * FROM alumnos where matriculaAlum=? ',
                values: [matricula]
            }, (err, results) => {
                if (err) {
                    reject({ 'status': 'Ha ocurrido un error' });
                }
                else {
                    if (results.length == 1) {
                        resolve({
                            resutl: true,
                            msj: 'Usuario existe'
                        });
                    }
                    else {
                        reject({
                            result: false,
                            'msj': 'El usuario no ha sido registrado'
                        });
                    }
                }
            });
        });
    }
    ProfExiste(con, matricula) {
        return new Promise((resolve, reject) => {
            con.query({
                sql: 'SELECT * FROM profesor where matricula=? ',
                values: [matricula]
            }, (err, results) => {
                if (err) {
                    reject({ 'status': 'Ha ocurrido un error' });
                }
                else {
                    if (results.length == 1) {
                        resolve({
                            resutl: true,
                            msj: 'Administrador existe'
                        });
                    }
                    else {
                        reject({
                            result: false,
                            'msj': 'El administrador no ha sido registrado'
                        });
                    }
                }
            });
        });
    }
}
exports.default = Auth;
//# sourceMappingURL=auth.js.map