const express = require("express");
const sql = require("mssql/msnodesqlv8");
const conn = require("../config/db")

const router = express.Router();

router.get("/:userId", async (req, res) => {
    try {
        const email = req.params.userId;
        // const password = userId;

        // await conn.connect();

        // const request = new sql.Request(conn);
        // request.query(`select name from customer where email = '${email}' and password = '${password}'`, (error, userResponce) => {

        //     if (error) return res.status(404).send("Not found");

        //     if (userResponce.recordset.length != 0) {
        //         conn.close();
        //         const user = userResponce.recordset[0];
        //         const userDetails = {
        //             name: user.name,
        //         }

        //         return res.send(userDetails);
        //     } else {
        //         conn.close();
        //         return res.status(404).send("Email or Password is Incorrect");
        //     }

        // })
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
            if (error) {
                conn.close();
                return res.status(400).send(error);
            }
            conn.close();
            console.log(response);
            return res.send(response.rowsAffected)
        })


    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }
})

module.exports = router;
