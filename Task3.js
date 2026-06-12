async function getGitHubUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);

    let data = await response.json();

    return data;
}

getGitHubUser('gwindotcool').then(data => console.log(data));

class KCStore {
    constructor() {
        this.products = [];
    }

    addProduct(newProduct) {
        this.products.push(newProduct);
    }

    viewProducts() {
        return this.products;
    }

    updateProduct(id, newName) {
        let index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products[index].name = newName;
        }
    }

    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
    }
}

const store = new KCStore();
store.addProduct({ id: 1, name: "Laptop" });
console.log(store.viewProducts()); // Shows the laptop