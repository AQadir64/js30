const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

function add(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function toggleItem(e) {
  if (!e.target.matches("[type=checkbox]")) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  console.log(items[index]);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(items = [], itemsList) {
  itemsList.innerHTML = items
    .map((item, id) => {
      return `     
      <li>
          <input type="checkbox" data-index=${id} id="item${id}" ${
        item.done ? "checked" : ""
      } />
          <label for="item${id}">${item.text}</label>
        </li> `;
    })
    .join("");
}

addItems.addEventListener("submit", add);
populateList(items, itemsList);
itemsList.addEventListener("click", toggleItem);
