/**
 * Main code
 * @author Marcus Möller 
*/
import { toDo } from "./object.js";

toDo.infoBox();
const btn = document.querySelector(".btn");
toDo.listEvent();
btn.addEventListener("click", toDo.btnClick);
