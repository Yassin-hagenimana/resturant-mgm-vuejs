import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/register'
import Login from '@/components/login'
import Profile from '@/components/profile'
import Contact from '@/components/contact'
import School from '@/components/school'
import Student from '@/components/students'
import Body from '@/components/body'
import Home from '@/components/home'
import Header from '@/components/header'
import Users from '@/components/users'
import Updates from '@/components/update'
import Images from '@/components/images'
import Footer from '@/components/footer'
import Todos from '@/components/todos'
import AddTodo from '@/components/addTodo'
import Filter from '@/components/filterTodos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/add',
      name: 'Add',
      component: AddTodo
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/body',
      name: 'Body',
      component: Body
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Users',
      name: 'User',
      component: Users
    },
    {
      path: '/Update',
      name: 'Update',
      component: Updates
    },

    {
      path: '/Images',
      name: 'Image',
      component: Images
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
