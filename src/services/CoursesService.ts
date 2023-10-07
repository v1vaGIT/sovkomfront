import type {AxiosResponse} from "axios";
import apiInstance from "../http";
import { ICoursesListResponse } from "../models/response/CoursesListResponse.ts";

const BASE_URL = 'courses';

export class CoursesService{
    static async fetchAllCourses(): Promise<AxiosResponse<ICoursesListResponse>> {
        return apiInstance.get(`${BASE_URL}/getAllCourses`)
    }
}