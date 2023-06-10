const apiKey = process.env.API_KEY;

exports.plugin = {
  name: "Artists",
  version: "0.0.1",
  register: async (server /*, options*/) => {
    server.route({
      method: "GET",
      path: "/artists",
      handler: (request, h) => {
        return fetch(
          `https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=de&apikey=${apiKey}`,
        )
          .then(response => response.json())
          .then(data => {
            console.log(data);
            return data;
          })
          .catch(err => console.log(err));
      },
    });
  },
};
