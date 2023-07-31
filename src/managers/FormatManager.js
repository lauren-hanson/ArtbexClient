export const getFormats = () => {
    return fetch("http://localhost:8000/formats").then((response) => response.json())
  }
  
  export const getFormatById = (id) => {
    return fetch(`http://localhost:8000/formats/${id}`).then((response) => response.json())
  }
  