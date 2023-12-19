class formsWarriors{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        const blowByTypes = {
            mago: 'magia' ,
            guerreiro: 'espada' ,
            monge:'artes  marciais' ,
            ninja: 'shuriken' ,            
            default: 'Não utilizou um ataque'
        }

        const mensagem = `O ${this.type} atacou usando ${blowByTypes[this.type] || blowByTypes.default}`;

        console.log(mensagem);
    }
}

const heroiAugustinho = new formsWarriors("Augustinho", 25, "mago");
heroiAugustinho.attack();

const heroiHerminio = new formsWarriors("Hermínio", 30, "guerreiro");
heroiHerminio.attack();

const heroiPedro = new formsWarriors("Pedro", 30, "ninja");
heroiPedro.attack();