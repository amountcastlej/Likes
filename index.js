let numLikes = [9, 12, 9] // Sets variable to keep track of increasing count

let spans = [ // gets the id of the span so we can manipulate it
    document.querySelector('#like-1'),
    document.querySelector('#like-2'),
    document.querySelector('#like-3')
]

function like(id){
    numLikes[id]++
    spans[id].innerHTML = numLikes[id] + " likes(s)";
}

