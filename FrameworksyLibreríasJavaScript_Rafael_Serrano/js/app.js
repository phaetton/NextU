// Prepara el juego
$(function() {
	initGame();
});

//obtiene numero aleatorio
function obtenerRandInt(minimo, maximo) {
	minimo = Math.ceil(minimo);
	maximo = Math.floor(maximo);
	return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

// arreglos de filas
function dulceRows(index) {
	var dulceRow = givedulceArrays('rows', index);
	return dulceRow;
}

// arreglos de colunmnas
function dulceColumns(index) {
	var dulceColumn = givedulceArrays('columns');
	return dulceColumn[index];
}

//El título “Match Game” debe tener una animación que cambie de color después de determinado tiempo, posteriormente vuelva al color original, y permanezca cambiando entre dos colores indefinidamente.
function changeColor(selector) {
	$(selector).animate({
			opacity: '1',
		}, {
			step: function () {
				$(this).css('color', 'white');
			},
			queue: true
		})
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'yellow');
			},
			queue: true
		}, 600)
		.delay(1000)
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'white');
			},
			queue: true
		})
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'yellow');
				changeColor('h1.main-titulo');
			},
			queue: true
		});
}

//Se deben generar los dulces aleatoriamente en el tablero, llenándolo todo al principio del juego. Cada vez que se realice una combinación de 3 dulces o más en línea, y posteriormente desaparezcan, estos espacios se deben llenar con los dulces inmediatamente anteriores verticalmente a los espacios; creando nuevos dulces aleatorios para llenar en la parte de arriba del tablero. Esto debe mostrar un efecto en el que la gravedad hace que todos los dulces se desplacen hacia abajo y se llenen los nuevos desde la parte superior del tablero.

// obtiene filas y columnas de dulces
function givedulceArrays(arrayType, index) {

	var dulceCol1 = $('.col-1').children();
	var dulceCol2 = $('.col-2').children();
	var dulceCol3 = $('.col-3').children();
	var dulceCol4 = $('.col-4').children();
	var dulceCol5 = $('.col-5').children();
	var dulceCol6 = $('.col-6').children();
	var dulceCol7 = $('.col-7').children();

	var dulceColumns = $([dulceCol1, dulceCol2, dulceCol3, dulceCol4,dulceCol5, dulceCol6, dulceCol7]);

	if (typeof index === 'number') {
		var dulceRow = $([
			dulceCol1.eq(index),
			dulceCol2.eq(index),
			dulceCol3.eq(index),
			dulceCol4.eq(index),
			dulceCol5.eq(index), 
			dulceCol6.eq(index),
			dulceCol7.eq(index)
		]);
	} else {
		index = '';
	}

	if (arrayType === 'columns') {
		return dulceColumns;
	} else if (arrayType === 'rows' && index !== '') {
		return dulceRow;
	}
}

//Verificar si hay como mínimo tres dulces del mismo tipo en línea, en caso tal, deben desaparecer con un efecto animado. Esto debe sumar puntos en el puntaje general.
function columnValidation() {
	for (var j = 0; j < 7; j++) {
		var counter = 0;
		var dulcePosition = [];
		var extradulcePosition = [];
		var dulceColumn = dulceColumns(j);
		var comparisonValue = dulceColumn.eq(0);
		var gap = false;
		for (var i = 1; i < dulceColumn.length; i++) {
			var srcComparison = comparisonValue.attr('src');
			var srcdulce = dulceColumn.eq(i).attr('src');

			if (srcComparison != srcdulce) {
				if (dulcePosition.length >= 3) {
					gap = true;
				} else {
					dulcePosition = [];
				}
				counter = 0;
			} else {
				if (counter == 0) {
					if (!gap) {
						dulcePosition.push(i - 1);
					} else {
						extradulcePosition.push(i - 1);
					}
				}
				if (!gap) {
					dulcePosition.push(i);
				} else {
					extradulcePosition.push(i);
				}
				counter += 1;
			}
			comparisonValue = dulceColumn.eq(i);
		}
		if (extradulcePosition.length > 2) {
			dulcePosition = $.merge(dulcePosition, extradulcePosition);
		}
		if (dulcePosition.length <= 2) {
			dulcePosition = [];
		}
		dulceCount = dulcePosition.length;
		if (dulceCount >= 3) {
			borrarColumnDulce(dulcePosition, dulceColumn);
			setScore(dulceCount);
		}
	}
}

function borrarColumnDulce(dulcePosition, dulceColumn) {
	for (var i = 0; i < dulcePosition.length; i++) {
		dulceColumn.eq(dulcePosition[i]).addClass('delete');
	}
}

// Valida si hay dulces a eliminarse en una fila
function rowValidation() {
	for (var j = 0; j < 6; j++) {
		var counter = 0;
		var dulcePosition = [];
		var extradulcePosition = [];
		var dulceRow = dulceRows(j);
		var comparisonValue = dulceRow[0];
		var gap = false;
		for (var i = 1; i < dulceRow.length; i++) {
			var srcComparison = comparisonValue.attr('src');
			var srcdulce = dulceRow[i].attr('src');

			if (srcComparison != srcdulce) {
				if (dulcePosition.length >= 3) {
					gap = true;
				} else {
					dulcePosition = [];
				}
				counter = 0;
			} else {
				if (counter == 0) {
					if (!gap) {
						dulcePosition.push(i - 1);
					} else {
						extradulcePosition.push(i - 1);
					}
				}
				if (!gap) {
					dulcePosition.push(i);
				} else {
					extradulcePosition.push(i);
				}
				counter += 1;
			}
			comparisonValue = dulceRow[i];
		}
		if (extradulcePosition.length > 2) {
			dulcePosition = $.merge(dulcePosition, extradulcePosition);
		}
		if (dulcePosition.length <= 2) {
			dulcePosition = [];
		}
		dulceCount = dulcePosition.length;
		if (dulceCount >= 3) {
			borrarHorizontal(dulcePosition, dulceRow);
			setScore(dulceCount);
		}
	}
}

function borrarHorizontal(dulcePosition, dulceRow) {
	for (var i = 0; i < dulcePosition.length; i++) {
		dulceRow[dulcePosition[i]].addClass('delete');
	}
}

//Cada vez que el jugador realice un movimiento, debe aumentarse un contador que se muestra en pantalla.
function setScore(dulceCount) {
	var score = Number($('#score-text').text());
	switch (dulceCount) {
		case 3:
			score += 25;
			break;
		case 4:
			score += 50;
			break;
		case 5:
			score += 75;
			break;
		case 6:
			score += 100;
			break;
		case 7:
			score += 200;
	}
	$('#score-text').text(score);
}

//pone los dulce en el tablero
function llenarTabla() {
	var top = 6;
	var column = $('[class^="col-"]');

	column.each(function () {
		var dulces = $(this).children().length;
		var agrega = top - dulces;
		for (var i = 0; i < agrega; i++) {
			var dulceType = obtenerRandInt(1, 5);
			if (i === 0 && dulces < 1) {
				$(this).append('<img src="image/' + dulceType + '.png" class="element"></img>');
			} else {
				$(this).find('img:eq(0)').before('<img src="image/' + dulceType + '.png" class="element"></img>');
			}
		}
	});
	adddulceEvents();
	setValidations();
}

// Si hay dulces que borrar
function setValidations() {
	columnValidation();
	rowValidation();
	// Si hay dulces que borrar
	if ($('img.delete').length !== 0) {
		deletesdulceAnimation();
	}
}

//La interacción del usuario con el dulce 
function adddulceEvents() {
	$('img').draggable({
		containment: '.panel-tablero',
		droppable: 'img',
		revert: true,
		revertDuration: 500,
		grid: [100, 100],
		zIndex: 10,
		drag: constraindulceMovement
	});
	$('img').droppable({
		drop: swapdulce
	});
	enabledulceEvents();
}

function disabledulceEvents() {
	$('img').draggable('disable');
	$('img').droppable('disable');
}

function enabledulceEvents() {
	$('img').draggable('enable');
	$('img').droppable('enable');
}

//hace que el dulce sea solido al moverse
function constraindulceMovement(event, dulceDrag) {
	dulceDrag.position.top = Math.min(100, dulceDrag.position.top);
	dulceDrag.position.bottom = Math.min(100, dulceDrag.position.bottom);
	dulceDrag.position.left = Math.min(100, dulceDrag.position.left);
	dulceDrag.position.right = Math.min(100, dulceDrag.position.right);
}

//reemplaza a los dulces anteriores
function swapdulce(event, dulceDrag) {
	var dulceDrag = $(dulceDrag.draggable);
	var dragSrc = dulceDrag.attr('src');
	var dulceDrop = $(this);
	var dropSrc = dulceDrop.attr('src');
	dulceDrag.attr('src', dropSrc);
	dulceDrop.attr('src', dragSrc);

	setTimeout(function () {
		llenarTabla();
		if ($('img.delete').length === 0) {
			dulceDrag.attr('src', dragSrc);
			dulceDrop.attr('src', dropSrc);
		} else {
			updateMoves();
		}
	}, 500);
}

function llenarTablaPromise(result) {
	if (result) {
		llenarTabla();
	}
}

//valida la puntuacion por cantidad de elementos en linea
function updateMoves() {
	var actualValue = Number($('#movimientos-text').text());
	var result = actualValue += 1;
	$('#movimientos-text').text(result);
}

//eliminacion automatica de los elementos
function deletesdulceAnimation() {
	disabledulceEvents();
	$('img.delete').effect('pulsate', 400);
	$('img.delete').animate({
			opacity: '0'
		}, {
			duration: 300
		})
		.animate({
			opacity: '0'
		}, {
			duration: 400,
			complete: function () {
				deletesdulce()
					.then(llenarTablaPromise)
					.catch(showPromiseError);
			},
			queue: true
		});
}

//llenado automatico de los espacios con dulces
function showPromiseError(error) {
	console.log(error);
}

//borrado de dulces
function deletesdulce() {
	return new Promise(function (resolve, reject) {
		if ($('img.delete').remove()) {
			resolve(true);
		} else {
			reject('No se pudo eliminar dulce...');
		}
	})
}

//temporizador y boton reiniciar
function endGame() {
	$('div.panel-tablero, div.time').effect('fold');
	$('h1.main-titulo').addClass('title-over')
		.html('Match Game<br> Juego Terminado');
	$('div.score, div.moves, div.panel-score').width('100%');
	
}

// inicia el juego
function initGame() {

	changeColor('h1.main-titulo');

	$('.btn-reinicio').click(function () {
		if ($(this).text() === 'Reiniciar') {
			location.reload(true);
		}
		llenarTabla();
		$(this).text('Reiniciar');
		$('#timer').startTimer({
			onComplete: endGame
		})
	});
}