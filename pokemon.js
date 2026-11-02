class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elName = document.getElementById(`name-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, attacks = [], img }) {
        super(selectors);
        this.name = name;
        this.defaultHP = hp;
        this.damageHP = hp;
        this.type = type;
        this.attacks = attacks;
        this.img = img;

        this.renderHP();
        this.renderInfo();
    }

    renderInfo = () => {
        this.elName.innerText = this.name;
        this.elImg.src = this.img;
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife = () => {
        this.elHP.innerText = `${this.damageHP} / ${this.defaultHP}`;
    }

    renderProgressbarHP = () => {
        const percent = (this.damageHP / this.defaultHP) * 100;
        this.elProgressbar.style.width = `${percent}%`;

        // Умови для кольорів шкали здоров'я (.low та .critical)
        this.elProgressbar.classList.remove('low', 'critical');
        if (percent < 60 && percent > 20) {
            this.elProgressbar.classList.add('low');
        } else if (percent <= 20) {
            this.elProgressbar.classList.add('critical');
        }
    }

    changeHP = (count, cb) => {
        this.damageHP -= count;

        if (this.damageHP <= 0) {
            this.damageHP = 0;
        }

        this.renderHP();
        cb && cb(count);
    }
}

export default Pokemon;