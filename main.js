const ventilador = {
    marca: 'Mondial',
    fabricante: 'Arno',
    anoFabricação: '2024',
    valor: 200,
    cor: 'Black',
    garantia: 'seis anos'
}


function ventilador (marca, fabricante, anoFabricação,valor, cor, garantia){
    this.marca = marca;
    this.anoFabricação = anoFabricação;
    this.fabricante = fabricante;
    this.valor = valor;
    this.cor = cor;
    this.garantia = garantia;
}

const ventiladorA = new ventilador("Mondial", "Mondial acessorios", 2024, 200, "Verde", "tres anos");
const ventiladorB = new ventilador("Arno", "Arno acessorios", 2018, 120, "Black", "um ano");
const ventiladorC = new ventilador("Mallory", "Tudo variedades", 2020, 130, "Vermelho","cinco anos");


console.log(ventiladorA);
console.log(ventiladorB);
console.log(ventiladorC);


function Aluno (nome){
    this.nome = nome;
    this.meuAluno = function(){
        console.log(this.nome + "Ola aluno");
    }
}


function Funcionario (nome, curso, salario, conhecimento){
    this.curso = curso;
    this.salario = salario;
    this.conhecimento = conhecimento;

    Aluno.call(this, nome);
}

function funcionario(nome, cargo, salario, idade, estado, endereco){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.idade = idade;
    this.estado = estado;
    this.endereco = endereco;
}

const empregadoA = new funcionario("jonas", "Estudante de programação na ebac", 800, 32, "Casado", "Rua JavaScript");
const empregadoB = new funcionario("maria", "Estudante de programação na ebac", 1200, 20, "Solteira", "Rua HTML");
const empregadoC = new funcionario("thiago", "Estudante de programação na ebac", 5000, 25, "Casado", "Rua Css");