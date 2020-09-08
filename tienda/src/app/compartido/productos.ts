import { Producto } from "./producto";
export const PRODUCTOS: Producto[] = [
    {
        id: '0',
        nombre: 'Aguacate',
        imagen: 'assets/imagen/aguacate.jpg',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '6.55',
        descripcion: 'Es una fruta con forma de pera, aunque también puede tener forma de pepino o de manzana. Su piel es verde, el tono y la textura cambian de unas variedades a otras. Tiene una pulpa cremosa y de color verde que recubre una gran semilla marrón no comestible.  Se puede considerar un aguacate maduro y apto para el consumo si al sacudirlo se nota que el hueso del interior se mueve o cede levemente al presionar con nuestros dedos.',
        cantidad: 32,
        comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto, esperamos que se mantenga la calidad del producto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },

    {
        id: '1',
        nombre: 'Ajo',
        imagen: 'assets/imagen/ajo.jpg',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Libra',
        precio: '3.88',
        descripcion: 'Allium sativum, el ajo, es una especie tradicionalmente clasificada dentro de la familia de las liliáceas pero que actualmente se ubica en la de las amarilidáceas1​ aunque este extremo es muy discutido. Al igual que la cebolla (Allium cepa), el puerro (Allium ampeloprasum var. porrum) y la cebolla de invierno o cebollino (Allium fistulosum), es una especie de importancia económica ampliamente cultivada y desconocida en estado silvestre',
        cantidad: 150, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },

    {
        id: '2',
        nombre: 'Almendras',
        imagen: 'assets/imagen/almendras.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Bolsa',
        precio: '8.79',
        descripcion: 'La almendra es el fruto del almendro. Posee una película de color canela que la envuelve además de una cáscara exterior que no es comestible, que representa un peso importante de la almendra, y una piel verde que se va secando. Por ello la parte comestible de este se reduce al 40 % es decir solo la semilla',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '3',
        nombre: 'Arandanos',
        imagen: 'assets/imagen/arandanos.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '6.43',
        descripcion: 'La almendra es el fruto del almendro. Posee una película de color canela que la envuelve además de una cáscara exterior que no es comestible, que representa un peso importante de la almendra, y una piel verde que se va secando. Por ello la parte comestible de este se reduce al 40 % es decir solo la semilla',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '4',
        nombre: 'Brocoli',
        imagen: 'assets/imagen/brocoli.png',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Bolsa',
        precio: '30',
        descripcion: 'El brócoli, ​ brécol​ o bróquil​, del italiano broccoli, es una planta de la familia de las brasicáceas. Otras variedades de la misma especie son el repollo, la coliflor, el colinabo y la col de Bruselas. El llamado brócoli chino o kale es también una variedad de Brassica oleracea',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '5',
        nombre: 'Calabaza',
        imagen: 'assets/imagen/calabaza.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '31',
        descripcion: 'La calabaza es una baya de cáscara dura. Es el fruto de las cucurbitáceas y es un fruto de tipo pepónide. Algunos autores también incluyen a los frutos del género Lagenaria, y a los frutos de las plantas de la familia de las bignoniáceas, como los "árboles de calabazas" Crescentia y Amphitecna.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '6',
        nombre: 'Canela',
        imagen: 'assets/imagen/canela.jpg',
        categoria: 'Especia',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '10',
        descripcion: 'El árbol de la canela, conocido como canelo, ​ es un árbol de hoja perenne, de 10 a 15 metros de altura, procedente de Sri Lanka. Se aprovecha como especia su corteza interna, que se obtiene pelando y frotando las ramas',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '7',
        nombre: 'Cebolla',
        imagen: 'assets/imagen/cebolla.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '5.4',
        descripcion: 'Allium cepa, comúnmente conocida como cebolla, es una planta herbácea bienal perteneciente a la familia de las amarilidáceas. Es la especie más cultivada del género Allium, el cual contiene varias especies que se denominan «cebollas» y que se cultivan como alimento',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '8',
        nombre: 'Fresa',
        imagen: 'assets/imagen/fresa.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Libra',
        precio: '7.8',
        descripcion: 'Fragaria, llamado comúnmente fresa o frutilla, es un género de plantas rastreras estoloníferas de la familia Rosaceae. Agrupa unos 400 taxones descritos, de los cuales solo unos 20 están aceptados.​ Son cultivadas por su fruto comestible llamado de la misma manera, fresa o frutilla',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },
    {
        id: '9',
        nombre: 'Kiwi',
        imagen: 'assets/imagen/kiwi.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Docena',
        precio: '9.99',
        descripcion: 'El kiwi es la baya de la enredadera Actinidia deliciosa. Es originaria de una gran área de China, sobre todo de los bosques del valle del río Yangtsé. Introducida en Nueva Zelanda en 1904, fue cultivada desde entonces en muchas regiones templadas por su fruto comestible',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '9',
        nombre: 'Limón',
        imagen: 'assets/imagen/limon.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Docena',
        precio: '21.54',
        descripcion: 'Citrus × limon, el limonero, es un pequeño árbol frutal perenne. Su fruto es el limón, ​ una fruta comestible de sabor ácido y extremadamente fragante que se usa principalmente en la alimentación. Se trata de un híbrido entre C. medica y C. aurantium',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '10',
        nombre: 'Lychee',
        imagen: 'assets/imagen/lychee.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Bolsa',
        precio: '1',
        descripcion: 'Litchi chinensis, conocido vulgarmente como lichi o lechias​, es un árbol frutal tropical originario del sur de China. Es el único representante del género Litchi.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '11',
        nombre: 'Maiz',
        imagen: 'assets/imagen/maiz.jpg',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '8.9',
        descripcion: 'Zea mays, el maíz, es una gramínea anual originaria y domesticada por pueblos indígenas en el sur de México desde hace unos diez mil años, e introducida en Europa en el siglo XVII.​​ Actualmente, es el cereal con el mayor volumen de producción a nivel mundial, superando incluso al trigo y al arroz.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '12',


        nombre: 'Manzana',
        imagen: 'assets/imagen/manzana.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '0.5',
        descripcion: 'La manzana es el fruto comestible de la especie Malus domestica, llamada comúnmente manzano. Es una fruta pomácea de forma redonda y sabor más o menos dulce, dependiendo de la variedad',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    },

    {
        id: '13',
        nombre: 'Naranja',
        imagen: 'assets/imagen/naranja.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Docena',
        precio: '4.4',
        descripcion: 'La naranja es una fruta cítrica obtenida del naranjo dulce, del naranjo amargo y de naranjos de otras variedades o híbridos, de origen asiático',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '14',
        nombre: 'Papa',
        imagen: 'assets/imagen/papa.jpg',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Libra',
        precio: '36',
        descripcion: 'La papa o patata es un tubérculo comestible que se extrae de la planta herbácea americana Solanum tuberosum, de origen andino. Es una planta perteneciente a la familia de las solanáceas originaria de Suramérica y cultivada por todo el mundo por sus tubérculos comestibles.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '15',
        nombre: 'Pasta',
        imagen: 'assets/imagen/pasta.jpg',
        categoria: 'Especia',
        destacato: false,
        etiqueta: 'Bolsa',
        precio: '16',
        descripcion: 'La pasta es un conjunto de alimentos preparados con una masa cuyo ingrediente básico es la harina, mezclada con agua, y a la cual se puede añadir sal, huevo u otros ingredientes, conformando un producto que generalmente se cuece en agua hirviendo.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '16',
        nombre: 'Pimienta',
        imagen: 'assets/imagen/pimienta.jpg',
        categoria: 'Especia',
        destacato: false,
        etiqueta: 'Bolsa',
        precio: '26',
        descripcion: 'Piper nigrum es una especie de la familia de las piperáceas, cultivada por su fruto, que se emplea seco como especia. El fruto es una drupa que se puede usar entera o en polvo obteniendo variedades como la negra, blanca o verde, con la única diferencia del grado de maduración del grano.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '17',
        nombre: 'Repollo',
        imagen: 'assets/imagen/repollo.jpg',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Unidad',
        precio: '8',
        descripcion: 'Brassica oleracea var. capitata, repollo, col repollo​ o col cerrada, es una planta comestible de la familia de las Brasicáceas, y una herbácea bienal, cultivada como anual, cuyas hojas lisas forman un característico cogollo compacto',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '18',
        nombre: 'Tomate',
        imagen: 'assets/imagen/tomate.jpg',
        categoria: 'Fruta',
        destacato: false,
        etiqueta: 'Libra',
        precio: '3',
        descripcion: 'Solanum lycopersicum, cuyo fruto es el tomate, conocida comúnmente como tomatera, es una especie de planta herbácea del género Solanum de la familia Solanaceae; es nativa de América Central y México, del norte y noroeste de Sudamérica; su uso como comida se habría originado en Sudamérica hace 2600 años',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }, {
        id: '19',
        nombre: 'Zanahoria',
        imagen: 'assets/imagen/zanahoria.jpg',
        categoria: 'Verdura',
        destacato: false,
        etiqueta: 'Libra',
        precio: '9',
        descripcion: 'Daucus carota subespecie sativus, llamada popularmente zanahoria, es la forma domesticada de la zanahoria silvestre, especie de la familia de las umbelíferas, también denominadas apiáceas, y considerada la más importante y de mayor consumo dentro de esta familia. Es oriunda de Europa y Asia sudoccidental.',
        cantidad: 50, comentarios: [
            {
                rating: 5,
                comentario: 'buen producto',
                autor: 'Un Comprador',
                fecha: '2020-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comentario: 'Nadie es perfecto asi que nunca pondre el valor mas alto, pero me encanto',
                autor: 'otro comprador',
                fecha: '2020-04-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comentario: 'Buen precio',
                autor: 'no se',
                fecha: '2020-04-16T17:57:28.556094Z'
            },],
    }




];