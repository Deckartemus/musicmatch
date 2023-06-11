"use strict";

import Hapi from "@hapi/hapi";
import { globSync } from "glob";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "0.0.0.0",
    debug: { request: ["error"] },
  });

  const routes = globSync("/routes/**/*.js", { root: __dirname }).map(file =>
    require(file.replace(__dirname, ".")),
  );

  await server.register([...routes]);

  await server.start();

  return server;
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init()
  .then(server => console.log("Server running on %s", server.info.uri))
  .catch(error => console.log(`Unable to start the server: ${error}`));
