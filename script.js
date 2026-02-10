// ----- MARCADOR -----
let golesLocal = 0;
let golesVisitante = 0;
let partidoIniciado = false;

const txtLocal = document.getElementById("golesLocal");
const txtVisitante = document.getElementById("golesVisitante");
const mensaje = document.getElementById("mensaje");

document.getElementById("btnLocal").onclick = () => { golesLocal++; partidoIniciado=true; actualizar(); };
document.getElementById("btnVisitante").onclick = () => { golesVisitante++; partidoIniciado=true; actualizar(); };
document.getElementById("btnReset").onclick = () => { golesLocal=0; golesVisitante=0; partidoIniciado=false; actualizar(); };

function actualizar() {
  txtLocal.textContent = golesLocal;
  txtVisitante.textContent = golesVisitante;
  mensaje.className = "";
  if(!partidoIniciado) mensaje.textContent="El partido aún no ha comenzado";
  else if(golesLocal===golesVisitante){mensaje.textContent="Empate"; mensaje.classList.add("empate");}
  else if(golesLocal>golesVisitante){mensaje.textContent="Gana Local"; mensaje.classList.add("local");}
  else{mensaje.textContent="Gana Visitante"; mensaje.classList.add("visitante");}
}

// ----- JUGADORES -----
let jugadores = [];
const form = document.getElementById("formJugador");
const input = document.getElementById("nombreJugador");
const lista = document.getElementById("listaJugadores");

form.onsubmit = e => {
  e.preventDefault();
  const nombre = input.value.trim();
  if(!nombre){alert("Nombre vacío"); return;}
  if(jugadores.includes(nombre)){alert("Jugador ya existe"); return;}
  jugadores.push(nombre); input.value=""; mostrar();
};

function mostrar() {
  lista.innerHTML = "";
  jugadores.forEach(j=>{
    const li=document.createElement("li");
    li.textContent=j;
    const btn=document.createElement("button");
    btn.textContent="Eliminar";
    btn.onclick=()=>{jugadores=jugadores.filter(x=>x!==j); mostrar();}
    li.appendChild(btn);
    lista.appendChild(li);
  });
}
