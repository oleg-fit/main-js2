class Goods2 extends Goods {
    constructor(a, b, c, d, r, f,v) {
        super(a, b, c, d, r, f);
        this.sale = v;
    }

    draw() {
        if (this.sale) {
            document.querySelector(this.out).innerHTML = `<div>
                                                                                    <p>Распродажа</p>
                                                                                </div>`;
        }

        document.querySelector(this.out).innerHTML += `<div>
                                                                                    <img src="${this.image}">
                                                                                    <p>${this.name}</p>
                                                                                    <p>${this.price}</p>
                                                                                </div>`;
        
    }
};