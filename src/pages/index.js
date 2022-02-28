import { h } from "preact";

export default (props) => (
  <div>
    <h1>Write a Rust Hello, World!</h1>
    <p>prints "hello, world" to the console using the println! macro</p>
    <a
      href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=5adfb8fa7b4abaca5ee4f8e48af8b86c"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      Run Program!
    </a>
  </div>
);
