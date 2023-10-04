import {IViewer} from "../IViewer";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    viewer: IViewer;
}