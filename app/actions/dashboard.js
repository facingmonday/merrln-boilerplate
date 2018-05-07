import axios from 'axios';
import * as ActionTypes from '../actionTypes/dashboard';
import { getCookie } from '@/utils/cookie';
export function fetchDashboard(id) {
  const request = axios({
    method: 'get',
    url: `/api/dashboards/`,
    headers: {
      'authorization': `Bearer ${getCookie('token')}`
    }
  });
  return {
    type: ActionTypes.FETCH_DASHBOARD,
    payload: request
  };
}

export function fetchDashboardSuccess(activeDashboard){
  return {
    type: ActionTypes.FETCH_DASHBOARD_SUCCESS,
    payload: activeDashboard
  }
}

export function fetchDashboardFailure(error){
  return {
    type: ActionTypes.FETCH_DASHBOARD_FAILURE,
    payload: error
  }
}

export function resetActiveDashboard() {
  return {
    type: ActionTypes.RESET_ACTIVE_DASHBOARD
  }
}