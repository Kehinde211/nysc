export type TaskStatus = "pending" | "due" | "urgent" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  dueDate: string;
}
