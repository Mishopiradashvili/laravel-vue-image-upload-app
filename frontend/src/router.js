import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "./components/DefaultLayout.vue";
import Login from "./components/pages/Login.vue";
import Signup from "./components/pages/Signup.vue";
import Home from "./components/pages/Home.vue";
import MyImages from "./components/pages/MyImages.vue";
import NotFound from "./components/pages/NotFound.vue";

import useUserStore from "./store/user";


const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            { path: "", name: "Home", component: Home },
            { path: "images", name: "MyImages", component: MyImages },
        ],
        beforeEnter: async (to, from, next) => {
            try {
                const userStore = useUserStore();

                await userStore.fetchUser();
                next();
            } catch (error) {
                console.error("Failed to fetch user", error);
                next(false);
            }
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },

    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
