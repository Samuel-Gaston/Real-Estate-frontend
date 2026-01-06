import '../../components/All.css'
import { FaUser, FaBoxOpen, FaIdBadge, FaBox, FaHashtag, FaPlus } from "react-icons/fa"
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
type Checkout = {
  id:number;
  name:string;
  method:string;
  date:string;
}
const Sales = () => {
          const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [product, setProduct] = useState("")

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, product })
    setShowModal(false)
    setName("")
    setProduct("")
  }

  const [Checkouts, setCheckouts] = useState<Checkout[]>([])

  return (
          <div className='dashboard'>
            <div className='left-dashboard'>
             <div className="text-2xl font-bold text-white" style={{fontFamily:"'Times New Roman', Times, serif", fontWeight:'bold'}}>
         <p style={{fontSize:30}}> HomeScope</p>
        </div> <Sidebar />
            </div>
            <div className='right-dashboard'>
        <h1 className='text-xl'>Sales Management</h1>
        <br />
        <br />
 <div className="bg-white rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-100">

      <div className="flex items-center justify-between mb-6">
        {/* <button
     onClick={() => setShowModal(true)}
     className="flex items-center gap-2  hover:bg-lime-700 text-white px-4 py-2 rounded-lg shadow-md transition"
     style={{padding:10, cursor:'pointer', marginBottom:20, marginTop:10, backgroundColor:'rgb(70, 148, 179)'}}><FaPlus /> Add </button>  */}
     
     </div>
     <br />
     <br />

    
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-white text-sm uppercase"  style={{padding:10, backgroundColor:'rgb(70, 148, 179)'}} >
              <th className="py-3 px-6 text-left font-semibold" style={{padding:10}}>
                <div className="flex items-center gap-2">
                  <FaUser /> Customer_Name
                </div>
              </th>
              <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Method
                </div>
              </th>
              <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Date/Time
                </div>
              </th>
              <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Action
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {Checkouts.map((check, index) => (
              <tr key={check.id}className={`${ index % 2 === 0 ? "bg-gray-50" : "bg-white" } hover:bg-lime-50 transition-all duration-200`} >
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{check.name}</td>
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{check.method}</td>
                 <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{check.date}</td>
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">
                 <BsFillTrash3Fill className='text-red-500 cursor-pointer' size={20} />
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
            <h3 className="text-center" style={{marginTop:20, marginBottom:20}}>Add New Sales</h3>

              <input
                type="text"
                placeholder="Enter Product_Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{padding:5, width:'calc(77% - 20px)', border:'1px solid limegreen', marginLeft:50, borderRadius:10, textAlign:'center'}}
                required
              />
<br />
<br />
              <input
                type="text"
                placeholder="Enter Customer_Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{padding:5, width:'calc(77% - 20px)', border:'1px solid limegreen', marginLeft:50, borderRadius:10, textAlign:'center'}}
                required
              />
<br />
<br />
              <input
                type="text"
                placeholder="Enter price"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
               style={{padding:5, width:'calc(77% - 20px)', border:'1px solid limegreen', marginLeft:50, borderRadius:10, textAlign:'center'}}
                 required
              />
              <br />
              <br />

                 <input
                type="date"
                placeholder="Enter date"
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
  )
}

export default Sales;