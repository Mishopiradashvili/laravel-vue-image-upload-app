import { defineStore } from "pinia";
import axiosClient from "../axios";
import {data} from "autoprefixer";

const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),
    actions: {



        async fetchUser() {
            try {
                const { data } = await axiosClient.get("/api/user");
                this.user = data;
            } catch (error) {
                throw error;
            }
        },
    },
});

export default useUserStore;
