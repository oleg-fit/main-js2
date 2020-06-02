class Valid2 extends Valid {
    constructor(a, b) {
        super(a, b);
        this.emaiError = '';
        this.passwordError = '';
    }

    validate() {
        if (this.email.length == '' ) {
            this.emaiError = 'email empty';
        } 
        
        if (this.password.length < 6) {
            this.passwordError = 'min length 6';
        } else if (this.password.length >= 6) {
            this.isValid = true;
        }
    }
};