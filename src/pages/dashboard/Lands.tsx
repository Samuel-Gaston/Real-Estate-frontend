import '../../components/All.css'
import { FaUser, FaBox, FaPlus, FaEdit } from "react-icons/fa"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrash3Fill } from "react-icons/bs";
import Sidebar from '../../components/Sidebar.tsx';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

type Land = {
  id: number;
  name: string;
  price: string;
  description: string;
  location: string;
  image?: string;
}

const Lands = () => {
  const navigate = useNavigate();

 
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [lands, setLands] = useState<Land[]>([]);


  const getAllLands = () => {
    axios.get("http://localhost:8000/api/lands")
      .then(res => setLands(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getAllLands();
  }, []);

 
  const resetForm = () => {
    setIsEdit(false);
    setEditId(null);
    setName("");
    setPrice("");
    setDescription("");
    setLocation("");
    setFile(null);
  }

 
  const handleSubmit = () => {
    if (!name || !price || !description || !file) {
      Swal.fire({
        title: 'Error!',
        text: 'Fill in all required fields.',
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
    formData.append("image", file);

    axios.post("http://localhost:8000/api/lands", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Land added successfully.',
          icon: 'success',
          confirmButtonColor: 'rgb(70, 148, 179)'
        });
        setShowModal(false);
        resetForm();
        getAllLands();
      })
      .catch(err => console.log(err));
  }

 
  const handleUpdate = () => {
    if (!name || !price || !description || !location) {
      Swal.fire({
        title: 'Error!',
        text: 'Fill in all required fields.',
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
    if (file) formData.append("image", file);

    axios.post(`http://localhost:8000/api/lands/${editId}?_method=PUT`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(() => {
        Swal.fire({
          title: 'Updated!',
          text: 'Land updated successfully.',
          icon: 'success',
          confirmButtonColor: 'rgb(70, 148, 179)'
        });
        setShowModal(false);
        resetForm();
        getAllLands();
      })
      .catch(err => console.log(err));
  }


  const deleteLand = (id: number) => {
    axios.delete(`http://localhost:8000/api/lands/${id}`)
      .then(() => {
        Swal.fire({
          title: 'Deleted!',
          text: 'Land deleted successfully.',
          icon: 'success',
          confirmButtonColor: 'rgb(70, 148, 179)'
        });
        setLands(lands.filter(l => l.id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='dashboard'>
      <div className='left-dashboard'>
        <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          <p style={{ fontSize: 30 }}>HomeScope</p>
        </div>
        <Sidebar />
      </div>
      <div className='right-dashboard'>
        <h1 className='text-xl'>Land Management</h1>
        <br /><br />
        <div className="bg-white rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-100">

          {/* Add / Edit Button */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => { resetForm(); setShowModal(true); }}
              className="flex items-center gap-2 hover:bg-lime-700 text-white px-4 py-2 rounded-lg shadow-md transition"
              style={{ backgroundColor: 'rgb(70, 148, 179)', padding: 10 }}
            >
              <FaPlus /> Add
            </button>
          </div>
<br />
          {/* Lands Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{padding:10}}>
              <thead style={{padding:10}}>
                <tr className="text-white text-sm uppercase" style={{ backgroundColor: 'rgb(70, 148, 179)', padding:10 }}>
                  <th className="py-3 px-6 text-left" style={{padding:6}}>
                    <div className="flex items-center gap-2">
                    <FaUser/>  Name
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">
                     <div className="flex items-center gap-2">
                  <FaBox /> Price
                     </div>
                   </th>
                  <th className="py-3 px-6 text-left">
                   <div className="flex items-center gap-2">
                    <FaBox /> Description
                    </div> 
                    </th>
                  <th className="py-3 px-6 text-left">
                     <div className="flex items-center gap-2">
                     <FaBox /> Location
                      </div> 
                   </th>
                  <th className="py-3 px-6 text-left">
                     <div className="flex items-center gap-2">
                <FaBox /> Image
                     </div>
                  </th>
                  <th className="py-3 px-6 text-left">
                      <div className="flex items-center gap-2">
              <FaBox /> Action
                      </div>
                 </th>
                </tr>
              </thead>
              <tbody>
                {lands.map((l, index) => (
                  <tr key={l.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-lime-50`}>
                    <td className="py-3 px-6" style={{padding:10}}>{l.name}</td>
                    <td className="py-3 px-6">{l.price}</td>
                    <td className="py-3 px-6">{l.description}</td>
                    <td className="py-3 px-6">{l.location}</td>
                    <td className="py-3 px-6">
                      {l.image && <img src={`data:image/jpeg;base64,${l.image}`} width={50} height={50} />}
                    </td>
                    <td className="py-3 px-6">
                      <FaEdit
                        className='text-green-500 cursor-pointer inline'
                        size={20}
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(l.id);
                          setName(l.name);
                          setPrice(l.price);
                          setDescription(l.description);
                          setLocation(l.location);
                          setFile(null);
                          setShowModal(true);
                        }}
                      />
                      <BsFillTrash3Fill
                        onClick={() => deleteLand(l.id)}
                        className='text-red-500 cursor-pointer inline ml-2'
                        size={20} style={{marginLeft:7}} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal */}
 {showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white relative" style={{ width: '40%', borderRadius: 20, padding: 20 }}>
      <h3 className="text-center mt-5 mb-5">{isEdit ? "Update Land" : "Add New Land"}</h3>
<br />
    
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 45%' }}>
          <input
            type="file"
            accept='image/*'
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
          />
        </div>

        <div style={{ flex: '1 1 45%' }}>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ padding: 5, width: '100%', border: '1px solid rgb(70, 148, 179)', borderRadius: 10, textAlign: 'center' }}
          />
        </div>
      </div>

      <br />

      <button
        type="button"
        onClick={() => { setShowModal(false); resetForm(); }}
        style={{ backgroundColor: 'orange', marginLeft: 50, padding: 5, width: '40%', borderRadius: 10, cursor: 'pointer' }}
      >
        Cancel
      </button>

      <button
        onClick={isEdit ? handleUpdate : handleSubmit}
        style={{ backgroundColor: 'rgb(70, 148, 179)', marginLeft: 10, padding: 5, width: '40%', borderRadius: 10, cursor: 'pointer' }}
      >
        {isEdit ? "Update" : "Add"}
      </button>

    </div>
  </div>
)}


        </div>
      </div>
    </div>
  )
}

export default Lands;
