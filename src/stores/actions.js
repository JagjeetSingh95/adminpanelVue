import Vue from 'vue';
import { ref, firebaseAuth } from '../config/firebaseConfig';

export const registerByEmail = ({commit}, {email, password}) => {
	return firebaseAuth().createUserWithEmailAndPassword(email, password);
}

export const logout = ({commit}) => {
  return firebaseAuth().signOut();
}

export function loginWithEmail ({commit}, {email, password}) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}

export function employeeList({commit}) {
	return ref.child("emp").on('value', (employee) => {
		console.log(employee.val());
		commit('UPDATE_EMPLOYEE_LIST', products.val());
	});
}
