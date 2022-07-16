function guardar(){
    db.collection("usuarios").add({
        usuario: document.getElementById("nombre").value,
        peso: document.getElementById("peso").value,
        altura: document.getElementById("altura").value,
        IMC: document.getElementById("IMC").value,
        ustp: document.getElementById("ustp").value,
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });

}

function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("IMC").value = "";
    document.getElementById("ustp").value = "";
    //document.getElementById("lista").value = "0";
    
    
    
   
}
function ver(){

    const listas = document.getElementById("lista");

db.collection("usuarios")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let li = document.createElement("li");
      let usuario1 = document.createElement("h5");
      let peso1 = document.createElement("p");
      let altura1 = document.createElement("p");
      let IMC1 = document.createElement("p");
      let ustp1 = document.createElement("p");
      

      usuario1.textContent = doc.data().usuario;
      peso1.textContent = doc.data().peso;
      altura1.textContent = doc.data().altura;
      IMC1.textContent = doc.data().IMC;
      ustp1.textContent = doc.data().ustp;

      li.appendChild(usuario1);

      li.appendChild(peso1);
      li.appendChild(altura1);
      li.appendChild(IMC1);
      li.appendChild(ustp1);

      listas.appendChild(li);
    });
  })
  .catch( error => {
    console.log("Error no puedo obtener estos datos: ", error)
  })
   
}