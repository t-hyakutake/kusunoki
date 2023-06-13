// categoryの入力が必須なので、まずはcategory.jsでcategoryの取得から

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
        // console.log(targetUl);

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

// categoryがない場合は category.jsでインスタンス化してください
anb = new Item();
anb.get('town', 'images/car-k01s.jpg', 'RA-C01', '救急車', '1080', '5');
anb.set();
fire = new Item();
fire.get('town', 'images/car-s05.jpg', 'RA-C02', '消防車', '1080', '5');
fire.set();
sport = new Item();
sport.get('town', 'images/car-o01.jpg', 'RA-C03', 'スポーツカー', '1080', '5');
sport.set();
wood = new Item();
wood.get('town', 'images/mokuzai03.jpg', 'RA-C04', '木材運搬車', '1080', '5');
wood.set(); 
head = new Item();
head.get('town', 'images/train-sentou01.jpg', 'RA-T01', '連結・先頭列車', '1080', '5');
head.set();
freight = new Item();
freight.get('town', 'images/train-kasha03.jpg', 'RA-T02', '連結・貨物列車', '1080', '5');
freight.set();
wagon = new Item();
wagon.get('town', 'images/wagon02.jpg', 'RA-T03', '連結・ワゴン(３色)', '1080', '5');
wagon.set();
wood5 = new Item();
wood5.get('town', 'images/train-sentou01.jpg', 'RA-T04', '木(５本セット)', '1080', '5');
wood5.set();


gara = new Item();
gara.get('baby', 'images/kuma01.jpg', 'BB-P01', 'ガラガラ', '1080', '5');
gara.set();
buildBlock = new Item();
buildBlock.get('baby', 'images/tsumiki01.jpg', 'BB-P02', '積み木', '2160', '5');
buildBlock.set();
ton = new Item();
ton.get('baby', 'images/ch-t02.jpg', 'bb-P03', 'トントンボックス', '3240', '5');
ton.set();



daruma = new Item();
daruma.get('japan', 'images/daruma01.jpg', 'WA-T01', 'だるま落とし', '880', '5');
daruma.set();
kendama = new Item();
kendama.get('japan', 'images/kendama01.jpg', 'WA-T02', 'けん玉', '880', '5');
kendama.set();
loop = new Item();
loop.get('japan', 'images/wanage01.jpg', 'WA-T03', '輪投げ', '880', '5');
loop.set();
yoyo = new Item();
yoyo.get('japan', 'images/yo-yo01.jpg', 'WA-T04', 'ヨーヨー', '680', '5');
yoyo.set();
koma = new Item();
koma.get('japan', 'images/koma01.jpg', 'WA-T05', 'コマ', '680', '5');
koma.set();

tea = new Item();
tea.get('tea', 'images/ocha-set01.jpg', 'WA-S01', 'お茶セット', '4320', '5');
tea.set();


cat = new Item();
cat.get('decoration', 'images/neko01.jpg', 'OB-P01', '腰かけ猫', '880', '5');
cat.set();
dog = new Item();
dog.get('decoration', 'images/dog02.jpg', 'OB-P02', 'Dancing Dog', '2160', '5');
dog.set();
candle = new Item();
candle.get('decoration', 'images/candle01.jpg', 'OB-P03', 'キャンドルホルダー', '4320', '5');
candle.set();
decoy = new Item();
decoy.get('decoration', 'images/decoy02.jpg', 'OB-P04', '輪投げ', '3240', '5');
decoy.set();


//  = new Item();
// .get('decoration', '', 'OB-T02', '輪投げ', '880', '5');
// .set();
//  = new Item();
// .get('decoration', '', 'OB-T02', '輪投げ', '880', '5');
// .set();
//  = new Item();
// .get('decoration', '', 'OB-T02', '輪投げ', '880', '5');
// .set();


test = new Item();
// get(categoryUlId, imgSrc, code, name, price, maxNumberBuy(init:5))
test.get('new-toy', 'images/train.jpg', 'MM-12', 'train', '2300', '10');
test.set();