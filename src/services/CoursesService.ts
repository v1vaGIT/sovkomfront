import type {AxiosResponse} from "axios";
import apiInstance from "../http";
import { CoursesListResponse } from "../models/response/CoursesListResponse.ts";

const BASE_URL = 'courses';

export class CoursesService{
    static async fetchAllCourses(): Promise<AxiosResponse<CoursesListResponse>> {
        return apiInstance.get(`${BASE_URL}/getAllCourses`)
    }
}