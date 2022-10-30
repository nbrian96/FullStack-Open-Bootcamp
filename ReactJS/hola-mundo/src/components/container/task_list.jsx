import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponents from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task("Mi primera tarea", "Default description", false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log("TODO: Cambiar estado de una tarea.")
    }

    return (
        <div>
            <div>
                <h1>
                    Your Task:
                </h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponents task={defaultTask}></TaskComponents>
        </div>
    )
}

export default TaskListComponent;