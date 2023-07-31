export const getTones = () => {
  return fetch("http://localhost:8000/tones", {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
}

export const getToneById = (id) => {
  return fetch(`http://localhost:8000/tones/${id}`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
}
