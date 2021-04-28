/*
import { init } from './js/chistes-page';
init();
*/

import { obtenerUsuarios } from './js/http-provider';
obtenerUsuarios().then(console.log);