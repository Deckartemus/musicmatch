import { stringify } from "qs";
import { computed, ref } from "vue";
import helpers from "@utils";

const artists = ref();
const { isNilOrEmpty } = helpers;

export async function fetchArtists(countryCode) {
  const url = `http://localhost:3000/api/artists`;
  const params = stringify({
    countryCode,
  });
  try {
    const data = await fetch(`${url}/${params}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.message.body.artist_list;
      });
    if (data) {
      artists.value = data;
      console.log(artists.value);
    }
  } catch (err) {
    console.log(err);
  }
}

export default countryCode => {
  (async () => {
    await fetchArtists(countryCode);
  })();

  return {
    artists: computed(() => {
      if (!isNilOrEmpty(artists.value)) {
        return {
          artists: artists.value,
        };
      }
      return undefined;
    }),
  };
};
