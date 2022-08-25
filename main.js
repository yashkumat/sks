let items = {
    sandwich:[
        {
            item : 0,
            type: 'sandwich',
            name: 'Cheese Sandwich',
            price: 40,
            tags: ["cheese"]
        },
        {
            item : 1,
            type: 'sandwich',
            name: 'Cheese Grilled Sandwich',
            price: 45,
            tags: [ "cheese", "hot"]
        },
        {
            item : 2,
            type: 'sandwich',
            name: 'Veg Sandwich',
            price: 30,
            tags: ["vegetable"]
        },
        {
            item : 3,
            type: 'sandwich',
            name: 'Veg Grilled Sandwich',
            price: 40,
            tags: ["vegetable", "hot"]
        },
        {
            item : 4,
            type: 'sandwich',
            name: 'Veg Cheese Sandwich',
            price: 35,
            tags: ["vegetable", "cheese"]
        },
        {
            item : 5,
            type: 'sandwich',
            name: 'Veg Cheese Grilled Sandwich',
            price: 45,
            tags: ["hot", "vegetable", "cheese"]
        },
        {
            item : 6,
            type: 'sandwich',
            name: 'Chocolate Sandwich',
            price: 40,
            tags: ["chocolate"]
        },
        {
            item : 7,
            type: 'sandwich',
            name: 'Chocolate Grilled Sandwich',
            price: 45,
            tags: ["hot", "chocolate"]
        },
        {
            item : 8,
            type: 'sandwich',
            name: 'Chutney Cheese Sandwich',
            price: 40,
            tags: ["spicy", "cheese"]
        },
        {
            item : 9,
            type: 'sandwich',
            name: 'Chutney Cheese Grilled Sandwich',
            price: 45,
            tags: ["spicy", "hot", "cheese"]
        },
        {
            item : 10,
            type: 'sandwich',
            name: 'Awesome Meet Sandwich',
            price: 40,
            tags: ["capcicum", "onion", "tomato"],
            premium : true
        },
        {
            item : 11,
            type: 'sandwich',
            name: 'Friendship Sandwich',
            price: 40,
            tags: ["corn", "paneer", "capcicum", 'onion'],
            premium : true
        },
        {
            item : 12,
            type: 'sandwich',
            name: 'Ultimate Sandwich',
            price: 40,
            tags: ["corn", "paneer", "sauce", "onion", "capcicum", "spicy"],
            premium : true
        },
        {
            item : 13,
            type: 'sandwich',
            name: 'Love Sandwich',
            price: 40,
            tags: ["corn", "paneer", "sauce", "capcicum", "onion", "spicy"],
            premium : true
        },
        {
            item : 14,
            type: 'sandwich',
            name: 'Commitment Sandwich (Triple Laye)',
            price: 60,
            tags: ["vegetable", "sauce", "capcicum", "cheese"],
            premium : true
        },

        {
            item : 15,
            type: 'sandwich',
            name: 'Sexy Sandwich',
            price: 60,
            tags: ["spicy", "capcicum", "paneer", 'cheese'],
            premium : true
        },
        {
            item : 16,
            type: 'sandwich',
            name: 'Break-Up Sandwich',
            price: 45,
            tags: ["paneer", "corn", "cheese"],
            premium : true
        },
        {
            item : 17,
            type: 'sandwich',
            name: 'Patch-Up Sandwich',
            price: 60,
            tags: ["corn", "paneer", "sauce", "cheese"],
            premium : true
        },
        {
            item : 18,
            type: 'sandwich',
            name: 'Concept Sandwich',
            price: 70,
            tags: ["capcicum", "olives", "sauce", "corn", "garlic", 'tomato'],
            premium : true
        },
        {
            item : 19,
            type: 'sandwich',
            name: 'Last Seen Sandwich',
            price: 70,
            tags: ["spicy", "paneer", "sauce", "cheese"],
            premium : true
        },
        {
            item : 20,
            type: 'sandwich',
            name: 'Moon Light Sandwich',
            price: 120,
            tags: ["paneer", "butter", "sauce", "cheese"],
            premium : true
        },
        {
            item : 21,
            type: 'sandwich',
            name: 'New Light Sandwich',
            price: 120,
            tags: ["corn", "paneer", "olives", "sauce", 'cheese'],
            premium : true
        },
    ],
    burger: [
        {
            item : 0,
            type: 'burger',
            name: 'Veg Crispy Burger',
            price: 50,
            tags: ["hot"]
        },
        {
            item : 1,
            type: 'burger',
            name: 'Spicy Paneer Burger',
            price: 60,
            tags: ["spicy", "paneer", "hot"]
        },
        {
            item : 2,
            type: 'burger',
            name: 'Masala Paneer Burger',
            price: 60,
            tags: ["spicy", "paneer", "hot"],
            premium: true
        },
        {
            item : 3,
            type: 'burger',
            name: 'Schezwan Paneer Burger',
            price: 60,
            tags: ["spicy", "paneer", "sauce", "hot"]
        },
        {
            item : 4,
            type: 'burger',
            name: 'Tandoor Paneer Burger',
            price: 70,
            tags: ["spicy", "paneer", "sauce", "hot"],
            premium: true
        },
    ],
    pizza: [
        {
            item : 0,
            type: 'pizza',
            name: 'Awesome pizza',
            price: 70,
            tags: ["capcicum", "onion", "tomato"]
        },
        {
            item : 1,
            type: 'pizza',
            name: 'Chesse Corn pizza',
            price: 70,
            tags: ["capcicum", "onion", "corn"]
        },
        {
            item : 2,
            type: 'pizza',
            name: 'Paneer Tikka pizza',
            price: 90,
            tags: ["capcicum", "onion", "sauce", "paneer"],
            premium: true
        },
        {
            item : 3,
            type: 'pizza',
            name: 'Luxury pizza',
            price: 120,
            tags: ["capcicum", "onion", "paneer", "olives"],
            premium: true
        },
    ],
    maggi: [
        {
            item:0,
            type:"maggi",
            name: "Plain Maggi",
            price: 25,
            tags: []
        },
        {
            item:1,
            type:"maggi",
            name: "Veg Masala Maggi",
            price: 35,
            tags: ["spicy", "vegetable"]
        },
        {
            item:2,
            type:"maggi",
            name: "Special Veg Maggi",
            price: 40,
            tags: ["vegetable", "sauce"],
            premium: true
        },
        {
            item:3,
            type:"maggi",
            name: "Veg Cheese Masala Maggi",
            price: 40,
            tags: ["spicy", "cheese"],
            premium: true
        },
        {
            item:4,
            type:"maggi",
            name: "Chesse Corn Maggi",
            price: 50,
            tags: ["cheese", "corn"]
        },
        {
            item:5,
            type:"maggi",
            name: "Butter Garlic Maggi",
            price: 60,
            tags: ["butter", "garlic"]
        },
        {
            item:6,
            type:"maggi",
            name: "Butter Corn Maggi",
            price: 50,
            tags: ["butter", "corn"]
        },
        {
            item:7,
            type:"maggi",
            name: "Punjabi Maggi",
            price: 60,
            tags: ["spicy", "vegetable", "sauce"],
            premium: true
        },
        {
            item:8,
            type:"maggi",
            name: "Paneer Butter Masala Maggi",
            price: 70,
            tags: ["paneer", "butter", "spicy"],
            premium: true
        },
    ],
    beverages: [
        {
            item: 0,
            type: "beverages",
            name: "Cold Coffee",
            price: 20,
            tags: ["cold-coffee"]
        },
        {
            item: 1,
            type: "beverages",
            name: "Thick Coffee",
            price: 30,
            tags: ["cold-coffee"]
        },
        {
            item: 2,
            type: "beverages",
            name: "White Coffee",
            price: 40,
            premium: true,
            tags: ["cold-coffee"]
        },
        {
            item: 3,
            type: "beverages",
            name: "Cold Chocolate",
            price: 20,
            tags: ["cold-coffee"],
        },
        {
            item: 4,
            type: "beverages",
            name: "Thick Chocolate",
            price: 30,
            tags: ["cold-coffee"]
        },
        {
            item: 5,
            type: "beverages",
            name: "Hot Coffee",
            price: 20,
            tags: ["hot-coffee"]
        },
        {
            item: 6,
            type: "beverages",
            name: "Tea",
            price: 10,
            tags: ["hot-coffee"]
        },
    ],
    toast: [
        {
            item: 0,
            type: "toast",
            name: "Cheese Chilly Toast",
            price: 40,
            tags: ["cheese", "spicy"]            
        },
        {
            item: 1,
            type: "toast",
            name: "Cheese Garlic Toast",
            price: 40,
            tags: ["cheese", "garlic"]            
        },
        {
            item: 2,
            type: "toast",
            name: "Cheese Corn Toast",
            price: 50,
            tags: ["cheese", "corn"]            
        },
        {
            item: 3,
            type: "toast",
            name: "Paneer Cheese Burst Toast",
            price: 50,
            tags: ["cheese", "paneer"]            
        },
        {
            item: 4,
            type: "toast",
            name: "Pizza Toast",
            price: 60,
            tags: ["capcicum", "corn", "cheese", "paneer"],
            premium:true            
        },
        {
            item: 0,
            type: "toast",
            name: "SK Special Toast",
            price: 70,
            tags: ["capcicum", "corn", "cheese", "paneer" ,"sauce"],
            premium: true            
        },
    ]
}

let cart = items


window.onload = function(){

        let burgerContainer = document.getElementById('burger-menu')
        let burgerBody = items['burger'].map(e=>makeItem(e))
    
        for (let index = 0; index < burgerBody.length; index++) {
            var element = new DOMParser().parseFromString(burgerBody[index], "text/html");
            burgerContainer.append(element.getElementsByClassName('menu-item')[0])
        }

        let sandwichContainer = document.getElementById('sandwich-menu')
        let sandwichBody = items['sandwich'].map(e=>makeItem(e))

        for (let index = 0; index < sandwichBody.length; index++) {
            var element = new DOMParser().parseFromString(sandwichBody[index], "text/html");
            sandwichContainer.append(element.getElementsByClassName('menu-item')[0])
        }

        let pizzaContainer = document.getElementById('pizza-menu')
        let pizzaBody = items['pizza'].map(e=>makeItem(e))

        for (let index = 0; index < pizzaBody.length; index++) {
            var element = new DOMParser().parseFromString(pizzaBody[index], "text/html");
            pizzaContainer.append(element.getElementsByClassName('menu-item')[0])
        }

        let maggiContainer = document.getElementById('maggi-menu')
        let maggiBody = items['maggi'].map(e=>makeItem(e))

        for (let index = 0; index < maggiBody.length; index++) {
            var element = new DOMParser().parseFromString(maggiBody[index], "text/html");
            maggiContainer.append(element.getElementsByClassName('menu-item')[0])
        }

        let beveragesContainer = document.getElementById('beverages-menu')
        let beveragesBody = items['beverages'].map(e=>makeItem(e))

        for (let index = 0; index < beveragesBody.length; index++) {
            var element = new DOMParser().parseFromString(beveragesBody[index], "text/html");
            beveragesContainer.append(element.getElementsByClassName('menu-item')[0])
        }

        let toastContainer = document.getElementById('toast-menu')
        let toastBody = items['toast'].map(e=>makeItem(e))

        for (let index = 0; index < toastBody.length; index++) {
            var element = new DOMParser().parseFromString(toastBody[index], "text/html");
            toastContainer.append(element.getElementsByClassName('menu-item')[0])
        }
    

    function makeItem(y){

        let tag = []

        for(let i = 0; i< y.tags.length; i++){
            if(y.tags[i] == "spicy"){
                tag.push('<img src="chilli.png" class="ingredient-img" />')
            }else if(y.tags[i] == "hot"){
                tag.push('<img src="hot.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "corn"){
                tag.push('<img src="corn.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "onion"){
                tag.push('<img src="onion.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "paneer"){
                tag.push('<img src="paneer.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "capcicum"){
                tag.push('<img src="capcicum.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "olives"){
                tag.push('<img src="olive.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "tomato"){
                tag.push('<img src="tomato.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "butter"){
                tag.push('<img src="butter.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "cheese"){
                tag.push('<img src="cheese.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "garlic"){
                tag.push('<img src="garlic.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "vegetable"){
                tag.push('<img src="vegetable.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "chocolate"){
                tag.push('<img src="chocolate.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "cold-coffee"){
                tag.push('<img src="cold-coffee.png" class="ingredient-img" />')
            }
            else if(y.tags[i] == "hot-coffee"){
                tag.push('<img src="hot-coffee.png" class="ingredient-img" />')
            }
        }


        let item = 
            '<div class="menu-item">';

            if(y.premium){
                item += '<span class="premium-tag">Premium</span>';
            }

            item +=
                '<div class="item-name">'+ y.name +'</div>'+
                '<div class="item-details">'+
                    '<div class="item-price" >&#8377; '+ y.price +'</div>'+
                    '<div class="item-type">'+ tag.join(" ") +'</div>'+
                '</div>'+
                '<div class="addToCart">'+
                    '<button type="button" class="menu-button add" onclick="addToCart(\''+ y.type +'\',\''+ y.item +'\')">+</button>'+
                    '<span class="item-quantity-span" id="'+ y.type + y.item +'">0</span>'+
                    '<button type="button" class="menu-button remove" onclick="removeFromCart(\''+ y.type +'\',\''+ y.item +'\')">-</button>'+
                '</div>'+
            '</div>'

        return item;
    }   

    
    
}

let message = ""
let whatsappNumber = "+919527526222"

function cartTotal(){
    let total_items = 0;
    let total_amount = 0
    message = ""
    for (const property in cart) {
        for (const property2 in cart[property]){
            if(cart[property][property2].quantity){
                total_items++
                total_amount += cart[property][property2].quantity * cart[property][property2].price
                message += '\n'
                message += `${cart[property][property2].name } :  ${cart[property][property2].quantity}`;
            }
        }
    }
    message += '\n\n'

    message += "Total: Rs." + total_amount

    document.getElementById('cart_total_item').innerHTML = total_items
}


function addToCart(a,b){

    if(cart[a][b].quantity){
        cart[a][b].quantity++
    }else{
        cart[a][b].quantity = 1
    }
    document.getElementById(a+b).innerHTML = cart[a][b].quantity
    cartTotal()
}

function removeFromCart(a,b){

    if(cart[a][b].quantity > 0){
        cart[a][b].quantity--
    }else{
        cart[a][b].quantity = 0
    }
    document.getElementById(a+b).innerHTML = cart[a][b].quantity
    cartTotal()
}

function openCart(){
    document.getElementById('openCart').style.display = 'block'

    let cartList = document.getElementById('cart-list')
    cartList.innerHTML = ""

    let total = 0

    for (const property in cart) {
        for (const property2 in cart[property]){
            if(cart[property][property2].quantity){
                total += cart[property][property2].quantity * cart[property][property2].price
                let item = document.createElement('li')
                item.innerText = `${cart[property][property2].name } x ${cart[property][property2].quantity} = ${cart[property][property2].quantity * cart[property][property2].price }`
                cartList.append(item)
            }
        }
    }

    if(total == 0){
        document.getElementById('cart-footer').style.display = 'none'
        document.getElementsByClassName('total-line')[0].style.display = "none"
        document.getElementById('cart-total').innerHTML = "<div style='padding-top:50px;'>Cart empty! <a href='#sandwich-section' onclick='hideCart()' class='add-items-now-link'>Add Items Now &#8594;</a></div>"
    }else{
        document.getElementById('cart-footer').style.display = 'block'
        document.getElementById('cart-body').style['padding-top'] = '50px'
        document.getElementsByClassName('total-line')[0].style.display = "block"
        document.getElementById('cart-total').innerHTML = "Total: &#8377; " + total
    }
}

function hideCart(){
    document.getElementById('openCart').style.display = 'none'
}

function sendOrderOnWhatsapp(){

          
            let order = ''
    
            let name = document.getElementById('name').value
    
            order += 'Thanking for ordering from SK Sandwich Hub.\n\n'
    
            order += 'Your Name: ' +name + '\n'
    
            order += '\nYour Order:'
    
            order += message

            order += '\n'
    
            let msg = encodeURI(order);
    
            // console.log(msg)
            window.open(`https://wa.me/${whatsappNumber}/?text=${msg}`, '_blank');
}