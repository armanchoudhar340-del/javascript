class Bank {
    static accounts = []
    constructor(id, name, amount) {
        this.id = id
        this.name = name
        this.amount = amount
    }

    makeAccount(id, amount) {
        accounts.forEach(value => {
            if (id == value) {
                return 0;
            } else {
                accounts.push({ id, amount })
            }
        })
    }

    withdrawMoney(id, amount, wAmount) {
        // ckeck if user exist
        // amount = amount - wAmount
    }
}