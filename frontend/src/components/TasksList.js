import Task from './Task'

export default function TasksList() {
  return (
    <div>
<div class=" mt-16 h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-4/6">
        { /* Header Section */} 
        <div class="mb-4">
            <h1 class="text-gray-800 font-semibold text-2xl">Todo List</h1>
            <div class="flex mt-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                <button
            type="button"
            class=" flex bg-blue-600 text-gray-100 px-6  items-center  hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            <span>Add</span>
            
          </button>
            </div>
        </div>
        
        <Task/>
        { /* Footer Section */}
        <div class="flex text-gray-600 mt-5 place-content-evenly">
        <span>3 Tasks left</span>
        <span>
          <button type='submit'>Clear All Completed Tasks</button>
        </span>
      </div>
        
    </div>
</div>
    </div>
  )
}
