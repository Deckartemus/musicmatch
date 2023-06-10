import Boom from "@hapi/boom";

export const failAction = async (request, h, err) => {
  if (err) {
    console.error("ValidationError:", err);

    throw Boom.badRequest(`ValidationError: ${err.message}`);
  }
};
