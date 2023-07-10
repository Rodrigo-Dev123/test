import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/styles.css';

import Login from './modules/Login'
import Contato from './modules/Contatos';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.contato');

login.init();
cadastro.init();
contato.init()