import '../../components/All.css'
import { FaUser,  FaBox,FaPlus } from "react-icons/fa"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrash3Fill } from "react-icons/bs";
import Sidebar from '../../components/Sidebar.tsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";

type Apartment = {
  id:number;
  name:string;
  price:string;
  description:string;
  location:string;
  image?: string;
}
const Apartments = () => {
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
const [editId, setEditId] = useState<number | null>(null);

            const [showModal, setShowModal] = useState(false)
      const [name, setname] = useState("")
      const [price, setprice] = useState("")
      const [description, setdescription] = useState("")
      const [location, setlocation] = useState("")
      const [file, setFile] = useState<File | null>(null);

      const [Apartments, setApartments] = useState<Apartment[]>([])

       const getAllApartments = () =>{
  axios.get("http://localhost:8000/api/apartments").then((res) =>{
    setApartments(res.data);
  }).catch((error) => console.log(error))
}

useEffect(() =>{
  getAllApartments();
},[])

    
                      const handlesubmit = () =>{
                        if(!name || !price || !description || !file){
                 Swal.fire({
                     title: 'Error!',
                      text: 'Fill in to add a Land.',
                      icon: 'error',
                      confirmButtonText: 'OK',
                      confirmButtonColor:'rgb(70, 148, 179)'
                        })
          }
          else{
    
          const formData = new FormData();
          formData.append("name", name);
          formData.append("price", price);
          formData.append("description", description);
          formData.append("location", location);
          formData.append("image", file);
    
            const res = axios.post("http://localhost:8000/api/apartments", formData, 
        {headers: { "Content-Type": "multipart/form-data" },
            }
          );
          setname(name)
          setprice(price)
          setdescription(description)
          setFile(null)
          setlocation(location)
          Swal.fire({
                title: 'Successful!',
                text: 'You have successfully added an Apartment.',
                icon: 'success',
                confirmButtonText: 'OK',
                  confirmButtonColor:'rgb(70, 148, 179)'
                  })
                     setShowModal(false)
                     
                      navigate("/Apartments")
                  getAllApartments();
          }
                 }
     
             const deleteApartments = (id: number) => {
  axios
    .delete(`http://localhost:8000/api/apartments/${id}`)
    .then(() => {
      setApartments((prevApartment) => prevApartment.filter((House) => House.id !== id));
           Swal.fire({
                title: 'Successful!',
                text: 'You have successfully deleted this Apartment.',
                icon: 'success',
                confirmButtonText: 'OK',
                  confirmButtonColor:'rgb(70, 148, 179)'
                  })
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to delete House");
    });
};

const handleUpdate = async () => {
  if (!name || !price || !description || !location) {
    Swal.fire({
      title: 'Error!',
      text: 'Fill all required fields.',
      icon: 'error',
      confirmButtonColor: 'rgb(70, 148, 179)'
    });
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("location", location);

  if (file) {
    formData.append("image", file);
  }

  try {
    await axios.post(
      `http://localhost:8000/api/apartment/${editId}?_method=PUT`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    Swal.fire({
      title: 'Updated!',
      text: 'Apartment updated successfully.',
      icon: 'success',
      confirmButtonColor: 'rgb(70, 148, 179)'
    });

    setShowModal(false);
    setIsEdit(false);
    setEditId(null);
    getAllApartments();
  } catch (err) {
    console.error(err);
    alert("Update failed");
  }
};

  return (
         <div>
        <div className='dashboard'>
            <div className='left-dashboard'>
              <div className="text-2xl font-bold text-white" style={{fontFamily:"'Times New Roman', Times, serif", fontWeight:'bold'}}>
         <p style={{fontSize:30}}> HomeScope</p>
        </div><Sidebar />
            </div>
            <div className='right-dashboard'>
        <h1 className='text-xl'>Apartment Management</h1>
        <br />
        <br />
 <div className="bg-white rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-100">

      <div className="flex items-center justify-between mb-6">
        <button
     onClick={() => setShowModal(true)}
     className="flex items-center gap-2  hover:bg-lime-700 text-white px-4 py-2 rounded-lg shadow-md transition"
     style={{padding:10, cursor:'pointer', marginBottom:20, marginTop:10, backgroundColor:'rgb(70, 148, 179)'}}><FaPlus /> Add </button> </div>

    
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
                  <FaBox /> Price
                </div>
              </th>
               <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Description
                </div>
              </th>
                <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Location
                </div>
              </th>
                <th className="py-3 px-6 text-left font-semibold">
                <div className="flex items-center gap-2">
                  <FaBox /> Image
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
            {Apartments.map((p, index) => (
              <tr key={p.id}className={`${ index % 2 === 0 ? "bg-gray-50" : "bg-white" } hover:bg-lime-50 transition-all duration-200`} >
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{p.name}</td>
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{p.price}</td>
                 <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{p.description}</td>
                  <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">{p.location}</td>
                  <td>
       {p.image && (
  <img
    src={`data:image/jpeg;base64,${p.image}`}
    width={50}
    height={50}
  />
)}
                  </td>
                <td  style={{padding:10}}  className="py-3 px-6 text-gray-700">
                 <FaEdit
  className="text-green-500 cursor-pointer inline"
  size={20}
  onClick={() => {
    setIsEdit(true);
    setEditId(p.id);
    setname(p.name);
    setprice(p.price);
    setdescription(p.description);
    setlocation(p.location);
    setFile(null); 
    setShowModal(true);
  }}
/>

    <BsFillTrash3Fill onClick={() => deleteApartments(p.id)}  className='text-red-500 cursor-pointer inline' size={20} style={{marginLeft:7}} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white relative" style={{ width: 'calc(40% - 20px)', borderRadius: 20, padding: 20 }}>
      <h3 className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>
        Add New Apartment
      </h3>

     
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 45%' }}>
          <input
            type="file"
            placeholder="Enter Image"
            accept="image/**"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
            required
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
            required
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
            required
          />
        </div>

        <div style={{ flex: '1 1 45%' }}>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
            required
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
            required
          />
        </div>
      </div>

      <br />

      <button
        type="button"
        onClick={() => setShowModal(false)}
        style={{
          backgroundColor: 'orange',
          marginLeft: 50,
          padding: 5,
          marginBottom: 20,
          width: 'calc(40% - 20px)',
          cursor: 'pointer',
          borderRadius: 10
        }}
      >
        Cancel
      </button>

      <button
        onClick={isEdit ? handleUpdate : handlesubmit}
        style={{
          backgroundColor: 'rgb(70, 148, 179)',
          cursor: 'pointer',
          marginLeft: 10,
          padding: 5,
          marginBottom: 50,
          marginTop: 20,
          width: 'calc(40% - 20px)',
          borderRadius: 10
        }}
      >
        {isEdit ? "Update" : "Add"}
      </button>

    </div>
  </div>
)}

    </div>
            </div>
        </div>
    </div>
  )
}

export default Apartments;