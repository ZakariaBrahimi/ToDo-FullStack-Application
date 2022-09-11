import { Link } from "react-router-dom"

export default function Page404() {
  return (
    <>

<div class="flex items-center justify-center min-h-screen bg-white">
    <div class="flex flex-col">

         {/* Error Container */}
        <div class="flex flex-col items-center">
            <div class="text-indigo-500 font-bold text-7xl">
                404
            </div>

            <div class="font-bold text-3xl xl:text-5xl lg:text-6xl md:text-5xl mt-10">
                page not found
            </div>

            <div class="text-gray-400 text-sm md:text-xl lg:text-xl mt-8">
                Sorry, We couldn't find the page you're looking for.
            </div>
        </div>

         {/* Continue With */} 
        <div class="flex flex-col mt-4">
            <Link to='/' className="text-indigo-600 font-bold uppercase">
                Go back Home
            </Link>

        </div>
    </div>
</div>
    </>
  )
}
