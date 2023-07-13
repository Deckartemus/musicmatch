import { stringify } from "qs";
import { computed, ref } from "vue";
import helpers from "@utils";
import env from "@constants/env";

const { API_URL_BACKEND } = env;
const albums = ref();
const { isNilOrEmpty } = helpers;

export async function fetchAlbums(artistId) {
  const params = stringify({
    artistId,
  });
  const url = `${API_URL_BACKEND}/albums/${params}`;

  try {
    const data = await fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.message.body.album_list;
      });

    if (data) {
      albums.value = data;
    }
  } catch (err) {
    console.log(err);
  }
}

const remappedData = data => {
  return data.map(item => {
    return {
      name: item.album.album_name,
    };
  });
};

export default artistId => {
  (async () => {
    await fetchAlbums(artistId);
  })();

  return {
    albums: computed(() => {
      if (!isNilOrEmpty(albums.value)) {
        return remappedData(albums.value);
      }
      return undefined;
    }),
  };
};
