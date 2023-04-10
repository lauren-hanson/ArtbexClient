export const getCreators = () => {
    return fetch("http://localhost:8000/creators").then((response) => response.json())
  }
  
  export const getCreatorById = (id) => {
    return fetch(`http://localhost:8000/creators/${id}`).then((response) => response.json())
  }
  