export const getAudiences = () => {
    return fetch("http://localhost:8000/audiences").then((response) => response.json())
  }
  
  export const getAudienceById = (id) => {
    return fetch(`http://localhost:8000/audiences/${id}`).then((response) => response.json())
  }
  