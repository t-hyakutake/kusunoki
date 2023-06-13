// easy_my_shop用のアイテム作成js

class Item {
    
    constructor () {
    
        this.categoryUl = '';
        this.imgSrc = '';
        this.code = '';
        this.name = '';
        this.price = '';
        this.maxNumberBuy = '5';

    };

    get(categoryUl, imgSrc, code, name, price, maxNumberBuy) {

        // category.jsで作ったulのid
        this.categoryUl = categoryUl;
        this.imgSrc = imgSrc;
        // 型番など
        this.code = code;
        this.name = name;
        this.price = parseInt(price);
        this.maxNumberBuy = maxNumberBuy;

        
        // get()で未定義の場合this.maxNumberBuyの初期値にする
        if (maxNumberBuy !== undefined) {
            this.maxNumberBuy = parseInt(maxNumberBuy);
          } else {
            this.maxNumberBuy = parseInt(this.maxNumberBuy);
          }
    }

    // インスタンス化、getterで取得したアイテムを表示
    set() {
        
        // category.jsで作ったulを取得
        const targetUl = document.getElementById(this.categoryUl);
        console.log(targetUl);

        const itemLi = document.createElement('li');
        
        targetUl.appendChild(itemLi);
        itemLi.classList = 'product';

        const imgDiv = document.createElement('div');
        const commentDiv = document.createElement('div'); 

        
        itemLi.appendChild(imgDiv);
        imgDiv.classList = 'img-container';
        imgDiv.alt = this.name;
        
        itemLi.appendChild(commentDiv);
        commentDiv.classList = 'product-comments'

        const img = document.createElement('img');
        img.src= this.imgSrc;
        img.alt = this.name;
        imgDiv.appendChild(img);

        const productId = document.createElement('p');
        commentDiv.appendChild(productId);
        productId.classList = 'product-id';
        productId.innerHTML = this.code;

        const productName = document.createElement('p');
        commentDiv.appendChild(productName);
        productName.classList = 'product-name';
        productName.innerHTML = this.name;

        const productPrice = document.createElement('p');
        commentDiv.appendChild(productPrice);
        productPrice.classList = 'product-price'
        productPrice.innerHTML = this.price;

        const selectForm = document.createElement('form');
        commentDiv.appendChild(selectForm);
        selectForm.classList = 'select-form';
        selectForm.id = 'form' + this.code;




        // const option = function(maxNumberBuy) {

        //     for (i = 0; i < maxNumberBuy; i++) {
        //         let opt = document.createElement('option');
        //         selectForm.appendChild(opt);
        //     }

        // }
        
       
        const quantitySelect = document.createElement('select');
        quantitySelect.name = 'quantity';
        quantitySelect.id = `quantity${this.code}`;
        selectForm.appendChild(quantitySelect);

        // maxNumberBuy個、<select>に<option>を追加
        for (let i = 0; i < this.maxNumberBuy + 1; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            quantitySelect.appendChild(option);
        }

        const toCart = document.createElement('input');
        toCart.classList.add('to-cart');
        toCart.type = 'button';
        toCart.value = 'cart';
        // toCart.setAttribute('onclick', `addToCart('${this.name}', ${this.price}, 'quantity${this.code}')`);
        toCart.setAttribute('onclick', 'addToCart(this)');
        selectForm.appendChild(toCart);






    }


    
    
}
