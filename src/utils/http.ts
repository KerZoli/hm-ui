import { useAxios } from "@vueuse/integrations/useAxios"
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9002/',
    withXSRFToken: true,
    withCredentials: true,
})

export function useHttp<T>() {
     const { execute } = useAxios<T>(instance);

     return execute;
}
