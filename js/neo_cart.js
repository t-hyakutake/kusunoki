// 送料無料になる金額
const freePostagePrice = 5000;
// 全国一律送料
const postagePrice = 1000


//　カードアイコンの決済に行くボタン
const paymentBtn = document.getElementById("to-payment");
// console.log(document.getElementById("cart-list").childElementCount);
const cartList = document.getElementById("cart-list");
paymentBtn.addEventListener("click", () => {
    if (cartList.childElementCount) {
        alert("決済に行く、けど行きません");
    } else {
        alert("カートに購入商品を入れてください");
    };
});


// カートの配列
let cart = [];

//  cart btn clickでcartに商品情報を表示する
function addToCart(button) {
    
    // clickの親要素を取得
    const parentLi = button.closest('.product');

    const productName = parentLi.querySelector('.product-name').textContent;
    console.log(productName);

    const productPrice = parentLi.querySelector('.product-price').textContent;
    console.log(productPrice);

    const quantity = parentLi.querySelector('form select').value;
    console.log(quantity); 


    // this.cartNameが　cart[]のcartNameと一致したらalert
    if (cart.some(item => item.name === productName)) {
        alert('同じproductNameがあります');
        return;
    }


    // 購入個数が1以上の時、カートに追加
    if(quantity > 0) {

        let totalPrice = productPrice * quantity;

        let item = {
            name: productName,
            quantity: quantity,
            price: productPrice,
            total: totalPrice
        };
        cart.push(item);

        console.log(cart);

        updateCartDisplay();

        alert(quantity + "個の" + productName + "をカートに追加しました。合計金額: " + totalPrice + "円");

    } else {
        alert("数量を選択してください。");
    }

}

// cartの合計金額表示 部分
let cartTotal = document.getElementById("cart-total");

// カートの更新
function updateCartDisplay() {


    // カートの表示をクリア
    cartList.innerHTML = "";

    // カート内の商品情報を表示
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = item.name + "（個数: " + item.quantity +
            "、合計金額: " + item.total + "円）";


        // カート情報の配列削除
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "×";
        deleteButton.value = i; // 削除ボタンに対応するアイテムのインデックスを設定

        // 削除ボタンでcartの配列splice
        function removeFromCart(index) {
            cart.splice(index, 1); 
        
            // カートの中身が０で０円表示。無いと送料無料が消えない
            if (cart.length === 0) {
                cartTotal.innerHTML = "合計金額: 0円";
            }
            updateCartDisplay(); 
        }



        deleteButton.addEventListener("click", function (event) {
            const index = event.target.value; // クリックされたボタンの値（アイテムのインデックス）を取得
            removeFromCart(index); // カートからアイテムを削除
        });
        
        listItem.appendChild(deleteButton);

        cartList.appendChild(listItem);
    }

    // カートの合計金額を表示
    let total = calculateCartTotal();
    
}

// 合計金額
function calculateCartTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].total;
        cartTotal.innerHTML = "合計金額: " + total + "円";
    }
    // 送料込み表示
    if (total < freePostagePrice && total > 0) {
        total += postagePrice;
        cartTotal.innerHTML = `合計金額: ${total} 円(送料 ${postagePrice}円含)`;
    }
    return total;
}


const postageComment = document.getElementById('postage-comment');
postageComment.classList.add("postage-comment")
postageComment.innerHTML = `送料は全国一律${postagePrice}円、購入合計 ${freePostagePrice}円以上送料無料`;


// cartへスライドするボタンを消去する
const slideCart = document.getElementById('slide-at-cart');
slideCart.addEventListener('click', () => {
    slideCart.style.display = 'none';
})  