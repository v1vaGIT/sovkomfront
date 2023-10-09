import type {AxiosResponse} from "axios";
import apiInstance from "../http";
import {ICourse} from "../models/ICourse";
import {IMyCourse} from "../models/IMyCourse";
import {ITabs} from "../models/ITabs";
import {ILesson} from "../models/ILesson";

const BASE_URL = 'courses';

export class CoursesService{
    static async fetchAllCourses(): Promise<AxiosResponse<ICourse[]>> {
        return apiInstance.get(`${BASE_URL}`)
    }

    static async fetchCoursesTabs(): Promise<AxiosResponse<ITabs[]>>{
        return apiInstance.get(`${BASE_URL}/tabs`)
    }

    static async fetchCourseLessons(id: string): Promise<AxiosResponse<ILesson[]>>{
        return apiInstance.get(`${BASE_URL}/course/${id}`)
    }

    static async fetchMyCourses(): Promise<AxiosResponse<IMyCourse[]>> {
        return apiInstance.get(`${BASE_URL}/my`)
    }

    static async signUpOnCourse(id: number): Promise<AxiosResponse> {
        return apiInstance.post(`${BASE_URL}/sign-up`, {courseId: id})
    }

}