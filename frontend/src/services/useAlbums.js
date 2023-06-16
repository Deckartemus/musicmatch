import { stringify } from "qs";
import { computed, ref } from "vue";
import helpers from "@utils";

const albums = ref();
const { isNilOrEmpty } = helpers;

export async function fetchAlbums(artistId) {
  const url = `http://localhost:3000/api/albums`;
  const params = stringify({
    artistId,
  });
  try {
    const data = await fetch(`${url}/${params}`)
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
