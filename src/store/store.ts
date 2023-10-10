import { IViewer } from "../models/IViewer";
import { makeAutoObservable } from "mobx";
import { AuthService } from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { ICourse } from "../models/ICourse.ts";
import { CoursesService } from "../services/CoursesService.ts";
import { IMyCourse } from "../models/IMyCourse";
import { ITabs } from "../models/ITabs";
import { ILesson } from "../models/ILesson.ts";

export default class Store {
  viewer = {} as IViewer;
  isAuth = true;
  isLoading = false;
  coursesList: null | ICourse[] = null;
  coursesTabs: null | ITabs[] = null;
  myCoursesList: null | IMyCourse[] = null;
  lessonsList: null | ILesson[] = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setViewer(viewer: IViewer) {
    this.viewer = viewer;
  }

  setCoursesList(courses: ICourse[]) {
    this.coursesList = courses;
  }

  setCoursesTabs(tabs: ITabs[]) {
    this.coursesTabs = tabs;
  }

  setMyCoursesList(courses: IMyCourse[]) {
    this.myCoursesList = courses;
  }

  setLessonsList(lessons: ILesson[]) {
    this.lessonsList = lessons;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
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
      const response = await axios.post<AuthResponse>(
        `${API_URL}/auth/refresh-tokens`,
        {},
        {
          withCredentials: true,
        },
      );
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

    this.setLoading(true);
    try {
      const response = await CoursesService.fetchAllCourses();
      //const response = courseslist;
      console.log(response);
      this.setCoursesList(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchCourseLessons(id: number) {

    this.setLoading(true);
    try {
      // const response = await CoursesService.fetchCourseLessons(id);
      const response = lessons;
      console.log(response);
      this.setLessonsList(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchLesson(id: number) {
    this.setLoading(true);
    try {
      const response = await CoursesService.fetchLesson(id);
      // const response = lesson;
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchCoursesTabs() {
    this.setLoading(true);
    try {
      const response = await CoursesService.fetchCoursesTabs();
      // const response = tabsList;
      console.log(response);
      this.setCoursesTabs(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchMyCourses() {
    this.setLoading(true);
    try {
      // const response = await CoursesService.fetchMyCourses();
      const response = myCourseslist;
      console.log(response);
      this.setMyCoursesList(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async signUpOnCourse(id: number) {
    console.log("записываюсь на курс");
    this.setLoading(true);
    try {
      const response = await CoursesService.signUpOnCourse(id);
      alert("Вы успешно записались на курс.");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}
