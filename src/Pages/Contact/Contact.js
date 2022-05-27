import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {

    const form = useRef();

    const sendEmail = async(e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_imdhxdm', 'template_7ni7f1b', e.target, 'pR2e2k8Zwapn0DICQ')
         .then((result) => {
             console.log(result);
              if(result?.status === 200){
                swal("Successfully", "Send Email", "success");
                e.target.reset();
              }else{
                swal("OPPSS!!", "Something Wrong", "error");
              }

          },);
      };


    return (
    <div className="bg-gradient-to-l from-secondary to-accent text-left h-96 w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                <form ref={form} onSubmit={sendEmail}>
                <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                        <input name="from_name" tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                        <input name="from_email" tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                        <input name="from_company" tabIndex={0} arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                        <input name="from_country" tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                        <textarea name="message" tabIndex={0} aria-label="leave a message" type="text" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" />
                    </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                <div className="flex items-center justify-center w-full pb-32">
                    <button type="submit" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-secondary rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none">SUBMIT</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;