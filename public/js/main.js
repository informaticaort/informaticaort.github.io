'use strict';
  const listarProyectos = (año, materia)=>{
  //Lista todos los proyectos de una materia especifica
  const proyectos = document.getElementById('proyectos');
  const listadoProyectos = document.createElement("div");
  listadoProyectos.id='project-content';
  listadoProyectos.className='row';
  db.collection(año).doc(materia).collection("Proyectos").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
          const xmlString = `<div class='col-md-4 col-sm-6 pt-5 ${doc.data().categoria}'><a href='proyecto.html?id=${doc.id}'><div class='single-awesome-project'><img class='img-fluid' src='${doc.data().imagenes[0]}' alt=''/><div class='project-dec'><h4>${doc.data().autor}</h4></div></div></a></div>`;
          listadoProyectos.innerHTML+=xmlString;
      });
      proyectos.appendChild(listadoProyectos);
      mostrarPagina();
  });
}

const obtenerProyecto = (año, materia) => {
//Obtengo un determinado proyecto
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(!urlParams.has('id')){
  window.location.replace("error.html");
}
const idProyecto = urlParams.get('id')
const docRef = db.collection(año).doc(materia).collection("Proyectos").doc(idProyecto);
const descProy = document.getElementById("descProy");
const fechaRealizacion = document.getElementById("fechaRealizacion");
const linkProyecto = document.getElementById("linkProyecto");
const autor = document.getElementById("autor");
const tecnologias = document.getElementById("tecnologias");
const carousel = document.getElementsByClassName("carousel-inner")[0];

docRef.get().then(doc => {
    if (doc.exists) {
      descProy.innerHTML=doc.data().descripcion;
      fechaRealizacion.innerHTML=doc.data().fechaRealizacion;
      crearIndicadoresCarousel(doc.data().imagenes.length);
      doc.data().imagenes.forEach((currentValue, i) => {
        const itemCarousel = document.createElement("div");
        itemCarousel.className="carousel-item";
        const imgCarousel = document.createElement("img");
        imgCarousel.className="d-block w-100";
        imgCarousel.src=currentValue;
        if(i==0){
          itemCarousel.className+=" active";
        }
        
        itemCarousel.appendChild(imgCarousel);
        carousel.appendChild(itemCarousel);
      });
      linkProyecto.href=doc.data().link;
      autor.innerHTML=doc.data().autor;
      doc.data().tecnologias.forEach(currentValue => {
        const itemTecnologia = document.createElement("li");
        itemTecnologia.innerHTML=currentValue;
        tecnologias.appendChild(itemTecnologia);
      });
      mostrarPagina();
    } else {
      window.location.replace("error.html");
    }
}).catch(error => {
  console.error(error);
  window.location.replace("error.html");
});

}

const crearIndicadoresCarousel = cantImgs =>{
  const indicadoresCarousel = document.getElementsByClassName("carousel-indicators");
  for(let i=0;i<cantImgs;i++){
    const indicadorCarousel = document.createElement("li");
    indicadorCarousel.setAttribute('data-target', '#carouselProyecto');
    indicadorCarousel.setAttribute('data-slide-to',i)
    if(i==0){
      indicadorCarousel.className="active";
    }
    indicadoresCarousel[0].appendChild(indicadorCarousel);
  }
}

const mostrarPagina = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("contenido").style.display = "block";
}