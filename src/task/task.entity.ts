export enum TaskStatus {
    PENDING = "PENDIENTE",
    IN_PROGRESS = "EN PROGRESO",
    DONE = "DONDE"
}

export class Task {
    id: bigint;
    title: String;
    description: String;
    status: TaskStatus;
}