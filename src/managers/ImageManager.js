export const getImages = () => {
    return fetch("http://localhost:8000/images").then((response) => response.json())
  }

export const getImageByCategory = (id) => {
    return fetch(`http://localhost:8000/images?category=${id}`,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
}


