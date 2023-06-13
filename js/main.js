'use strict'
// 旧ｊｓ　呼び出し型のｊｓです

// 送料無料になる金額
const freePostagePrice = 5000;
// 全国一律送料
const postagePrice = 1000


// カートの配列
let cart = []; 


const paymentBtn = document.getElementById("to-payment");
// console.log(document.getElementById("cart-list").childElementCount);

const cartList = document.getElementById("cart-list");

// 決済に行くボタン
paymentBtn.addEventListener("click", () => {
    if (cartList.childElementCount) {
        alert("決済に行く、けど行きません");
    // } else if (total > 20000){
    //     document.getElementById("alert").classList.add("display-block");
    } else {
        alert("カートに購入商品を入れてください");
    };
});


// カートの中に一致するproductnameがないか探す
function findCart(productName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            return i;
        }
    }
    // カートに同一商品名がないとき
    return -1;
}


//cartに追加する関数
function addToCart(productName, productPrice, quantityId) {
    let quantitySelect = document.getElementById(quantityId);
    let quantity = parseInt(quantitySelect.value);

    console.log(findCart(productName))

    // カートに同一商品名がある時はアラート
    if (findCart(productName) !== -1) {
        alert("重なります");
        return;
    }


    // cartにpush と　数量確認
    if (quantity > 0) {
        let totalPrice = productPrice * quantity;

        // 商品情報をオブジェクト化
        let item = {
            name: productName,
            quantity: quantity,
            price: productPrice,
            total: totalPrice
        };
        cart.push(item);

        // カートの表示を更新
        updateCartDisplay();

        alert(quantity + "個の" + productName + "をカートに追加しました。合計金額: " + totalPrice + "円");
    } else {
        alert("数量を選択してください。");
    }
}

  let cartTotal = document.getElementById("cart-total");

// カートの更新関数
function updateCartDisplay() {

    let cartTotal = document.getElementById("cart-total");

    // カートの表示をクリア
    cartList.innerHTML = "";

    // カート内の商品情報を表示
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = item.name + "（個数: " + item.quantity +
            "、合計金額: " + item.total + "円）";


        // cartのアイテム削除ボタンを作成
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "×";
        deleteButton.value = i; // 削除ボタンに対応するアイテムのインデックスを設定

        // 削除ボタンのクリックイベント
        function removeFromCart(index) {
            cart.splice(index, 1); // カートからアイテムを削除
        
            // カートの中身が０で０円表示
            if (cart.length === 0) {
                cartTotal.innerHTML = "合計金額: 0円";
            }
            updateCartDisplay(); // カートの表示を更新
        }



        deleteButton.addEventListener("click", function (event) {
            const index = event.target.value; // クリックされたボタンの値（アイテムのインデックス）を取得
            removeFromCart(index); // カートからアイテムを削除
        });
         // 削除ボタンをリストアイテムに追加
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


const slideCart = document.getElementById('slide-at-cart');
slideCart.addEventListener('click', () => {
    slideCart.style.display = 'none';
})  