exports.plugin = {
  name: "Start",
  version: "0.0.1",
  register: async (server /*, options*/) => {
    server.route({
      method: "GET",
      path: "/api",
      handler: (request, h) => h.response("Working now").code(200),
    });
  },
};
