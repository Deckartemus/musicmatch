import API_URL_BACKEND from "@constants/env.js";
import { stringify } from "qs";
import { computed, ref } from "vue";
import helpers from "@utils";

const artists = ref();
const { isNilOrEmpty } = helpers;

export async function fetchArtists(countryCode) {
  const url = `${API_URL_BACKEND}/api/artists`;
  const params = stringify({
    countryCode,
  });
  const data = await fetch(`${url}/${params}`)
    .then(response => response.json())
    .then(data => {
      return data.message.body.artist_list;
    });

  if (data) {
    artists.value = data;
  }
}

export default countryCode => {
  (async () => {
    await fetchArtists(countryCode);
  })();

  return {
    eventData: computed(() => {
      if (!isNilOrEmpty(artists.value)) {
        return {};
      }
      return undefined;
    }),
  };
};
