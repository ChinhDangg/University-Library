let allDisplayBooks = document.getElementsByClassName("row1");
let allDisplayBooksLoc = initializeDisplayBooksXLoc();


function initializeDisplayBooksXLoc() {
    let array = [];
    for (var j = 0; j < allDisplayBooks.length; j++) {
        array.push(0);
    }
    return array;
}

var c = 0;
setInterval(function() { 
    // for (var j = 0; j < allDisplayBooks.length; j++) {
    //     allDisplayBooksLoc[j] += 1;
    //     allDisplayBooks[j].style.right = allDisplayBooksLoc[j] + "px";
    //     if (!checkFullyInViewPort(allDisplayBooks[c])) {
    //         allDisplayBooks[c].remove();
    //         c++;
    //     }
    // } 

    c++;
    if (c == 2) {
        console.log(c);
        var parent = document.getElementById("row1_half1");
        var firstChild = parent.firstElementChild;
        var children = firstChild.childNodes;
        children.forEach(function(item) {
            var cln = item.cloneNode(true);
            const list = document.createElement("li");
            list.className = firstChild.className;
            list.appendChild(cln);
            parent.insertBefore(list, parent.firstChild);
        });
    }

    /**
    var parent = document.getElementById("list_row1");
    var firstChild = parent.firstElementChild;
    if (!checkFullyInViewPort(firstChild)) {
        var children = firstChild.childNodes;
        children.forEach(function(item) {
            var cln = item.cloneNode(true);
            const list = document.createElement("li");
            list.className = firstChild.className;
            list.appendChild(cln);
            parent.appendChild(list);
        });
        firstChild.remove();
    }
    */
}, 100);

function checkFullyInViewPort(myElement) {
    var eleBounding = myElement.getBoundingClientRect();
    var containerBounding = document.getElementById("display_books_section").getBoundingClientRect();
    const eleBox = document.querySelector("."+myElement.className);
    if (containerBounding.x >= eleBounding.x+eleBox.offsetWidth) {
        return false;
    }
    return true;
}
