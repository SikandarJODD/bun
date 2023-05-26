import { writable } from "svelte/store";

export const count = writable({
    button: {
        title: "Button",
        codedesc: [
            {
                title: "Classic button",
                bg: "#b8fffe",
                code: `
                <button  style="padding:10px;margin:0px;border:2px solid #000;border-radius:5px;background-color:#fff;color:#000;font-size:20px;box-shadow:4px 4px 0px #000a19;">Submit</button>
                `,
                desc: ` hello i m desc 2`,
                output: `
                <button  style="padding:10px;margin:0px;border:2px solid #000;border-radius:5px;background-color:#fff;color:#000;font-size:20px;box-shadow:4px 4px 0px #000a19;">Submit</button>
                `
            },
            {
                title: "Primary button",
                bg: "#021534",
                code: `<button class="btn btn-primary">Primary</button>`,
                desc: `hello i m desc 1`,
                output: `<button class="btn btn-primary">Primary</button>`


            },
            {
                title: "Secondary button",
                bg: "#021534",
                code: `<button class="btn btn-secondary">Secondary</button>`,
                desc: ` hello i m desc 2`,
                output: `<button class="btn btn-primary">Primary</button>`
            },

        ]
    },
    card: {
        title: "Cards",
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
