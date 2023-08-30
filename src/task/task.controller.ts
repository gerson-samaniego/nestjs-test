import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService : TaskService) {}

    @Get()
    helloWorld() {
        return "Hola Mundo";
    }

    @Get(":id")
    findTask(@Param('id') id: bigint) {
        return this.taskService.findTask(id);
    }
}
