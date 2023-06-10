exports.plugin = {
  name: "Healthz",
  version: "0.0.1",
  register: async (server /*, options*/) => {
    server.route({
      method: "GET",
      path: "/status",
      handler: (request, h) => h.response("Status is ok").code(200),
    });
  },
};
