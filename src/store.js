import { writable } from "svelte/store";

export const count = writable({
    button: { title: "Button", types: 3 },

});