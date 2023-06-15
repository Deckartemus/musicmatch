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
        return data.message.body.artist_list;
      });
    if (data) {
      artists.value = data;
    }
  } catch (err) {
    console.log(err);
  }
}

const remappedData = artistsData => {
  console.log(artistsData);
  const mapped = artistsData.map(item => {
    return {
      name: item.artist.artist_name,
      artistId: item.artist.artist_id,
    };
  });
  console.log(mapped);
  return mapped;
};
// console.log(remappedData());
export default countryCode => {
  (async () => {
    await fetchArtists(countryCode);
  })();

  return {
    artists: computed(() => {
      if (!isNilOrEmpty(artists.value)) {
        return remappedData(artists.value);
      }
      return undefined;
    }),
  };
};
