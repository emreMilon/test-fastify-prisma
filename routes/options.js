const authController = require("../controllers/index");

const Customer = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    position: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

const get_customers = {
  schema: {
    response: {
      201: {
        type: "array",
        items: Customer,
      },
    },
  },
  handler: authController.getCustomers,
};

const add_customer = {
  schema: {
    body: Customer,
    response: {
      201: {
        item: Customer,
      },
    },
  },
  handler: authController.register,
}

const delete_customer = {
  schema: {
    response: {
      201: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: authController.deleteCustomer,
}

const update_customer = {
  schema: {
    body: Customer,
    response: {
      201: {
        item: Customer,
      },
    },
  },
  handler: authController.updateCustomer,
}




module.exports = {
    get_customers,
    add_customer,
    update_customer,
    delete_customer,
};
