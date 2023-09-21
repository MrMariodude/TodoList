/*Define Section start*/
/* Icons Start*/
let iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>`;
let iconCross = `<svg class = "cross-mark" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>`
let iconMoon = `<svg  class ="Mode-Change" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`
let iconSun = `<svg   class ="Mode-Change" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>`
/* Icons End*/

/* main start */
let inputTask = document.querySelector(".input");
let tasks  = document.querySelector(".tasks");
/* main end */






/*Define Section end*/
/* Function Section start*/
function addNewElement(inputTask_text) {
    //define section
    let createdDiv = document.createElement("div");
    let button = document.createElement("button");
    let text = document.createElement("span");
    //define section
    button.innerHTML = iconCheck;
    //set attribute
    createdDiv.setAttribute('class', 'created-task');
    button.setAttribute('class', 'task-button');
    text.setAttribute('class', 'task-text');
    //set attribute
    //text content
    text.textContent = inputTask_text;
    //text content
    //append child element to parent
    createdDiv.appendChild(button);
    createdDiv.appendChild(text);
    createdDiv.innerHTML = createdDiv.innerHTML + iconCross;
    tasks.prepend(createdDiv);
    let deleteMark = document.querySelector(".cross-mark");

    deleteMark.addEventListener("click",()=>{
        deleteMark.parentElement.remove();
    });

    let checkMark = document.querySelector(".task-button");
    checkMark.addEventListener("click", ()=>{ 
        console.log(checkMark.nextElementSibling.classList.contains("text-decorate"));
        checkMark.nextElementSibling.classList.toggle("text-decorate");
        checkMark.classList.toggle("task-button-color");
    });    

}



















/* Function Section end*/

/* Events Section start */
inputTask.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
            addNewElement(inputTask.value);
            inputTask.value = null;
    }
    else if(event.key === "Enter"){
        //! handle the width
        console.log("Error");
    }
    }
    );
/* Events Section end */

