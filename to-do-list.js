const clickButton = document.getElementById("enter-btn");
const input = document.getElementById("input-box");
const container = document.querySelector('.container');
const removeAll = document.querySelector('.removeAll');

//ADDING EVENT LISTENERS AND FUNCTIONS
clickButton.addEventListener('click',check);

window.addEventListener('keydown',(e)=>{
    if(e.which==13)
    {
        check();
    }
})

function check(){
    if(input.value!=="")
    {
        addTask();
    }
}

function addTask(event){
    //TO CREATE NEW DIV ELEMENT
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo-div");

    var addInput = document.createElement('input');
    addInput.type = 'text';
    addInput.disabled = true;
    addInput.value = input.value;
    addInput.classList.add('input_item');
    input.value="";

    var remove = document.createElement('button');
    remove.classList.add('trash_btn');
    remove.innerHTML='<i class="fas fa-trash"></i>';

    container.appendChild(newDiv);
    newDiv.appendChild(addInput); 
    newDiv.appendChild(remove);    

remove.addEventListener('click',removeTask);
function removeTask()
{
    newDiv.removeChild(addInput);
    newDiv.removeChild(remove);
}

removeAll.addEventListener('click',deleteAll);
function deleteAll(){
    container.removeChild(newDiv);
}
}

