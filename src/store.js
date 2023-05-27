import { writable } from "svelte/store";

export const count = writable({
    buttons: {
        title: "Button",
        codedesc: [
            {
                title: "Classic button",
                bg: "#b8fffe",
                code: `
                <button  style="padding:10px;margin:0px;border:2px solid #000;border-radius:5px;background-color:#fff;color:#000;font-size:20px;box-shadow:4px 4px 0px #000a19;">Submit</button>
                `,

            },
            {
                title: "Primary button",
                bg: "#b8fffe",
                code: `<button class="btnx basic">Download </button>  
                <style>
                    .btnx {
                        padding: 10px;
                        border: 2px solid black;
                        border-radius: 5px;
                        background-color: #f1f1f1;
                        font-size: 20px;
                        cursor: pointer;
                        color: black;
                        transition: all 0.2s ease-in-out;
                        transform: scale(1);
                    }
                    .btnx:active {
                      border: 2px solid black;
                      transition: all 0.2s ease-in-out;
                      transform: scale(0.83);
                    } 
         
                    .basic {
                        background-color: #65cffd;
                    }
                    .basic:hover {
                        transform: translate(-3px, -3px);
                        box-shadow: 4px 4px #002231;
                        transition: all 0.2s ease-in-out;
                    }
                </style>`,

            },
            {
                title: "Secondary button",
                bg: "#b8fffe",
                code: `<button class="btnx sv_animate">Download </button>  
                <style>
                    .btnx {
                        padding: 10px;
                        border: 2px solid black;
                        border-radius: 5px;
                        background-color: #f1f1f1;
                        font-size: 20px;
                        cursor: pointer;
                        color: black;
                        transition: all 0.2s ease-in-out;
                        transform: scale(1);
                    }
                    .btnx:active {
                      border: 2px solid black;
                      transition: all 0.2s ease-in-out;
                      transform: scale(0.83);
                    } 
         
                    .sv_animate {
                        background-color: #65fd8b;
                    }
                    .sv_animate:hover {
                        transform: translate(-3px, -3px);
                        box-shadow: 4px 4px #002b1b;
                        transition: all 0.2s ease-in-out;
                    }
                </style>`,

            },
            {
                title: `Tertiary button  <span class="badge badge-primary badge-outline p-3 mx-1" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span> `,
                bg: "#021534",
                code: `<button class="btn btn-outline hover:bg-sky-500">Cool Stuff </button>`,
            }

        ]
    },
    cards: {
        title: "Cards",
        codedesc: [
            {
                title: `Simple Card <span class="badge badge-primary badge-outline p-3 mx-1" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span>`,
                code: `<div class="card  
                 card-side bg-base-100 shadow-xl group transition-all duration-100 border flex flex-col md:flex-row">
                <figure><img src="https://i.pinimg.com/564x/58/cf/ee/58cfee91db3873880fd5a183ff3a24af.jpg" class="w-full md:w-56 rounded-t-2xl md:rounded-t-none rounded-r-2xl md:rounded-r-none  " alt="Movie"/></figure>
                <div class="card-body group-hover:bg-base-200 rounded-r-2xl rounded-l-2xl transition-all duration-100">
               
                  <h2 class="card-title transition-all duration-100 group-hover:text-sky-500 md:text-3xl text-2xl font-bold">Aesthetics UI Card</h2>
                  <div>
                  <span class="badge badge-primary badge-outline p-3  group-hover:bg-primary group-hover:text-gray-900" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1 group-hover:bg-primary group-hover:text-gray-900" > Tailwind CSS </span>
                  </div>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>`,

            }, {
                title: `Secondary button <span class="badge badge-primary badge-outline p-3 mx-1" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span>`,
                code: `<div class="card md:w-96  bg-base-100 transition-all duration-100 
              shadow-xl group">
                <figure><img src="https://i.pinimg.com/564x/70/0e/7f/700e7ff79fa9f3d94ea5fb2ea1e18182.jpg" alt="Shoes"  /></figure>
                <div class="card-body group-hover:border-sky-500 border-b-2 border-l-2 border-r-2 rounded-b-xl">
                  <h2 class="card-title group-hover:text-sky-400 font-bold md:text-3xl text-2xl">Title of Card</h2>
                  <p>Hover over Card to See the Change. Your Welcome </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary btn-outline group-hover:bg-primary group-hover:text-gray-900 ">Buy Now</button>
                  </div>
                </div>
              </div>`,
            }
        ]
    },
    navbar: {
        title: "Navbar",
        codedesc: [
            {
                title: "Simple Navbar",
                code: `<button class="btn btn-primary">Primary</button>`,
                output: `<button class="btn btn-primary">Primary</button>`

            }, {
                title: "Secondary button",
                code: `<button class="btn btn-secondary">Secondary</button>`,
                output: `<button class="btn btn-primary">Primary</button>`
            }
        ]
    },

});
