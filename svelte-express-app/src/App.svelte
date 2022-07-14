<script src="./browser.js">
  import axios from "axios";
  import { prevent_default, update_await_block_branch } from "svelte/internal";

  let taskName;

  function CreateItem() {
    console.log(taskName + "type: " + typeof taskName);
    try {
      axios
        .post("http://localhost:3000/create-item", { text: taskName })
        .then(console.log("post"));
    } catch (error) {
      console.log(error);
    }
    //   const createItem = fetch("http://localhost:3000/create-item", {
    //     method: "POST",
    //     body: JSON.stringify({ task: taskName }),
    //   })
    //     .then((res) => {
    //       res.json();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple To-Do App</title>

  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
    crossorigin="anonymous"
  />
</svelte:head>

<main>
  <div class="container">
    <h1 class="display-4 text-center py-1">To-Do App</h1>

    <div class="jumbotron p-3 shadow-sm">
      <form
        id="create-form"
        action="/create-item"
        on:submit|preventDefault={CreateItem}
      >
        <div class="d-flex align-items-center">
          <input
            id="create-field"
            name="item"
            autocomplete="off"
            class="form-control mr-3"
            type="text"
            style="flex: 1;"
            bind:value={taskName}
          />
          <button class="btn btn-primary">Add New Item</button>
        </div>
      </form>
    </div>

    <ul id="item-list" class="list-group pb-5" />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
