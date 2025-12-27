export type Status = "pending" | "due" | "submitted" | "read" | "changesRequested"

export interface Reviews {
    id: string;
    title: string;
    status: Status;
    dueDate: string;
}