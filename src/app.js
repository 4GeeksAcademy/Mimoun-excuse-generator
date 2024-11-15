/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let first = "Un ";
  let noun = [
    "león ",
    "perro ",
    "policia ",
    "ladrón ",
    "rinoceronte ",
    "toro ",
    "pájaro "
  ];
  let adj = [
    "maloliente ",
    "amargado ",
    "verde ",
    "enfadado ",
    "angustiado ",
    "hambriento "
  ];
  let action = [
    "se llevó ",
    "se comió ",
    "se chocó contra ",
    "mordió ",
    "robó ",
    "quemó "
  ];
  let possetion = [
    "mi zapato ",
    "mi moto ",
    "mi sobrino ",
    "mi cartera ",
    "mis llaves ",
    "mi oreja ",
    "mi movil "
  ];
  let where = [
    "en la calle",
    "en mi casa",
    "en la tienda de al lado de casa",
    "en el trabajo",
    "en el centro comercial",
    "en la acera",
    "en la estacion de tren"
  ];

  let rdm1 = Math.floor(Math.random() * noun.length);
  let rdm2 = Math.floor(Math.random() * adj.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    noun[rdm1] +
    adj[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
