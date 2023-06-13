// console.log(document.getElementById("item-container"));
class AddItemsCategory {
    
    constructor() {
        this.name = '';
        this.category = '';
    }

    get(name, category) {
        this.name = name;
        this.category = category;

    }
    
    set() {
        const itemContainer = document.getElementById("item-container");
        const section = document.createElement('section');
        const ul = document.createElement('ul');
        const h2 = document.createElement('h2');
               
        itemContainer.appendChild(section).classList.add('category-section');
        section.appendChild(h2);
        section.appendChild(ul).classList.add('products-container');
        h2.textContent = this.category;
        ul.id = this.name;
 
    }
    // console.log(itemContainer);
}

// get('ulのid名'(重複付加),'categoryのh2テキスト')
myTown = new AddItemsCategory();
myTown.get('town', '僕らの町・レールセット');
myTown.set();

baby = new AddItemsCategory();
baby.get('baby', '赤ちゃん用おもちゃ');
baby.set();

japan = new AddItemsCategory();
japan.get('japan', '和のおもちゃ');
japan.set();

tea = new AddItemsCategory();
tea.get('tea', 'お茶セット');
tea.set();

decoration = new AddItemsCategory();
decoration.get('decoration', '飾り小物');
decoration.set();

toy = new AddItemsCategory();
// get('ulのid名','categoryのh2テキスト')
toy.get('new-toy', 'スペシャルオンラインSHOPの限定商品');
toy.set();