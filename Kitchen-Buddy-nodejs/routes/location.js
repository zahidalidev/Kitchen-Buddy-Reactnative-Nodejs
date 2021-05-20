const express = require("express");
const sql = require("mssql/msnodesqlv8");
const conn = require("../config/db")

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        await conn.connect();

        const request = new sql.Request(conn);
        request.query(`select name from location`, (error, responce) => {

            if (error) return res.status(404).send("Not found");

            conn.close();
            if (responce.recordset.length != 0) {
                return res.send(responce.recordset);
            } else {
                return res.status(404).send("Not found");
            }

        })
    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }

})

module.exports = router;
