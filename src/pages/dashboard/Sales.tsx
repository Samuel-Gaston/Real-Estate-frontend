import '../../components/All.css'
import { FaUser, FaBox, } from "react-icons/fa"
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';

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

      
        </table>
      </div>

     
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