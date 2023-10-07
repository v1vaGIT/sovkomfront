export interface ICourseCard {
    id: number,
    title: string,
    type: string,
    placesLeft?: number,
    startAt?: Date,
    endAt?: Date,
    description?: string,
    lessonsTotal?: number,
}