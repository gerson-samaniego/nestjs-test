import { Get, Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TaskService {

    private tasks : Task[] = [
        {
            id: 1n,
            title: "Aprender Terraform",
            description: "Es necesario para arquitecturas agnosticas.",
            status: TaskStatus.PENDING
        }
    ];

    findTask(id: bigint) {
        return this.tasks.find((t) => (t.id == id));
    }

    createTast() {}
    updateTask() {}
    deleteTask() {}
}
