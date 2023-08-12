const listItem = ['Node.js','Express','MongoDB','React'];
let index=0;
const list = document.getElementById("list");
const button = document.getElementById("button");

function  addList(){
   if(index<listItem.length){
   
    const newItem = document.createElement("li");   //new tag create kiya 
    newItem.innerText= listItem[index];             //new tag me text dala
    list.appendChild(newItem);                      //new tag ko list me add kar diya (generate)
    index = index+1;                   



   }
   else
   alert("All items have been added!");           //to show alert message at top


}






button.addEventListener("click",addList);