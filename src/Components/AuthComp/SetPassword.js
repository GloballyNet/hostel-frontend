
export const SetPassword = () => {
  const handlesubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <section className='w-[25%] mt-[3%] mx-[auto] max-h-screen'>
      <div>
          <h1 className='text-xl font-bold mb-[10%]'>Sign in or create an account</h1>
          <form onSubmit={handlesubmit} className='flex flex-col'>
            <label className='font-[500] text-sm mb-[1%]' htmlFor="password">Enter Password</label>
            <input required autoComplete='off' className='outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-[5%] text-[14px] px-[2%] py-[1%] font-[50] border-[1px] rounded border-black' type="password" id='password' name='password' placeholder='Enter your password' />
            <label className='font-[500] text-sm mb-[1%]' htmlFor="confirm_password">Confirm Password</label>
            <input required autoComplete='off' className='outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-[5%] text-[14px] px-[2%] py-[1%] font-[50] border-[1px] rounded border-black' type="confirm_password" id='confirm_password' name='password' placeholder='Enter your password' />
            <button className='bg-blue-600 text-white rounded py-[2%]'>Continue</button>
          </form>
        </div>
        <div className='mt-[5%] border-b-[1px] pb-[5%]'>
          <p className="text-xs text-center">By signing in or creating an account, you agree with our <span className="text-blue-600">Terms & conditions</span> and <span className="text-blue-600">Privacy statement</span></p>
        </div>
        <div className='mt-[5%]'>
          <p className="text-xs text-center">All rights reserved. Copyright 2024 - HostelManage.com™</p>
        </div>
    </section>
  )
}
