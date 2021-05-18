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

router.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`select id, name, brandName, category, location, confectionType, ripeness, 
        ripenessEditedDate, lastCheckDate, frozen, openClose, expirationDate
        from ingredient where id = ${id}`, (error, response) => {
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
            , '${ripeness}', ${ripenessEditedDate == null ? null : `'${ripenessEditedDate}'`}, '${frozen}', '${openClose}'
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

router.put("/lastCheck", async (req, res) => {
    const { id, lastCheckDate } = req.body;
    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`UPDATE ingredient SET lastCheckDate='${lastCheckDate}' WHERE id='${id}'`, (updateError, updateResponse) => {
            if (updateError) {
                conn.close();
                return res.status(400).send(updateError);
            }

            request.query(`select lastCheckDate from ingredient where id = ${id}`, (error, response) => {
                conn.close();
                if (error) {
                    return res.status(404).send(error);
                }
                return res.send(response.recordset[0]);
            })
        })
    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, brandName, category, location, confectionType,
        ripeness, ripenessEditedDate, frozen,
        openClose, expirationDate } = req.body;
    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`UPDATE ingredient SET name='${name}', brandName=${brandName == null ? null : `'${brandName}'`}, category=${category == null ? null : `'${category}'`},
        location=${location == null ? null : `'${location}'`}, confectionType=${confectionType == null ? null : `'${confectionType}'`}, ripeness=${ripeness == null ? null : `'${ripeness}'`}, ripenessEditedDate=${ripenessEditedDate == null ? null : `'${ripenessEditedDate}'`}, 
        frozen=${frozen == null ? null : `'${frozen}'`}, openClose=${openClose == null ? null : `'${openClose}'`}, expirationDate=${expirationDate == null ? null : `'${expirationDate}'`} WHERE id='${id}'`, (error, response) => {
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


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await conn.connect();
        const request = new sql.Request(conn);

        request.query(`DELETE FROM ingredient WHERE id = ${id};`, (error, response) => {
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

module.exports = router;

