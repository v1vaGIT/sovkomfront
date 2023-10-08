export interface IMyCourse{
    id: number,
    title: string,
    type: string, // enum ('finite', 'infinite')
    startAt?: Date, // ISOString
    endAt?: Date, // ISOString
    description?: string,
    lessonsTotal?: number,
    completedLessons?: number,
    isActive: boolean,
}