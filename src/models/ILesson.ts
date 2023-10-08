interface ILessonsContent{
    type: string,
    value: string
}

export interface ILesson{
    id: number,
    title: string,
    content: ILessonsContent[],
    order: number,
    completed: boolean,
    status: string, // enum: ('not_started, 'checking', 'done')
}