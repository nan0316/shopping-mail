import Vue from "vue"
import VueRouter from "vue-router"
import Detail from "../views/detail/Detail";

const Home = ()=>import("../views/home/Home")
const Category = ()=>import("../views/category/Category")
const Profile= ()=>import("../views/profile/Profile")
const ShoppingCart = ()=>import("../views/shoppingCart/ShoppingCart")


Vue.use(VueRouter)

const routes =[
    {
        path:"/",
        redirect:'/home',
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/category",
        component:Category
    },
    {
        path:"/profile",
        component:Profile
    },
    {
        path:"/cart",
        component:ShoppingCart
    },
    {
        path:"/detail",
        component:()=>import("../views/detail/Detail")
    }
]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router