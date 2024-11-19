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
  let adjective = [
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
  let possession = [
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

  let indexNoun = Math.floor(Math.random() * noun.length);
  let indexAdjective = Math.floor(Math.random() * adjective.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexPossession = Math.floor(Math.random() * possession.length);
  let indexWhere = Math.floor(Math.random() * where.length);
  
  document.querySelector("#excuse").innerHTML =
    first +
    noun[indexNoun] +
    adjective[indexAdjective] +
    action[indexAction] +
    possession[indexPossession] +
    where[indexWhere];
};
