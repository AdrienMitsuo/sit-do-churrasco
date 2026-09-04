// 1. Menu Responsivo para Celular (Hambúrguer)
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar o menu ao clicar em um link (no celular)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// 2. Calculadora de Churrasco
const calcularBtn = document.getElementById('calcular-btn');

if (calcularBtn) {
    calcularBtn.addEventListener('click', () => {
        const homens = parseInt(document.getElementById('homens').value) || 0;
        const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
        const criancas = parseInt(document.getElementById('criancas').value) || 0;

        // Cálculos base
        const totalCarneG = (homens * 400) + (mulheres * 350) + (criancas * 200);
        const totalLinguicaG = (homens * 150) + (mulheres * 100) + (criancas * 50);
        const totalBebidaMl = (homens * 4000) + (mulheres * 3000) + (criancas * 1500);

        // Convertendo para KG e Litros
        const carneKg = (totalCarneG / 1000).toFixed(1);
        const linguicaKg = (totalLinguicaG / 1000).toFixed(1);
        const bebidaLitros = (totalBebidaMl / 1000).toFixed(1);

        // Exibindo na tela
        const resultadoDiv = document.getElementById('resultado-calc');
        if (resultadoDiv) {
            resultadoDiv.classList.remove('resultado-oculto');
        }

        document.getElementById('res-carne').innerText = `🥩 Carne (Bovina/Frango): ${carneKg} kg`;
        document.getElementById('res-linguica').innerText = `🌭 Linguiça / Aperitivos: ${linguicaKg} kg`;
        document.getElementById('res-bebida').innerText = `🍺 Bebidas (Cerveja/Refrigerante): ${bebidaLitros} L`;
    });
}

// 3. Alerta Amigável ao Clicar no WhatsApp
const botoesWhats = document.querySelectorAll('#btn-whats-hero, #btn-whats-contato');

botoesWhats.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('Redirecionando para o WhatsApp do Mestre do Churrasco! Prepare a brasa 🔥');
    });
});