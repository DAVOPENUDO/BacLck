import mysql, {Connection} from 'mysql';

const conexion:Connection = mysql.createConnection({
    host:'autorack.proxy.rlwy.net',
    port: 13369,
    database:'railway',
    user:'root',
    password:'ZJhhRlINwpReVkPMDWbpJZJLyYGEmVtM'
});
export default conexion;
/**
 * host:'bwqn1owznctuodmrvh8z-mysql.services.clever-cloud.com',
    database:'bwqn1owznctuodmrvh8z',
    user:'u0xb7qtybkcl1wnq',
    password:'uBqMYLa4KJibQC5USpHO',
 */
/**
 * host:'db4free.net',
    database:'applista',
    user:'rootaapplist',
    password:'1f451a27',
 */
/*
host:'localhost',
database:'applista_v2',
user:'root',
password:'',

*/
//# sourceMappingURL=conect.js.map