const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation : 150,
    chosenClass: "seleccionado",
    //ghostClass: "fantasma",
    dragClass: "drag",

    onEnd: () => {
        console.log('Se inserto un elemento')
    },
    group: "lista-personas",
    store: {
        //guardar el orden de la lista
        set: (sortable) => {
            const orden = sortable.toArray();
            //convertir el arrglo en una cadena de string
            localStorage.setItem(sortable.options.group.name, orden.join('/')); //convertir a cadena
        },

        //obtener el orden
        get: (sortable) => {
            const orden = localStorage.getItem(sortable.options.group.name);
            return orden ? orden.split('/') : []; //convertir a elementos de arreglo
        }
    }
});