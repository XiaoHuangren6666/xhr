const mysql = require('mysql');
const dbConfig = require('../config/db');

const connection = mysql.createConnection(dbConfig);

class FinanceModel {
    constructor() {
        this.tableName = 'finance_records';
    }

    addFinanceRecord(record, callback) {
        const query = `INSERT INTO ${this.tableName} (item_name, amount, source, date) VALUES (?, ?, ?, ?)`;
        connection.query(query, [record.item_name, record.amount, record.source, record.date], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    getFinanceRecordsByDate(date, callback) {
        const query = `SELECT * FROM ${this.tableName} WHERE date = ?`;
        connection.query(query, [date], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }
}

module.exports = new FinanceModel();