let divFromHTML = document.querySelector("#parent");

//create an HTML tag with some content and a class attribute and put in in some 
//parent element
function insertHTMLElement(parentElement, tagType, tagContent, className){
    // return "<"+ tagType +" class='"+ className +"'>"+tagContent+"</"+ tagType +">";
    let newElement = `<${tagType} class="${className}">${tagContent}</${tagType}>`;
    parentElement.innerHTML += newElement;
}

//create a div and some content and put it in div with the id of parent
insertHTMLElement(divFromHTML, "div", "Eric Was here", "blueBorder");

//create a li and some content and put it in div with the id of parent
insertHTMLElement(divFromHTML, "li", "This is Eric in an li", "redText");

insertHTMLElement(document.querySelector("#bob"), "h1", "I AM BOB", "redText")

insertHTMLElement(document.querySelector("#bob"), "h3", "I am less aggressive bob", "blue")













// let element1 = createHTMLElement("div", "eric is awesome")
// let element2 = createHTMLElement("li", "dogs are the best")
// let element3 = createHTMLElement("span", "cats aren't as cool as kittens")

// parentElement.innerHTML = createHTMLElement("div", "eric is awesome", "redText")
// parentElement.innerHTML += createHTMLElement("li", "dogs are the best", "blueBorder")
// parentElement.innerHTML += createHTMLElement("span", "cats aren't as cool as kittens", "redText")

// console.log(element1)
// console.log(element2)
// console.log(element3)

