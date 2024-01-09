import React from 'react';
// import './App.css'; // Make sure Tailwind CSS classes are accessible

function Login() {
  return (
    <>
    

    <div className="flex justify-center items-center h-screen bg-slate-400">
  <div className="w-full max-w-screen-lg">
    <form className="bg-red-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:flex-row">
      <img src='https://res.cloudinary.com/dsyln8j3g/image/upload/v1693994631/BImage_2023-01-15T03-44-44.317Z_image_ojknrz.jpg' className="w-full md:w-1/2 h-auto rounded-t-2xl md:rounded-2xl md:rounded-l-none" alt="Image"></img>
      <div className="w-full md:w-1/2 p-4">
      <span className="font-family:'Dancing Script',cursive">Choose your footwear</span>

        {/* <!-- Your form content --> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700" id="username" type="text" placeholder="Enter your username" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"  >Contact No:</label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700" id="phone" type="text" placeholder="Enter your contact no:" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2"  >Password</label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700" id="password" type="password" placeholder="**********" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
        </div>
      </div>
    </form>
  </div>
</div>

    {/* <div className='flex items-center justify-center h-screen bg-slate-500'>
      <div className='w-full max-w-xs'>
        <form className='bg-red-400 shadow-md rounded-md px-8 pt-6 pb-8'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Username
            </label>
            <input type='text'  className='border rounded w-full py-2 px-3'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold'>
              Password
            </label>
            <input type='password'  className='border rounded w-full py-2 px-3'/>
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md' type='button'>
              Login
            </button>
          </div>

        </form>

      </div>

    </div> */}
    </>
  );
}

export default Login;
