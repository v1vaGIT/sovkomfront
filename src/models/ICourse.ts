export interface ICourse {
    id: number,
    title: string,
    type: string,
    placesLeft: number,
    startAt?: Date,
    endAt?: Date,
    tabId: number,
    description: string,
}