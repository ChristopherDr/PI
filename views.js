class View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return 
            `<div class="text-center">
                <button type="button" class="btn btn-success w-75 p-3 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">$[n.nome] </button>
            </div>`
        
    }
}