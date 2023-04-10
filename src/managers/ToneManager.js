export const getTones = () => {
    return fetch("http://localhost:8000/tones").then((response) => response.json())
  }
  
  export const getToneById = (id) => {
    return fetch(`http://localhost:8000/tones/${id}`).then((response) => response.json())
  }
  