class List{
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
    
}

class Todolist extends List{
    constructor() {
        super();
        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
    
}

class Matematica {
    // Classes estáticas não enxergam o resto da classe
    static soma(a, b){
        return a + b;
    }
}

var MinhaLista = new Todolist();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

console.log(Matematica.soma(1,2));