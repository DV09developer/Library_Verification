import {createRouter , createWebHistory} from 'vue-router';
import scannform from '../components/scannform.vue';
import lendingPage from '../components/lendingPage.vue';
import signup from '../components/signup.vue';
import forgetpass from '../components/forgetpass.vue';
import DefaultLayout from '../components/DefaultLayut.vue';
import Report from '../components/Report.vue';
import home from '../components/home.vue';

const routes = [
    {
        path: "/",
        name: "LendingPage",
        component: lendingPage,
    },
    {
        path: "/signup",
        name: "signup",
        component: signup,
    },
    {
        path: "/forgetpass",
        name: "forgetpass",
        component: forgetpass,
    },
    {
        path: "/defaultlayout",
        name: "DefaultLayout",
        component: DefaultLayout,
        meta: {requireauth : true},
        children :[
            {
                path: "/defaultlayout",
                name: "Home",
                component: home,
                meta: {requireauth : true},
            },
            {
                path: "/scannform",
                name: "scannform",
                component: scannform,
                meta: {requireauth : true},
            },
            {
                path: "/Report",
                name: "Report",
                component: Report,
                meta: {requireauth : true},
            },
        ]
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;