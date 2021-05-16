const express = require("express");
const sql = require("mssql/msnodesqlv8");
const conn = require("../config/db")

const router = express.Router();

router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`select id, name, category, location, confectionType, expirationDate 
        from ingredient where userId = ${userId}`, (error, response) => {
            conn.close();
            if (error) {
                return res.status(404).send(error);
            }
            return res.send(response.recordset);
        })
    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }

})


router.post("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const { name, brandName, category, location, confectionType,
        ripeness, ripenessEditedDate, frozen,
        openClose, expirationDate } = req.body;

    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`insert into ingredient (name, brandName, category, location, confectionType, 
            ripeness, ripenessEditedDate, frozen, openClose, expirationDate, userId) 
            values('${name}', '${brandName}', '${category}', '${location}', '${confectionType}'
            , '${ripeness}', '${ripenessEditedDate}', '${frozen}', '${openClose}'
            , '${expirationDate}', '${userId}')`, (error, response) => {
            conn.close();
            if (error) {
                return res.status(400).send(error);
            }
            return res.send(response.rowsAffected)
        })


    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }
})

router.put("/:id/:userId", async (req, res) => {
    const userId = req.params.userId;
    const { name, brandName, category, location, confectionType,
        ripeness, ripenessEditedDate, frozen,
        openClose, expirationDate } = req.body;

    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`insert into ingredient (name, brandName, category, location, confectionType, 
            ripeness, ripenessEditedDate, frozen, openClose, expirationDate, userId) 
            values('${name}', '${brandName}', '${category}', '${location}', '${confectionType}'
            , '${ripeness}', '${ripenessEditedDate}', '${frozen}', '${openClose}'
            , '${expirationDate}', '${userId}')`, (error, response) => {
            conn.close();
            if (error) {
                return res.status(400).send(error);
            }
            return res.send(response.rowsAffected)
        })


    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }
})

module.exports = router;
