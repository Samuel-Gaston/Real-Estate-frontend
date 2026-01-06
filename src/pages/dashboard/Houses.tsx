import '../../components/All.css'
import { FaUser, FaBox, FaPlus, FaEdit } from "react-icons/fa"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrash3Fill } from "react-icons/bs";
import Sidebar from '../../components/Sidebar.tsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

type House = {
  id: number;
  name: string;
  price: string;
  description: string;
  location: string;
  image?: string;
}

const Houses = () => {
  const navigate = useNavigate();

  // Modal and form states
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [houses, setHouses] = useState<House[]>([]);

  // Fetch all houses
  const getAllHouses = () => {
    axios.get("http://localhost:8000/api/houses")
      .then((res) => setHouses(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllHouses();
  }, []);

  // Add house
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

    axios.post("http://localhost:8000/api/houses", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'House added successfully.',
          icon: 'success',
          confirmButtonColor: 'rgb(70, 148, 179)'
        });
        setShowModal(false);
        resetForm();
        getAllHouses();
      })
      .catch(err => console.log(err));
  }

  // Update house
  const handleUpdate = () => {
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
    if (file) formData.append("image", file);

    axios.post(`http://localhost:8000/api/house/${editId}?_method=PUT`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(() => {
        Swal.fire({
          title: 'Updated!',
          text: 'House updated successfully.',
          icon: 'success',
          confirmButtonColor: 'rgb(70, 148, 179)'
        });
        setShowModal(false);
        resetForm();
        getAllHouses();
      })
      .catch(err => console.log(err));
  }

  // Delete house
  const deleteHouse = (id: number) => {
    axios.delete(`http://localhost:8000/api/houses/${id}`)
      .then(() => {
        Swal.fire({
          title: 'Deleted!',
          text: 'House deleted successfully.',
          icon: 'success',
          confirmButtonColor: 'rgb(70, 148, 179)'
        });
        setHouses(houses.filter(h => h.id !== id));
      })
      .catch(err => console.log(err));
  }

  // Reset form fields
  const resetForm = () => {
    setIsEdit(false);
    setEditId(null);
    setName("");
    setPrice("");
    setDescription("");
    setLocation("");
    setFile(null);
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
        <h1 className='text-xl'>House Management</h1>
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
          {/* Houses Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-white text-sm uppercase" style={{ backgroundColor: 'rgb(70, 148, 179)', padding:10 }}>
                  <th className="py-3 px-6 text-left" style={{padding:10}}>
                    <div className="flex items-center gap-2">
                      <FaUser /> Name
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
                      </div></th>
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
                {houses.map((h, index) => (
                  <tr key={h.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-lime-50`}>
                    <td className="py-3 px-6" style={{padding:10}}>{h.name}</td>
                    <td className="py-3 px-6">{h.price}</td>
                    <td className="py-3 px-6">{h.description}</td>
                    <td className="py-3 px-6">{h.location}</td>
                    <td className="py-3 px-6">
                      {h.image && <img src={`data:image/jpeg;base64,${h.image}`} width={50} height={50} />}
                    </td>
                    <td className="py-3 px-6">
                      <FaEdit
                        className='text-green-500 cursor-pointer inline'
                        size={20}
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(h.id);
                          setName(h.name);
                          setPrice(h.price);
                          setDescription(h.description);
                          setLocation(h.location);
                          setFile(null);
                          setShowModal(true);
                        }}
                      />
                      <BsFillTrash3Fill
                        onClick={() => deleteHouse(h.id)}
                        className='text-red-500 cursor-pointer inline ml-2'
                        size={20} style={{marginLeft:5}}
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
      <h3 className="text-center mt-5 mb-5">{isEdit ? "Update House" : "Add New House"}</h3>
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

export default Houses;
