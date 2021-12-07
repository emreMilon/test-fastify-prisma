const authController = require("../controllers/index")
const {get_customers, add_customer, update_customer, delete_customer} = require('./options')



function customerRoutes(fastify, options, done) {
    fastify.post("/register", add_customer )
    fastify.get("/customers", get_customers )
    fastify.put("/update/:id", update_customer )
    fastify.delete("/delete/:id", delete_customer )

    done();
}



module.exports = customerRoutes
