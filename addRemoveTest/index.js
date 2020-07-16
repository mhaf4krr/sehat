

let UIObject = {
    counter : 0,
    selected_items : [],
    test_desc_list : document.querySelector(".test_description_list"),
    selected_list : document.querySelector(".selection_list"),

    addToSelectedList : function(clicked_item){
        let test_title = clicked_item.children[0].innerText
        let list_item = document.createElement("li");
        list_item.setAttribute("counter",this.counter)
        list_item.innerHTML = `
            <span> ${test_title} </span> <button class="remove" onclick="UIObject.removeElement(${this.counter})"> Remove </button>
      `;      
        this.selected_list.appendChild(list_item)
        this.selected_items.push(list_item)
        this.counter++;
    },

    removeElement : function(counter_value){
        let new_selected_items = this.selected_items.filter((item)=>{
           let item_counter = (item.getAttribute('counter'))
           console.log("Item Counter ",item_counter)
           console.log("Counter",counter_value)
           return item_counter !=counter_value
        })

        UIObject.selected_items = new_selected_items
       
        this.renderSelectedItems()
       
    },

    initializeEventListeners : function (){
       let that = this
        this.test_desc_list.addEventListener("click",function(event){
            if(event.target.tagName == "BUTTON" && event.target.innerHTML == "Add"){
                let parent_li = event.target.parentNode;               
                that.addToSelectedList(parent_li)
            }

            else return
           
        })
    },

    renderSelectedItems : function(){

        let holder = document.createElement("li")
        this.selected_items.forEach((item)=>{
            holder.appendChild(item)
        })

       this.selected_list.innerHTML = holder.innerHTML
    }
}


UIObject.initializeEventListeners()