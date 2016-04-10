function printlistaEstudiante( Estudiante) {
  var listaHTML = '<ol>';
  for (var i = 0; i < Estudiante.length; i += 1) {
    listaHTML += '<li>Tema: ' +Estudiante[i][0] + '. Por: ' + Estudiante[i][1]  + '</li>';
  }
  listaHTML += '</ol>';
  print(listaHTML);
}


function print(html) {
  document.write(html);
}

var estudianteLis = [];
estudianteLis.push([nombre:"Richard",genero:"M", edad:28, arrogloNotas:[10,10,10], ciudad:"Playas", lenguajeFavorito:"ninguno", estaTrabajando:true]);
estudianteLis.push([nombre:"Andrea",genero:"F", edad:27, arrogloNotas:[10,10,10], ciudad:"Playas", lenguajeFavorito:"ninguno", estaTrabajando:true]);
estudianteLis.push([nombre:"Marcos",genero:"M", edad:30, arrogloNotas:[10,10,10], ciudad:"Playas", lenguajeFavorito:"ninguno", estaTrabajando:true]);
estudianteLis.push([nombre:"Marcelo",genero:"M", edad:22, arrogloNotas:[10,10,10], ciudad:"Playas", lenguajeFavorito:"ninguno", estaTrabajando:true]);
estudianteLis.push([nombre:"Agusto",genero:"M", edad:25, arrogloNotas:[10,10,10], ciudad:"Playas", lenguajeFavorito:"ninguno", estaTrabajando:true]);


printListaEstudiante( estudianteLis );

var busqueda;

function print(mensaje){
	document.write("<p>" + mensaje + "</p>");
}

while(true)
{

	busqueda = prompt("Presione q para salir, l para listar o Ingrese el nombre del estudiante: ");
	busqueda = busqueda.toLowerCase();
	if(busqueda=="salir" || busqueda=="fin" || busqueda=="chao" || busqueda=="quit" || busqueda=="q")
	{
		alert("Gracias por usar el buscador, chao!");
		break;
	}else if(busqueda=="lista" || busqueda=="inventorio" || busqueda=="lista" || busqueda=="l"){
		print("la lista de estudiante es la siguiente : " +  printlistaEstudiante.join(", "));
	}else{
		if( estudianteLis.indexOf(busqueda)>=0)
		{
			alert("el estudiante si esta registrado " + busqueda + " estudiante esta matriculado");
		}else{
			alert("el estudiante no esta registrado " + busqueda + " estudiante no esta matriculado");
		}
	}
}

