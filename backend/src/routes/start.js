exports.plugin = {
  name: "Start",
  version: "0.0.1",
  register: async (server /*, options*/) => {
    server.route({
      method: "GET",
      path: "/",
      handler: (request, h) => h.response("Testing nodemon").code(200),
    });
  },
};
