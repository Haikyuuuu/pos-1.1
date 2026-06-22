// ================= LOGIN CHECK =================
if(localStorage.getItem("loggedIn") !== "true"){
  if(!location.href.includes("login.html")){
    location.href = "login.html";
  }
}

// ================= USER =================
function loadUser(){
  const el = document.getElementById("user");
  if(el){
    el.innerText = localStorage.getItem("username") || "User";
  }
}

// ================= SIDEBAR =================
function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("hide");
}

// ================= NAVIGATION =================
function go(page){
  location.href = page + ".html";
}

// ================= PRODUCTS =================
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(){
  const list = document.getElementById("list");
  if(!list) return;

  list.innerHTML = products.map((p,i)=>`
    <tr>
      <td>${p.name}</td>
      <td>${p.price}</td>
      <td>${p.stock}</td>
      <td><button onclick="delProduct(${i})">X</button></td>
    </tr>
  `).join("");
}

function addProduct(){
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  if(!name || !price || !stock){
    alert("Isi semua field");
    return;
  }

  products.push({name,price,stock});
  localStorage.setItem("products", JSON.stringify(products));

  renderProducts();
}

function delProduct(i){
  products.splice(i,1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

// ================= INIT =================
window.onload = function(){
  loadUser();
  renderProducts();
}