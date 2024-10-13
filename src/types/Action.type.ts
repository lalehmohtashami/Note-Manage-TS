import { INote } from "./note.type";

export interface IAction {
    text: string;
    id: number;
    type: 'changed' | 'deleted' | 'added';
    note: INote
  }