let btn = document.querySelector(".src-icon");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    // let span = document.createElement("span");
    let img = document.createElement("img");
    img.src= "delete-img.png";
    // span.appendChild(img);
    li.appendChild(img);
    img.setAttribute("class", "delete");
    input.value = "";
}
);

let delBtn = document.querySelector(".delete");
ul.addEventListener("click", (event) => {
// console.log(event.target.nodeName);
// console.log(event);
if(event.target.nodeName == "IMG") {
    let parEle = event.target.parentElement;
    parEle.remove();
    console.log("delete");
} else {
    console.log("not delete");
}
})


