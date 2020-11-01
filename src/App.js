import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Modal from './components/Modal';

function App() {

  const [modelOpen, setModelOpen] = useState(false);
  const [close,setClose] = useState(true);

  const closeAlert = ()=>{
      setClose(true);
      console.log("alert closed");
  }
  const openAlert = ()=>{
      setClose(false);
      console.log("alert closed");
  }

  return (
    <div className="App">
      <Alert message="New Post Successfully added!" isOpen={!close} close={()=>closeAlert()} theme="primary" classes="max-w-sm m-10" />
      <Alert message="New Post Successfully added!" isOpen={!close} close={()=>closeAlert()} theme="primary" position="topRight" type="simple" />

      <Modal size="sm" theme="danger" title="Deactive Account" isOpen={modelOpen} closeModal={()=>setModelOpen(false)}>
        <p>Quasi veniam quaerat quam <a className="text-indigo-600" href="https://componentity.com">totam</a>, magnam culpa dolorum quod incidunt nemo deleniti.</p>
        <div className="bg-gray-50  sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button type="button" className="inline-flex bg-red-600 justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            Deactive
                        </button>
                        </span>
                        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            Cancel
                        </button>
                        </span>
                    </div>
      </Modal>

      <button className="bg-red-500 rounded-sm p-4 text-white" onClick={()=>setModelOpen(true)}>Open Modal</button>
      <button className="bg-blue-500 rounded-sm p-4 text-white" onClick={()=>openAlert()}>Open Alert</button>
    </div>
  );
}

export default App;
