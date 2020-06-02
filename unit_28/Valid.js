class Valid {
    constructor(a, b) {
        this.email = a;
        this.password = b;
        this.isValid = false;
    }

    validate() {
        if (this.password.length > 6) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }
};