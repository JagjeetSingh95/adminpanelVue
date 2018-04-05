import Store from './components/Store.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import Attendance from './components/attendance/Attendance.vue';
import Employee from './components/employee/Employee.vue';
import AddEmployee from './components/employee/Addemployee.vue';
import Projects from './components/projects/Projects.vue';
import Joining from './components/joining/Joining.vue';
import Setting from './components/setting/Setting.vue';
import Leaves from './components/leaves/Leaves.vue';

export const routes = [
	{
		path: '/',
		component: Login,
		name: 'mainpage'
	},
	{
		path: '/login',
		component: Login,
		name: 'login',
		onlyGuest: true
	},
	{
		path: '/register',
		component: Register,
		name: 'register',
		onlyGuest: true
	},
	{
		path: '/dashboard',
		component: Dashboard,
		name: 'dashboard'
	},
	{
		path: '/attendance',
		component: Attendance,
		name: 'attendance'
	},
	{
		path: '/employee',
		component: Employee,
		name: 'employee',
	},
	{
		path: '/addEmployee',
		component: AddEmployee,
		name: 'addemp'
	},
	{
		path: '/projects',
		component: Projects,
		name: 'projects'
	},
	{path: '/joining', component: Joining, name: 'joining'},
	{path: '/setting', component: Setting, name: 'setting'},
	{path: '/leaves', component: Leaves, name: 'leaves'},
	{path: '*', redirect: '/' }
];
