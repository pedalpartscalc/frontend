<script lang="ts">
  import { setContext } from "svelte";
  import type { ValidatorFn, ValidatorResult } from "./Validators";
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  export let form: {
    [inputName: string]: {
      validators: ValidatorFn[];
    };
  } = {};

  let formEl;

  const dispatch = createEventDispatcher();
  let errors = writable({});

  function onBlur(e) {
    validateField(e.target.name, e.target.value);
  }

  function isFormValid(): boolean {
    return !Object.values($errors).some((field) =>
      Object.values(field).some(
        (errorObject: ValidatorResult) => errorObject.error
      )
    );
  }

  function validateField(field, value) {
    form[field]?.validators &&
      form[field].validators.forEach((fn) => {
        const error = fn(value);
        errors.update((e) => {
          e[field] = { ...e[field], ...error };
          return e;
        });
      });
  }

  function validateForm(data: { [inputName: string]: any }): void {
    Object.keys(data).forEach((field) => validateField(field, data[field]));
    // run validator for any validators that do not have a value
    // `select`s and `checkbox`s do not have a value
    Object.keys(form).forEach((field) => {
      if (!Object.keys(data).includes(field)) {
        validateField(field, "");
      }
    });
  }

  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data: any = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    validateForm(data);

    return dispatch("submit", { valid: isFormValid(), data });
  }

  export function reset() {
    formEl.reset();
  }

  setContext("form", { errors, onBlur });
</script>

<form on:submit|preventDefault={onSubmit} bind:this={formEl}>
  <slot />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  :global(form > div) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  :global(form > div + *) {
    margin-top: 10px;
  }
</style>
