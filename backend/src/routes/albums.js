const apiKey = process.env.API_KEY;

exports.plugin = {
  name: "Albums",
  version: "0.0.1",
  register: async (server /*, options*/) => {
    server.route({
      method: "GET",
      path: "/api/albums/artistId={artistId}",
      handler: (request, h) => {
        return fetch(
          `https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${request.params.artistId}&s_release_date=desc&g_album_name=1&apikey=${apiKey}`,
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
