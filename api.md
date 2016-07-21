**Verifies Json Web Token**
----
  returns json web token verification

* **URL**

  /api/generate/verify

* **Method:**

  `POST`

* **Success Response:**

    **Code:** 202 ACCEPTED <br />
    **Content:** ` "Token Valid" `

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Bad request" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Token Invalid" }`

-----------------------------------------------

**Generates Json Web Token**
----
  returns generated json web token.

* **URL**

  /api/generate

* **Method:**

    `POST`

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:**
        `{
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQTERUIiwic3ViIjoic2FtcGxlLWp3dCIsImlhdCI6MTQ2OTA0NDA2Mn0.0UmNg0pTfQo_u8cdJz5BUNzxrXs4DaIrvJDlIR8DdYE"
        }`
