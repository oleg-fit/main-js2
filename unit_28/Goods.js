class Goods {
    constructor(a, b, c, d, r, f) {
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
        this.out = r;
        this.price = f;
    }

    creatGoods() {
        let goods = {
            name: this.name,
            amount: this.amount
        }

        return goods;
    }

    draw() {
        document.querySelector(this.out).innerHTML = `<div>
                                                                                    <img src="${this.image}">
                                                                                    <p>${this.name}</p>
                                                                                    <p>${this.price}</p>
                                                                                </div>`;
    }

};