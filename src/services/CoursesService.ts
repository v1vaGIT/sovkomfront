import type {AxiosResponse} from "axios";
import apiInstance from "../http";
import {ICourse} from "../models/ICourse";
import {IMyCourse} from "../models/IMyCourse";

const BASE_URL = 'courses';

export class CoursesService{
    static async fetchAllCourses(): Promise<AxiosResponse<ICourse[]>> {
        return apiInstance.get(`${BASE_URL}`)
    }

    static async fetchMyCourses(): Promise<AxiosResponse<IMyCourse[]>> {
        return apiInstance.get(`${BASE_URL}/my`)
    }
}