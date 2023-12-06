

const Contect = () => {
    return (
        <div id='contact' className="relative">

<img
                src="https://images.pexels.com/photos/774813/pexels-photo-774813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt=""
            />
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

            <h1 className='text-4xl text-center text-black'>Contect Me</h1>
            <form action="https://getform.io/f/280ddb2a-45d2-48de-8619-9e9e1fa1b36a" method="POST" encType='multipart/form-data'>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="text-sm py-2" htmlFor="name" >Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-black/50" type="text" name="name" id="name" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="number" className="text-sm py-2">Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-black/50" type="number" name="number" id="number" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-sm py-2" htmlFor="">Mail id</label>
                    <input className="border-2 rounded-lg p-3 flex border-black/50" type="email" name="email" id="" required />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-sm py-2" htmlFor="">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-black/50" type="text" name="subject" id="" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-sm py-2" htmlFor="">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-black/50" name="textarea" id="" cols="" rows="8"></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="bg-black/50 mt-4 p-4 text-black rounded-md text-[20px]  md:w-auto  cursor-pointer ">Contact from here</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Contect