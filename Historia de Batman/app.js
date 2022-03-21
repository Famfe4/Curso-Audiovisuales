var batman = [
    ["1. Lewis G. Wilson (Batman, 1943)", "Se trató de la primera aparición del hombre murciélago en un serial cinematográfico de 15 capítulos; contó con Douglas Crof como Robin y ambos se enfrentaban al príncipe Dr. Daka, un científico loco. Después de interpretar a Batman, Wilson dejó el cine y trabajó en General Fods hasta su jubilación. Murió en San Francisco, California, a los 80 años de edad, en el año 2000.","img/batman1.jpg"],
    ["2. Robert Lowery (Batman and Robin, 1949)", "Se trató del segundo serial cinematográfico, pero éste ya tenía más personajes. Lowery jugaba en el equipo de Kansas City Blues, en las Ligas Menores de Béisbol y su físico hizo que el productor se fijara en él. Su actuación fue muy aceptable.","img/batman2.jpg"],
    ["3. Adam West (Batman, 1966-1968; Batman: The Movie, 1966)", "Protagonizó la serie en televisión, que ya era a color y que tenía una producción más detallada tanto en edición y sonido. Duró 2 años y tuvo 120 episodios. West sabía de su popularidad, y cuando le ofrecieron interpretar al Agente 007, lo rechazó y se quedó con el papel que lo llevó a la fama y a la inmortalidad. En 1989, para la película del superhéroe, se le ofreció interpretar el papel de Thomas Wayne, padre del protagonista, sin embargo, lo rechazó, pues él quería ser Batman.","img/batman3.jpg"],
    ["4. Michael Keaton (Batman, 1989; Batman Returns, 1992)", "En 1989, Tim Burton se fijó en este actor que estaba en un buen momento de su carrera y le quiso dar la gran opotunidad de encarnar al Caballero de la Noche. Su interpretación es una de las más apreciadas, así como la de “The Joker”, a cargo de Jack Nicholson. Para 1992 repitió la fórmula del éxito y enfrentó en pantalla al “Pingüino”, interpretado por Danny DeVito.","img/batman4.jpg"],
    ["5. Val Kilmer (Batman Forever, 1995)", "Joel Schumacher eligió a Kilmer para dar vida al hombre murciélago y su papel, al parecer, no fue lo que el productor esperaba, algo le hizo falta. Los fanáticos de Bruce Wayne salieron de las salas de cine bastante decepcionados.","img/batman5.jpg"],
    ["6. George Clooney (Batman & Robin, 1997)", "Para esta cinta, Joel Schumacher decidió probar con Clooney como protagonista. Realizó un buen papel, pero la crítica y los fanáticos señalaban que se trataba de la cinta más desastrosa en la historia de la franquicia. De hecho, fue elegida entre las 50 peores películas de la historia.","img/batman6.jpg"],
    ["7. Christian Bale (Batman Begins, 2005; The Dark Knight, 2008; y The Dark Knight Rises, 2012)", "Para muchos es uno de los Batman más atractivos, ya que le dio más peso (y más vida) a Bruce Wayne. A Batman lo llevó poco a poco hasta lograr un equilibrio entre el millonario y el superhéroe. Fue un éxito total y para muchos, estas tres cintas dirigidas por Christopher Nolan, son las mejores de la saga.","img/batman7.jpg"],
    ["8. Ben Affleck (Batman v Superman: Dawn of Justice, 2016)", "Su elección como el nuevo Batman dio mucho de qué hablar y aunque muchos no estuvieron conformes con la caracterización, a otros les pareció “interesante”. Pero, a pesar de todo, es una de las películas más nominadas a lo peor de la industria en el 2016. ¿Lo peor? Lo veremos nuevamente en acción en el 2018, en una cinta en la que además de encarnar al caballero oscuro, Affleck se animará a dirigir.","img/batman8.jpg"],
    ["9. Robert Pattison (Batman, 2022)", "En The Batman, Pattinson da vida a un Bruce Wayne de vuelta de todo, inteligente y capaz de batirse a puñetazos con rivales de envergadura. Una imagen llena de zonas grises que el intérprete hace patente cuando se quita el traje de Batman. Si a eso le unimos la legión de fans que veneran a Pattinson sólo queda esperar que muchos se sumen al barco de los que le respetan.","img/batman9.jpg"]
];

let texto = "";

for(let i=0; i<batman.length; i++){
    texto += "<li>";
	texto += "<h2>" + batman[i][0] + "</h2>";
	texto += '<img src="' + batman[i][2] + '">';
	texto += "<p>" + batman[i][1] + "</p>";
	texto += "</li>";
}

document.getElementById("batman").innerHTML = texto;

