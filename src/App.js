import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Others/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto text-accent">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
