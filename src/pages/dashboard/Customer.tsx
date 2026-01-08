import '../../components/All.css'
import { FaUser,FaBox } from "react-icons/fa"
import Sidebar from '../../components/Sidebar';
import { useState, useEffect } from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import axios from 'axios';
import Swal from 'sweetalert2';
type Customer = {
  id:number;
   name:string;
   email:string;
   password:string;
   role:string;
}
const Customer = () => {
    
      const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [product, setProduct] = useState("")
    const [AllCustomers, setAllCustomers] = useState<Customer[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, product })
    setShowModal(false)
    setName("")
    setProduct("")
  }

    const getAllCustomers  = () =>{
      axios.get("http://127.0.0.1:8000/api/register").then((res) =>{
        setAllCustomers(res.data)
      })
    }

    useEffect(() =>{
      getAllCustomers();
    },[]);

   const deleteCustomer = (id: number) => {
  axios.delete(`/api/register/${id}`)
    .then(() => {
      Swal.fire({
      title: 'Success!',
      text: 'You have successfully deleted this user.',
      icon: 'success',
      confirmButtonText: 'OK',
        confirmButtonColor:'rgb(70, 148, 179)'
      });
      
      getAllCustomers();
    })
    .catch(err => {
      Swal.fire({
        title: 'Error!',
        text: err.response?.data?.message || 'Failed to delete user',
        icon: 'error',
        confirmButtonColor: 'rgb(70, 148, 179)'
      });
    });
};


  

  return (
    <div>
            <div>
        <div className='dashboard'>
            <div className='left-dashboard'>
              <div className="text-2xl font-bold text-white" style={{fontFamily:"'Times New Roman', Times, serif", fontWeight:'bold'}}>
         <p style={{fontSize:30}}> HomeScope</p>
        </div> <Sidebar />
            </div>
            <div className='right-dashboard'>
        <h1 className='text-xl'>Customer Management</h1>
        <br />
        <br />
 <div className="bg-white rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-100">

      <div className="flex items-center justify-between mb-6">
   
     </div>
<br />
<br />
    
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-white text-sm uppercase"  style={{padding:10, backgroundColor:'rgb(70, 148, 179)'}} >
              <th className="py-3 px-6 text-left font-semibold" style={{padding:10}}>
                <div className="flex items-center gap-2">
                  <FaUser /> Name
                </div>
              </th>
              <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Email
                </div>
              </th>
              {/* <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Password
                </div>
              </th> */}
               {/* <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Role
                </div>
              </th> */}
              <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Action
                </div>
             </th>
            </tr>
          </thead>

          <tbody>
            {AllCustomers.map((c, index) => (
              <tr key={c.id} className={`${ index % 2 === 0 ? "bg-gray-50" : "bg-white" } hover:bg-lime-50 transition-all duration-200`} >
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{c.name}</td>
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{c.email}</td>
                   {/* <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{c.password}</td> */}
                {/* <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{c.role}</td> */}
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">
                  <BsFillTrash3Fill onClick={() => deleteCustomer(c.id)} className='text-red-500 cursor-pointer' size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" >
          <div className="bg-white relative" style={{width:'calc(40% - 20px)', borderRadius:20}}>
            <h3 className="text-center" style={{marginTop:20, marginBottom:20}}>Add New User</h3>

              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{padding:5, width:'calc(77% - 20px)', border:'1px solid limegreen', marginLeft:50, borderRadius:10, textAlign:'center'}}
                required
              />
<br />
<br />
              <input
                type="text"
                placeholder="Enter email"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
               style={{padding:5, width:'calc(77% - 20px)', border:'1px solid limegreen', marginLeft:50, borderRadius:10, textAlign:'center'}}
                 required
              />
              <br />
              <br />
                <button  type="button" onClick={() => setShowModal(false)} style={{
                    backgroundColor:'orange',
                    marginLeft:50,
                    padding:5,
                    marginBottom:20,
                    width:'calc(40% - 20px)',
                    cursor:'pointer',
                    borderRadius:10
                }}>Cancel</button>
                <button onClick={handleAdd} style={{
                      backgroundColor:'limegreen',
                      cursor:'pointer',
                    marginLeft:10,
                    padding:5,
                    marginBottom:50,
                    marginTop:20,
                    width:'calc(40% - 20px)',
                    borderRadius:10
                }}>Add</button>

          </div>
        </div>
      )}
    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Customer;