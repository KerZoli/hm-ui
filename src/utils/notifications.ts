import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const notificationError = (message: string) => {
    toast(message, {
        theme: 'auto',
        type: 'error'
    });
} 