const express = require("express");
const sql = require("mssql/msnodesqlv8");
const conn = require("../config/db")

const router = express.Router();

router.get("/:email/:password", async (req, res) => {
    try {
        const email = req.params.email.trim().toLowerCase();
        const password = req.params.password;

        await conn.connect();

        const request = new sql.Request(conn);
        request.query(`select name, id from customer where email = '${email}' and password = '${password}'`, (error, userResponce) => {

            if (error) return res.status(404).send("Not found");

            if (userResponce.recordset.length != 0) {
                conn.close();
                const user = userResponce.recordset[0];
                const userDetails = {
                    name: user.name,
                    id: user.id
                }

                return res.send(userDetails);
            } else {
                conn.close();
                return res.status(404).send("Email or Password is Incorrect");
            }

        })
    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }

})


router.post("/", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email.trim().toLowerCase();
    const password = req.body.password;
    try {
        await conn.connect();

        const request = new sql.Request(conn);

        request.query(`select email from customer where email = '${email}'`, (verificationError, verificationResponce) => {
            if (verificationError) {
                conn.close();
                return res.status(400).send(verificationError);
            };

            if (verificationResponce.recordset.length != 0) {
                conn.close();
                return res.status(400).send("Email already registered");
            } else {
                request.query(`insert into customer(name, email, password) 
                values('${name}', '${email}', '${password}')`, (error, userResponce) => {
                    if (error) {
                        conn.close();
                        return res.status(400).send(error);
                    }

                    conn.close();
                    return res.send(userResponce.rowsAffected)
                })
            }

        })

    } catch (error) {
        conn.close();
        return res.status(500).send(error);
    }
})

module.exports = router;
