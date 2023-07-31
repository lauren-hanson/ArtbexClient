let imagePosition = []
let observers = []

function emitChange() {
    observers.forEach(observer => observer(imagePosition))
}


export function moveImage(toX, toY) {
    imagePosition = [toX, toY]
    emitChange()
}

export function addObserver(observer) {
    observers.push(observer)
}

export function removeObserver(observer) {
    const index = observers.indexOf(observer);
    if (index !== -1) {
        observers.splice(index, 1)
    }
}