
export default function task() {
  return (
    <div>
      { /* First Task */}
      <div class="flex mt-2 mb-2  items-center justify-between">
        <p class="w-4/6 text-grey-darkest">Add another component to Tailwind Components</p>
        <div className="">
          <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-green-600 border-green-600 hover:text-white  hover:bg-green-600">Done</button>
          <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
          <button class="flex-no-shrink p-2  ml-2 border-2 rounded text-blue-600 border-blue-600 hover:text-white hover:bg-blue-600">Edit</button>
        </div>
      </div>
      <hr />
      { /* Second Task */}
      <div class="flex mt-2 mb-2  items-center justify-between">
        <p class="w-4/6 line-through text-green-600">Submit Todo App Component to Tailwind Components</p>
        <div className="">
        <button class="flex-no-shrink p-2 ml-2 border-2 rounded hover:text-white text-gray-600 border-gray-600 hover:bg-gray-600">Not Done</button>
        <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
        <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-600 border-blue-600 hover:text-white hover:bg-blue-600">Edit</button>
        </div>
      </div>
      <hr />
    </div>
  )
}
