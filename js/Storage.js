class Storage {
    static getItems() {
        let items = JSON.parse(localStorage.getItem('cartList'))
        if(!items) {
            items = []
        }
        return items
    }

    static addItem(item) {
        const items = this.getItems()
        items.push(item)
        localStorage.setItem('cartList', JSON.stringify(items))
    }

    static removeItem(item) {
        const items = this.getItems()
        items.forEach(({title, img}, index) => {
            if(title === item.title && img === item.img) {
                items.splice(index, 1)
            }
        });
        localStorage.setItem('cartList', JSON.stringify(items))
    }
}

export default Storage;