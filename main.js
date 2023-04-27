
window.addEventListener('load',() => {
    
    var edits=[];
        const form=document.querySelector("#new-task-form");
        const input=document.querySelector("#new-task-input");
        const list_elements=document.querySelector("#tasks");
        form.addEventListener('submit',(e)=> {
            e.preventDefault(); //to stay on the same page after submitting
            const task=input.value;
            if(!task)  {alert("Please fill out the form");
            return; }
            //CREATING A TASK ELEMENT
            const task_el=document.createElement('div');
            task_el.classList.add("task");
    
            //CREATING CONTENT OF A TASK 
            const task_content=document.createElement('div');
            task_content.classList.add("content");
            
            task_el.appendChild(task_content);
           
    
            //CREATING INPUT OF THE TASK CONTENT
            const task_input=document.createElement('input');
            task_input.classList.add("text");
            task_input.type="text";
            task_input.value=task;
            task_input.setAttribute("readonly","readonly");
            task_content.appendChild(task_input);
           // list_elements.appendChild(task_el);
    
            //CREATING ACTIONS DIV
             const task_actions=document.createElement('div');
            task_actions.classList.add("actions")
    
            //CREATING EDIT IN ACTIONS
           const  task_edit=document.createElement('button');
            task_edit.classList.add("edit");
            task_edit.innerHTML="Edit";
            
    
            //CREATING DELETE IN ACTIONS
            const task_delete=document.createElement('button');
            task_delete.classList.add("delete");
            task_delete.innerHTML="Delete";
             
            //APPENDING EDIT & DELETE
            task_actions.appendChild(task_edit);
            task_actions.appendChild(task_delete);
    
            //APPENDING 
            task_el.appendChild(task_actions)
            list_elements.appendChild(task_el);
            
            input.value= "";
             //EDIT EVENT LISTENER
             
                task_edit.addEventListener('click', () => {
                    
                    if (task_edit.innerText.toLowerCase() == "edit") {
                       
                        task_input.removeAttribute("readonly");
                        task_input.focus();
                        task_edit.innerText= "Save";
                       
                       
                       
                    }
                    else {  //task_input.focus();
                            task_input.setAttribute("readonly","readonly");
                            task_edit.innerText="Edit"; }
            

                });

            
        
            //DELETE EVENT LISTENER
            task_delete.addEventListener('click', ()=> {
                list_elements.removeChild(task_el);
            });
            
        })
             
    
        });
    
    