export const pokemons = [
    {
        abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
        base_experience: 122,
        category: 'head',
        cries: {
            latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg',
            legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/16.ogg'
        },
        height: 3,
        id: 16,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
        name: 'Pidgey',
        stats: {
            attack: 45,
            defense: 40,
            hp: 40,
            'special-attack': 35,
            'special-defense': 35,
            speed: 56
        },
        type: 'normal',
        attacks: [
            { name: 'quick attack', maxDamage: 20, minDamage: 10, maxCount: 10 },
            { name: 'gust', maxDamage: 30, minDamage: 15, maxCount: 6 }
        ]
    },
    {
        abilities: ['overgrow', 'chlorophyll'],
        base_experience: 64,
        category: 'quadruped',
        cries: {
            latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
            legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg'
        },
        height: 7,
        id: 1,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        name: 'Bulbasaur',
        stats: {
            attack: 49,
            defense: 49,
            hp: 45,
            'special-attack': 65,
            'special-defense': 65,
            speed: 45
        },
        type: 'grass',
        attacks: [
            { name: 'vine whip', maxDamage: 25, minDamage: 10, maxCount: 8 },
            { name: 'tackle', maxDamage: 20, minDamage: 12, maxCount: 10 },
            { name: 'seed bomb', maxDamage: 40, minDamage: 20, maxCount: 4 }
        ]
    },
    {
        abilities: ['blaze', 'solar-power'],
        base_experience: 62,
        category: 'bipedal-tailed',
        cries: {
            latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg',
            legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/4.ogg'
        },
        height: 6,
        id: 4,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        name: 'Charmander',
        stats: {
            attack: 52,
            defense: 43,
            hp: 39,
            'special-attack': 60,
            'special-defense': 50,
            speed: 65
        },
        type: 'fire',
        attacks: [
            { name: 'ember', maxDamage: 25, minDamage: 10, maxCount: 10 },
            { name: 'scratch', maxDamage: 18, minDamage: 8, maxCount: 12 },
            { name: 'flamethrower', maxDamage: 50, minDamage: 30, maxCount: 3 }
        ]
    },
    {
        abilities: ['torrent', 'rain-dish'],
        base_experience: 63,
        category: 'quadruped',
        cries: {
            latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg',
            legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/7.ogg'
        },
        height: 5,
        id: 7,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        name: 'Squirtle',
        stats: {
            attack: 48,
            defense: 65,
            hp: 44,
            'special-attack': 50,
            'special-defense': 64,
            speed: 43
        },
        type: 'water',
        attacks: [
            { name: 'water gun', maxDamage: 25, minDamage: 10, maxCount: 10 },
            { name: 'tackle', maxDamage: 20, minDamage: 12, maxCount: 10 },
            { name: 'hydro pump', maxDamage: 60, minDamage: 35, maxCount: 2 }
        ]
    },
    {
        abilities: ['static', 'lightning-rod'],
        base_experience: 112,
        category: 'quadruped',
        cries: {
            latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg',
            legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg'
        },
        height: 4,
        id: 25,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        name: 'Pikachu',
        stats: {
            attack: 55,
            defense: 40,
            hp: 35,
            'special-attack': 50,
            'special-defense': 50,
            speed: 90
        },
        type: 'electric',
        attacks: [
            { name: 'thunder jolt', maxDamage: 40, minDamage: 20, maxCount: 10 },
            { name: 'electro ball', maxDamage: 60, minDamage: 45, maxCount: 6 },
            { name: 'volt tackle', maxDamage: 75, minDamage: 60, maxCount: 4 },
            { name: 'thunder crack', maxDamage: 160, minDamage: 130, maxCount: 2 }
        ]
    }
];