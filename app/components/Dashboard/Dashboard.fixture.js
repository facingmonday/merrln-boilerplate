import Dashboard from './Dashboard';

export default {
    name: "Dashboard",
    component: Dashboard,
    props: {
        loading: false,
        error: false,
        dashboard: {},
        fetchDashboard: function(){
            console.log('fetchDashboard');
        }
    }
}