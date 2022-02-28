import { h } from "preact";

{
  /* <h1>Write a Rust Hello, World!</h1>
    <p>prints "hello, world" to the console using the println! macro</p>
    <a
      href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=5adfb8fa7b4abaca5ee4f8e48af8b86c"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      Run Program!
    </a>
     */
}
export default (props) => (
  <div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">
                Write a Rust Hello, World!
              </h3>
              <span class="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs font-medium bg-orange-100 rounded-full">
                Playground
              </span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">
              prints "hello, world" to the console using the println! macro
            </p>
          </div>
          {/* <img
            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt=""
          /> */}
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                href="https://gist.github.com/5adfb8fa7b4abaca5ee4f8e48af8b86c"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                {/* <!-- Heroicon name: solid/mail --> */}
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-3">View Code</span>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=5adfb8fa7b4abaca5ee4f8e48af8b86c"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                {/* <!-- Heroicon name: solid/phone --> */}
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-3">Run Program</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
