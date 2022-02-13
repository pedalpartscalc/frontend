<script lang="ts">
  import Tailwindcss from "./Tailwindcss.svelte";
  import { Validators } from "./lib/Validators";
  import Form from "./lib/Form.svelte";
  import Input from "./lib/Input.svelte";
  import Error from "./lib/Error.svelte";
  import Select from "./lib/Select.svelte";
  import AvailableParts from "./AvailableParts.svelte";

  let form = {
    name: {
      validators: [Validators.required],
    },
    food: {
      validators: [Validators.required],
    },
  };

  let formEl;

  function onSubmit(e) {
    if (e?.detail?.valid) {
      console.log(e.detail.data);
      setTimeout(() => formEl.reset(), 1000);
    } else {
      console.log("Invalid Form");
    }
  }
</script>

<Tailwindcss />
<main>
  <h1>Pedal Parts Calculator</h1>
  <h3>
    Find out what guitar pedals you can build with the parts you have on hand.
  </h3>

  <AvailableParts />

  <Form {form} on:submit={onSubmit} bind:this={formEl}>
    <div>
      <Input label="Name" name="name" />
      <Error fieldName="name" errorKey="required" message="Name is required" />
    </div>
    <div>
      <Select label="Favorite food" name="food">
        <option value="chocolate">Chocolate</option>
        <option value="pizza">Pizza</option>
      </Select>
    </div>
    <button type="submit">Submit</button>
  </Form>
</main>
