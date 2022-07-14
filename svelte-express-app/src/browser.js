//import axios from axios;

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { text: createField.value })
    .then(function (response) {
      // Create the HTML for the new item
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus(); // focuses cursor on this field.
    })
    .catch(function () {
      console.log("Please try again later.");
    });
});
