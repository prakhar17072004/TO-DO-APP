function addItem(event){
    event.preventDefault();
    let text =document.getElementById("todo-input");
    db.collection("todo-items").add({
        text:text.value,
        status:"active",
    })
    text.value="";
}
function getItems(){
    db.collection("todo-items").onSnapshot((snapshot)=>{
        let items=[];
        console.log(snapshot.docs[0].data())
        snapshot.docs.forEach((doc)=>(
            items.push({
                id:doc.id,
                ...doc.data()
            })
        ))
        generateItems(items);
    })
}
function generateItems(items){
    let itemsHMTL="";
    items.forEach((item)=>{
        itemsHMTL+= ` 
                        <div class="todo-item">
                            <div class="check">
                                <div data-id="${item.id}"class="check-mark"${item.status=="completed"?"checked":""}>
                                    &check;
                                </div>
                                

                            </div>
                            <div class="todo-text" ${item.status=="completed"?"checked":""}>
                               ${item.text}
                            </div>
                        </div>
        
                       
        `
        
    })
document.querySelector(".todo-items").innerHTML=itemsHMTL;
    createEventListeners();
}
function createEventListeners(){
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
  todoCheckMarks.forEach((checkMark)=>{
    checkMark.addEventListener("click",function(){
        markCompleted(checkMark.dataset.id);
    })
  })
}
function markCompleted(id){
    //from a database
   let item = db.collection("todo-items").doc(id);
   item.get().then(function(doc){
    if(doc.exists){
        let status=doc.data().status;
        if(status=="active"){
            item.update({
                status:"complete"
            })
        }else if(status=="completed"){
            item.update({
                status:"active"
            })
        }
    }
   })

}
   

getItems();