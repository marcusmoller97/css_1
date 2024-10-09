/**
 * @module toDo
 * @author Marcus Möller
 */
const toDo = {
    toDos: [],
    totalTasks: 0,
    /**
     * Function to add warning message when empty input.
     */
    emptyInputWarning () {

       const form = document.querySelector(".form");
       const lastElement = form.lastElementChild;
       if (lastElement.innerHTML === "Input must not be empty") {
        lastElement.remove()
       }
        const emptyTxt = document.createElement("p");
        emptyTxt.innerHTML = "Input must not be empty";
        emptyTxt.classList = "form-input"
        form.appendChild(emptyTxt)
    },
    /**
     * Function to add tasks to list.
     */
    addTasksToList (input) {
        if (!input) {
            this.emptyInputWarning();
        } else {
            const form = document.querySelector(".form");
            if (form.lastElementChild.localName === "p") {
                form.lastElementChild.remove()
            }
            // add task to list
            const li = document.createElement("li");
            li.innerHTML = input;
            const ul = document.querySelector('.myList');
            ul.appendChild(li);
            toDo.spanHandler(li, this.toDos);
            this.toDos.push(input);
        }
    },
    /**
     * Function to add info to browser window by button.
     */
    btnClick () {
        const input = document.getElementById('toDo').value;
        toDo.addTasksToList(input);

        //reset text in input window
        const textInput = document.querySelector('#toDo');
        textInput.value = '';
    },
    /**
     * Function to add initial text from input.
     */
    infoBox () {
        const info = document.querySelector(".container");
        const h1 = document.querySelector("h1");
        const p = document.createElement('p');
        p.id = 'p' + (1); 
        p.innerHTML = '0 completed';
        info.insertBefore(p, h1.nextSibling)
    },
    /**
     * Function to make event to the list elements.
     */
    listEvent () {
        const list = document.querySelector('ul');

        list.addEventListener('click', function (event) {
            if (event.target.classList.contains("check")) {
                event.target.classList.remove("check");
                // remove finsihed tasks count
                toDo.totalTasks -= 1;
                const p1 = document.querySelector("#p1");
                p1.innerHTML = `${toDo.totalTasks} completed`;

            } else {
                event.target.classList.add("check");
                //finished tasks
                toDo.totalTasks += 1
                p1.innerHTML = `${toDo.totalTasks} completed`;

            }
        });
    },
    /**
     * Function to handle span div.
     */
    spanHandler (li, toDos) {
        const span = document.createElement("span");
        span.className = 'close';
        const txt = document.createTextNode("🗑️");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.addEventListener("click", function (event) {
            const div = event.target.parentElement;
            //remove element from array
            const input = div.childNodes[0].nodeValue.trim();
            const index = toDos.indexOf(input);
            toDos.splice(index, 1);
            
            div.remove();
            event.stopPropagation(); 
        });
    }
}

export {toDo}
