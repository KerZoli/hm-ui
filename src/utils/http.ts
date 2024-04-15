import { useAxios } from "@vueuse/integrations/useAxios"
import axios from "axios";
import { notificationError } from "./notifications";

const instance = axios.create({
    baseURL: 'http://localhost:9002/',
    withXSRFToken: true,
    withCredentials: true,
})

instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    notificationError(error.response.data.message ?? 'Something went wrong. Please try again.')

    return Promise.reject(error);
  });

export function useHttp<T>() {
     const { execute } = useAxios<T>(instance);
     
     return execute;
}
