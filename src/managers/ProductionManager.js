export const getProductions = () => {
    return fetch("http://localhost:8000/productions").then((response) => response.json())
  }
  
  export const getProductionById = (id) => {
    return fetch(`http://localhost:8000/productions/${id}`).then((response) => response.json())
  }
  