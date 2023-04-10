export const getArtbexs = () => {
    return fetch("http://localhost:8000/artbexs").then((response) => response.json())
  }
  
  export const getArtbexById = (id) => {
    return fetch(`http://localhost:8000/artbexs/${id}`).then((response) => response.json())
  }
  