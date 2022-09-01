let object={};
function propertySetter(propertyName) {
    return function(propertyValue) {
        this[propertyName]=propertyValue;
    }
}
let setProperty=propertySetter("name");
setProperty.bind(object,"sina")();
console.log(object);