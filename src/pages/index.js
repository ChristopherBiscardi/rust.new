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
                href="mailto:janecooper@example.com"
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
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span class="ml-3">Email</span>
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
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
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
