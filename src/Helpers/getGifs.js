export const getGifs = async (category) => {
    const url =`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=shWgqpkWqhPyVritsres8oaUQ9h1ZMWz`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((i) => {
      return {
        id: i.id,
        title: i.title,
        url: i.images?.downsized_medium.url,
      };
    });

    return gifs;

  };