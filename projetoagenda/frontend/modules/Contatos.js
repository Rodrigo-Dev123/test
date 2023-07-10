import validator from 'validator';

export default class Contato {
    constructor(classForm) {
        this.form = document.querySelector(classForm)
    }

    init() {
        this.events()
    };

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        })
    };

    validate(e) {
        const el = e.target;
        const inputName = el.querySelector('input[name="nome"]');
        const inputLastName = el.querySelector('input[name="sobrenome"]');
        const inputEmail = el.querySelector('input[name="email"]');
        const inputTel = el.querySelector('input[name="telefone"]');
        let error = false;
       
        if(inputName.value.length < 3 || inputName.value.length > 50) {
            this.loadMessage('O seu nome e precisa ter entre 3 e 50 caracteres!');
            error = true;
        };

        if(inputLastName.value.length < 3 || inputLastName.value.length > 50) {
            this.loadMessage('O seu sobrenome precisa ter entre 3 e 50 caracteres!')
            error = true;
        };

        if(!validator.isEmail(inputEmail.value)) {
            this.loadMessage('Email inválido!');
            error = true;
        };

        if(inputTel.value.length < 9 || inputTel.value.length > 11) {
            this.loadMessage('Número de telefone inválido!')
            error = true;
        };

        if(!error) el.submit(); 
    };

    loadMessage(msg) {
        const resultado = document.querySelector('.resultado');
        const p = document.createElement('p');
        resultado.classList.add('row', 'col', 'my-3', 'alert', 'alert-danger');
        p.innerHTML = `${msg}<br>`;
        resultado.appendChild(p);   
    }
    
}