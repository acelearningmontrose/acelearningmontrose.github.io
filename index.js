/*Made by Zoxplers - zoxplers.com*/
Array.from(document.getElementsByTagName("pages")[0].children).forEach(page =>{
    //Navmenu items
    let button = document.createElement("navitem");
    button.innerHTML = "<span class = \"material-symbols-rounded\">" + page.getAttribute("icon") + "</span><text>" + page.getAttribute("name") + "</text>";
    document.getElementsByTagName("navmenu")[0].appendChild(button);
    button.onclick = function(){pageSelect(page)};

    //Page content
    fetch(page.tagName.toLowerCase()).then(response => {
        response.text().then(content => {
            page.innerHTML = content;
            Array.from(page.children).forEach(block=>{
                block.style.background = randomBG();
            });
        })
    });
});

function randomBG()
{
    var luminanceCap = 100;
    var R = Math.floor(Math.random() * luminanceCap);
    var G = Math.floor(Math.random() * luminanceCap);
    var B = luminanceCap * 2 - (R + G);
    return "rgb(" + R+ "," + G + "," + B + ")";
}

function pageSelect(page)
{
    Array.from(document.getElementsByTagName("pages")[0].children).forEach(element => {
        element.classList.remove("selected");
    });

    page.classList.add("selected");
}

pageSelect(document.getElementsByTagName("pages")[0].firstElementChild);
document.getElementsByTagName("Heading2")[0].innerHTML = "Tutoring and Learning";