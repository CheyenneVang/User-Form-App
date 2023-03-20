function TransformToObjects(numberArray) {
    return numberArray.map(num => {
        return {val: num}
    });
}

export default TransformToObjects;