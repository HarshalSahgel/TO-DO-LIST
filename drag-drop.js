const container = document.querySelectorAll(".container");

let draggingElement = null;

function onDragStart(e){
    draggingElement = e.currentTarget;
}

const onDragOver = (event) =>
{ 
    if(draggingElement.parentNode.id === event.currentTarget.id){
        //trying to drop the element in the same container

        return ; 
    }
    event.preventDefault();
}

const onDrop = (event) => { 
    event.currentTarget.appendChild(draggingElement);
    //event.target.appendChild(draggingElement) wrong
}



 for(let i = 0 ; i < container.length; i++){
    container[i].addEventListener("dragover", onDragOver);
    container[i].addEventListener("drop",onDrop);
 }

