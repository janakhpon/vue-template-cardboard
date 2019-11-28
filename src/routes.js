import Home from './components/appHOME/index.vue'
import About from './components/appABOUT/index.vue'
import Projects from './components/appPROJECTS/index.vue'
import Project from './components/appPROJECT/index.vue'
import Services from './components/appSERVICES/index.vue'
import Contact from './components/appCONTACT/index.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Projects', component: Projects },
    { path: '/Project', component: Project },
    { path: '/Services', component: Services },
    { path: '/Contact', component: Contact }
];

export default routes;