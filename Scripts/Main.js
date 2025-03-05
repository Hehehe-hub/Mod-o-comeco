// Exemplo básico de script para o mod "O Começo"

const Mod = require('mod');

// Função para mostrar um texto aleatório
Mod.addEventListener('init', function() {
    console.log('Mod "O Começo" iniciado');
    
    // Função de exemplo para exibir mensagem aleatória
    function textoAleatorio() {
        const textos = [
            'Bem-vindo ao mod "O Começo"! Boa sorte!',
            'Você pode fazer muitas coisas por aqui!',
            'Não se esqueça de cuidar de sua sanidade!'
        ];
        const aleatorio = textos[Math.floor(Math.random() * textos.length)];
        console.log(aleatorio);
    }
    
    textoAleatorio();
});
