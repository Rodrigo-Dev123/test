import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/styles.css';

import Login from './modules/Login'

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();