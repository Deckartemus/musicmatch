const apiKey = process.env.API_KEY;

exports.plugin = {
  name: "Artists",
  version: "0.0.1",
  register: async (server /*, options*/) => {
    server.route({
      method: "GET",
      path: "/api/artists/countryCode={countryCode}",
      handler: (request, h) => {
        // return console.log(request.path, request.params);
        return fetch(
          `https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country=${request.params.countryCode}&apikey=${apiKey}`,
        )
          .then(response => response.json())
          .then(data => {
            return data;
          })
          .catch(err => console.log(err));
      },
    });
  },
};
