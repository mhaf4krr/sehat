let UIObject = {
  counter: 0,
  selected_items: [],
  test_desc_list: document.querySelector(".test_description_list"),
  selected_list: document.querySelector(".selection_list"),

  addToSelectedList: function (clicked_item) {
    let test_title = clicked_item.children[0].innerText;
    let list_item = document.createElement("li");
    list_item.setAttribute("counter", this.counter);
    list_item.innerHTML = `
            <span> ${test_title} </span> <button class="remove" onclick="UIObject.removeElement(${this.counter})"> Remove </button>
      `;

    this.selected_items.push(list_item);
    this.counter++;

    this.renderSelectedItems();
  },

  removeElement: function (counter_value) {
    let new_selected_items = this.selected_items.filter((item) => {
      let item_counter = item.getAttribute("counter");
      console.log("Item Counter ", item_counter);
      console.log("Counter", counter_value);
      return item_counter != counter_value;
    });

    UIObject.selected_items = new_selected_items;

    this.renderSelectedItems();
  },

  initializeEventListeners: function () {
    let that = this;
    this.test_desc_list.addEventListener("click", function (event) {
      if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Add") {
        let parent_li = event.target.parentNode;
        that.addToSelectedList(parent_li);
      } else return;
    });
  },

  renderSelectedItems: function () {
    let serial = 1;
    let holder = document.createElement("ul");
    this.selected_items.forEach((item) => {
      let li = document.createElement("li");
      //
      li.setAttribute("counter", item.getAttribute("counter"));

      li.innerHTML = ` <span> (${serial++}) </span> ${item.innerHTML}`;
      holder.appendChild(li);
    });

    this.selected_list.innerHTML = holder.innerHTML;
  },
};

UIObject.initializeEventListeners();
