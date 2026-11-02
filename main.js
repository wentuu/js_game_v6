import Pokemon from './pokemon.js';
import { random, generateLog } from './utils.js';
import { pokemons } from './pokemons.js';

// Вибираємо випадкових покемонів з масиву (або за замовчуванням Pikachu та Charmander)
const pikachuData = pokemons.find(item => item.name === 'Pikachu');
const charmanderData = pokemons.find(item => item.name === 'Charmander');

const player1 = new Pokemon({
    ...pikachuData,
    hp: pikachuData.stats.hp * 5, // Збільшуємо HP для довшого бою
    selectors: 'player1'
});

const player2 = new Pokemon({
    ...charmanderData,
    hp: charmanderData.stats.hp * 5,
    selectors: 'player2'
});

const $control = document.querySelector('.control');

// Функція замикання для обмеження кількості атак на кнопку
const countBtn = (max = 6, elButton) => {
    let counter = max;
    return () => {
        if (counter > 0) {
            counter--;
            if (elButton) {
                elButton.innerText = `${elButton.dataset.name} (${counter})`;
            }
        }
        
        if (counter === 0) {
            elButton.disabled = true;
        }
        return counter;
    };
};

// Динамічне створення кнопок атак на основі масиву attacks у player1
player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = `${item.name} (${item.maxCount})`;
    $btn.dataset.name = item.name;

    const btnCount = countBtn(item.maxCount, $btn);

    $btn.addEventListener('click', () => {
        btnCount();

        // Урон по противнику (player2)
        const damagePlayer2 = random(item.maxDamage);
        player2.changeHP(damagePlayer2, (count) => {
            const $logs = document.querySelector('#logs');
            const logText = generateLog(player1, player2, count);
            const $p = document.createElement('p');
            $p.innerText = logText;
            $logs.insertBefore($p, $logs.children[0]);
        });

        // Перевірка перемоги гравця
        if (player2.damageHP === 0) {
            alert(`${player2.name} проиграл бой!`);
            document.querySelectorAll('.control .button').forEach(b => b.disabled = true);
            return;
        }

        // Відповідна атака противника (player1 отримує урон від випадкової атаки player2)
        const enemyAttack = player2.attacks[random(player2.attacks.length) - 1];
        const damagePlayer1 = random(enemyAttack.maxDamage);
        
        player1.changeHP(damagePlayer1, (count) => {
            const $logs = document.querySelector('#logs');
            const logText = generateLog(player2, player1, count);
            const $p = document.createElement('p');
            $p.innerText = logText;
            $logs.insertBefore($p, $logs.children[0]);
        });

        // Перевірка поразки гравця
        if (player1.damageHP === 0) {
            alert(`${player1.name} проиграл бой!`);
            document.querySelectorAll('.control .button').forEach(b => b.disabled = true);
        }
    });

    $control.appendChild($btn);
});

console.log('Start Game with Arrays!');