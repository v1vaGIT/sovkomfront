import { IViewer } from "../models/IViewer";
import { makeAutoObservable } from "mobx";
import { AuthService } from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import {ICourse} from "../models/ICourse.ts";
import {ICoursesListResponse} from "../models/response/CoursesListResponse.ts";
import {CoursesService} from "../services/CoursesService.ts";
import {lessons} from '../../fakeData/user-lessons.js'
import {courseslist} from '../../fakeData/coursesList.js'
import {myCourseslist} from '../../fakeData/my-courses-list.js'
import {tabsList} from '../../fakeData/tab.js'
import {IMyCourse} from "../models/IMyCourse";
import {ITabs} from "../models/ITabs";

export default class Store {
  viewer = {} as IViewer;
  isAuth = true;
  isLoading = false;
  coursesList: null | ICourse[] = null
  coursesTabs: null | ITabs[] = null
  myCoursesList: null | IMyCourse[] = null
  lessonsList: any = null

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

  setCoursesList(courses: ICourse[]){
    console.log('courses', courses)
    this.coursesList = courses;
  }

  setCoursesTabs(tabs: ITabs[]){
    console.log('tabs', tabs)
    this.coursesTabs = tabs
  }

  setMyCoursesList(courses: IMyCourse[]){
    console.log('my', courses)
    this.myCoursesList = courses
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.token);
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
      const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh-tokens`, {
        withCredentials: true,
      });
      console.log('response', response);
      localStorage.setItem("token", response.data.token);
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
      this.setCoursesList(response.data)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }

  async fetchCourseLessons(id: string){
    console.log('ищу уроки курса')
    this.setLoading(true);
    try {
      // const response = await CoursesService.fetchCourseLessons(id);
      const response = lessons
      console.log(response);
      this.setCoursesList(response.data)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }

  async fetchCoursesTabs() {
    console.log('ищу табы')
    this.setLoading(true);
    try {
      // const response = await CoursesService.fetchCoursesTabs();
      const response = tabsList
      console.log(response);
      this.setCoursesTabs(response.data)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }

  async fetchMyCourses() {
    console.log('ищу мои курсы')
    this.setLoading(true);
    try {
      // const response = await CoursesService.fetchMyCourses();
      const response = myCourseslist
      console.log(response);
      this.setMyCoursesList(response.data)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }
}
