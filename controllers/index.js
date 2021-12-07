const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const authController = {
  register: async (req, reply) => {
    const existingUser = await prisma.customer.findUnique({
      where: { email: req.body.email },
    });

    if (existingUser)
      return reply
        .send({ message: "This user is already registered" });

    const { id, firstName, lastName, lastname, positon, email, password } =
      req.body;

    try {
      const customer = await prisma.customer.create({
        data: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          positon: positon,
          email: email,
          password: password,
        },
      });

      reply.send({
        status: "OK",
        msg: "Successfully registered",
        data: customer,
      });
    } catch (error) {
      reply.send(error.message);
    }
  },

  getCustomers: async (req, reply) => {
    try {
      const customers = await prisma.customer.findMany();

       reply.send({
        status: 200,
        message: "All customers have been found",
         data: customers,
       })
      //reply.send(customers);

    } catch (error) {
    
      reply.send(error.message);
    }
  },
  updateCustomer: async (req, reply) => {
    //const {  firstName, lastName, positon, email, password } = reply?.body;
    const id = req.body.id
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const positon = req.body.positon
    const email = req.body.email
    const password = req.body.password

    try {
      const updatedCustomer = await prisma.customer.update({
        where: { id: req.params.id},
        data: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          positon: positon,
          email: email,
          password: password,
        },
      });
      reply.send({
        status: "OK",
        msg: "Updated Successfully",
        data: updatedCustomer,
      });
    } catch (error) {
      reply.send({message:error.message});
    }
  },
  deleteCustomer: async (req, reply) => {
    try {
      const customer = await prisma.customer.delete({
        where: { id: req.params.id },
      });
      reply.send({
        status: '200',
        message: `${customer?.firstName} ${customer?.lastName} deleted successfully!`,
      });
    } catch (error) {
        reply.send({message:error.message});
    }
  },
};


module.exports = authController