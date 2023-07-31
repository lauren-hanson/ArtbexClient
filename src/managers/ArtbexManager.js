export const getArtbexs = () => {
  return fetch("http://localhost:8000/artbexs").then((response) => response.json())
}

export const getArtbexById = (id) => {
  return fetch(`http://localhost:8000/artbexs/${id}`).then((response) => response.json())
}

export const addNewArtBex = (post) => {
  return fetch("http://localhost:8000/artbexs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify(post),
  })
}

export const updateArtBex = (id, artbex) => {
  return fetch(`http://localhost:8000/artbexs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artbex),
  });
};

export const deleteArtBex = (id) => {
  return fetch(`http://localhost:8000/artbexs/${id}`, {
    method: "DELETE"
  })
}
