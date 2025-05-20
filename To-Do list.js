function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    taskText.classList.add('task-text');
    taskText.setAttribute('contenteditable', 'false');
    taskText.style.fontSize = '22px';
    taskText.style.outline = '0.2px solid #000';
    taskText.style.padding = '5px 5px';

    taskText.addEventListener('click', function () {
        taskText.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.style.background = 'transparent';

    const editIcon = document.createElement('img');
    editIcon.src = 'file:///Users/recruitly/Downloads/edit-text.png';
    editIcon.alt = 'Edit Icon';
    editIcon.classList.add('icon-img');
    editIcon.style.width = '24px';
    editIcon.style.height = '24px';
    editIcon.style.backgroundColor = 'none';
    editIcon.style.padding = '1px 2px';
    editIcon.style.objectFit = 'contain';

    editButton.appendChild(editIcon);

    editButton.addEventListener('click', function () {
        if (taskText.isContentEditable) {
            taskText.setAttribute('contenteditable', 'false');
            editIcon.src = 'file:///Users/recruitly/Downloads/edit-text.png';
        } else {
            taskText.setAttribute('contenteditable', 'true');
            taskText.focus();
            editIcon.src = 'file:///Users/recruitly/Downloads/diskette.png';
            editIcon.style.background = 'transparent';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.style.background = 'transparent';

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'file:///Users/recruitly/Downloads/bin.png';
    deleteIcon.alt = 'Delete Icon';
    deleteIcon.style.width = '20px';
    deleteIcon.style.height = '20px';
    deleteIcon.style.objectFit = 'contain';

    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener('click', function () {
        taskContainer.remove();
    });

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.style.background = 'transparent';
    
    const completeIcon = document.createElement('img');
    completeIcon.src = 'file:///Users/recruitly/Downloads/checked.png';
    completeIcon.alt = 'Complete Icon';
    completeIcon.style.width = '20px';
    completeIcon.style.height = '20px';
    completeIcon.style.objectFit = 'contain';
    
    completeButton.appendChild(completeIcon);
    
    completeButton.addEventListener('click', function () {
        taskText.classList.toggle('completed');
        
        if (taskText.classList.contains('completed')) {
            taskText.style.backgroundColor = 'green';
            taskText.style.color = 'white';
        }else{
            taskText.style.background ='transparent';
            taskText.style.color ='#000';

        }
    });
    
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);
    taskContainer.appendChild(completeButton);

    document.querySelector('.todo-list').appendChild(taskContainer);

    taskInput.value = '';
}
