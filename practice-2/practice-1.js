function createElement(elementType,callback,backgroundColor) {
    let element=document.createElement(`${elementType}`);
    element.style.cssText="width:200px; height:200px;"
    document.body.append(element);
    callback(element,backgroundColor);
}
function setStyle(element,backgroundColor) {
    element.style.backgroundColor=`${backgroundColor}`;
}
createElement("div",setStyle,"red");