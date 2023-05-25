import { writable } from "svelte/store";

export const count = writable({
    button: {
        title: "Button",
        codedesc: [
            {
                title: "Primary button",
                code: `<button class="btn btn-primary">Primary</button>`,
                desc: `hello i m desc 1`,
                output: `<button class="btn btn-primary">Primary</button>`

            }, {
                title: "Secondary button",
                code: `<button class="btn btn-secondary">Secondary</button>`,
                desc: ` hello i m desc 2`,
                output: `<button class="btn btn-primary">Primary</button>`
            }
        ]
    },

});
