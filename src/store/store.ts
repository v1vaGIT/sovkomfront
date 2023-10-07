import { IViewer } from "../models/IViewer";
import { makeAutoObservable } from "mobx";
import { AuthService } from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import {ICourse} from "../models/ICourse.ts";
import {ICoursesListResponse} from "../models/response/CoursesListResponse.ts";
import {CoursesService} from "../services/CoursesService.ts";

import {courseslist} from '../../fakeData/coursesList.js'

export default class Store {
  viewer = {} as IViewer;
  isAuth = true;
  isLoading = false;
  coursesList: null | ICoursesListResponse = null

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setViewer(viewer: IViewer) {
    console.log("viewer", viewer);
    this.viewer = viewer;
  }

  setCoursesList(courses: ICoursesListResponse){
    console.log('courses', courses)
    this.coursesList = courses;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setViewer(response.data.viewer);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setViewer({} as IViewer);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setViewer(response.data.viewer);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchAllCourses() {
    console.log('ищу курсы')
    this.setLoading(true);
    try {
      // const response = await CoursesService.fetchAllCourses();
      const response = courseslist
      console.log(response);
      this.setCoursesList(response.data.courses)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }
}
