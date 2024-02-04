const modal = document.getElementById("modal");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskStatus = form.status.value;
    const taskInfo = {
        title: form.title.value,
        description: form.description.value,
        date: form.date.value,
        status: form.status.value,


    }

    const taskCard = document.createElement("div");
    taskCard.className = "addingTask";
    taskCard.draggable = true;
    taskCard.addEventListener("dragstart", onDragStart);


    taskCard.innerHTML = `
       
           <div class="inSideTask">
               <span>Due Date : ${taskInfo.date}</span>
               <span>${taskInfo.status}</span>
           </div>
           <div class="inSideTask">
               <span>${taskInfo.title}</span>
               
             
           </div>
         `;



         const taskContainer = document.getElementById(taskStatus);
     
   taskContainer.appendChild(taskCard);

})


function toggleModal(element) {
    modal.classList.toggle("hide-modal");

    // When the Hide modal is present the innerHTML of Icon = expand_less  else : expand_more;
    element.innerHTML = modal.classList.contains("hide-modal") ? "expand_less" : "expand_more";
}




//   <div class="addingTask">
//   <div class="inSideTask">
//     <span>Due on </span>
//     <span>High</span>
//   </div>
//   <div class="inSideTask">
//     <span>App Chat</span>
//     <span>chat</span>
//   </div>