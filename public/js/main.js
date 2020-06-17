function listarProyectos(año, materia){
  var listadoProyectos = document.getElementById('project-content');
  //Lista todos los proyectos de una materia especifica
 db.collection(año).doc(materia).collection("Proyectos").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var xmlString = "<div class='col-md-4 col-sm-6  py-5 "+
          doc.data().categoria + "'> <a href='proyecto.html?id="+doc.id+"'><div class='single-awesome-project'><img class='img-fluid' src='" +
          doc.data().imagenes[0] + "' alt=''/><div class='project-dec'><h4>" +
          doc.data().autor + "</h4></div></div></a></div>";
          listadoProyectos.innerHTML+=xmlString;
      });
  });
}

function obtenerProyecto(año, materia){
//Obtengo un determinado proyecto
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(!urlParams.has('id'))
{
  window.location.replace("../error.html");
}
const idProyecto = urlParams.get('id')
var docRef = db.collection(año).doc(materia).collection("Proyectos").doc(idProyecto);
var descProy = document.getElementById("descProy");
var fechaRealizacion = document.getElementById("fechaRealizacion");
var linkProyecto = document.getElementById("linkProyecto");
var autor = document.getElementById("autor");
var tecnologias = document.getElementById("tecnologias");
var carousel = document.getElementsByClassName("carousel-inner")[0];

docRef.get().then(function(doc) {
    if (doc.exists) {
      descProy.innerHTML=doc.data().descripcion;
      fechaRealizacion.innerHTML=doc.data().fechaRealizacion;
      crearIndicadoresCarousel(doc.data().imagenes.length);
      doc.data().imagenes.forEach(function callback(currentValue, i) {
        var itemCarousel = document.createElement("div");
        itemCarousel.className="carousel-item";
        var imgCarousel = document.createElement("img");
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
      doc.data().tecnologias.forEach(function callback(currentValue) {
        var itemTecnologia = document.createElement("li");
        itemTecnologia.innerHTML=currentValue;
        tecnologias.appendChild(itemTecnologia);
      });
    } else {
        window.location.replace("../error.html");
    }
}).catch(function(error) {
  console.error(error);
  window.location.replace("../error.html");
});
}

function crearIndicadoresCarousel(cantImgs){
  var indicadorCarousel;
  var indicadoresCarousel = document.getElementsByClassName("carousel-indicators");
  for(i=0;i<cantImgs;i++)
  {
    indicadorCarousel = document.createElement("li");
    indicadorCarousel.setAttribute('data-target', '#carouselProyecto');
    indicadorCarousel.setAttribute('data-slide-to',i)
    if(i==0){
      indicadorCarousel.className="active";
    }
    ;
    indicadoresCarousel[0].appendChild(indicadorCarousel);
  }
  
}