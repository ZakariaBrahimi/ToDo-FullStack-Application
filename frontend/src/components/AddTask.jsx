
const AddTask = ({addTask, setNewTask, taskStatus}) => {
    
  return (
    <>
    <form onSubmit={(e)=>{addTask(e)}} class="flex mt-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                <button type="submit"
            class=" flex bg-blue-600 text-gray-100 px-6  items-center  hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            Add
            
          </button>
    </form>
    </>
  )
}

export default AddTask;
