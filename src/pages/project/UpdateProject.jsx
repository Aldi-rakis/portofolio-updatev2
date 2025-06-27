import { useRef, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { form } from 'framer-motion/client';

export default function UpdateProject() {
  const { id } = useParams(); // Ambil project ID dari URL
  const editorRef = useRef(null);
  const [projectName, setProjectName] = useState('');
  const [date, setDate] = useState('');
  const [stack, setStack] = useState('');
  const [role, setRole] = useState('');
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://api-portov2.rakis.my.id/api/projects/${id}`);
        const data = res.data.data;
        console.log(data);

        setProjectName(data.ProjectName);
        setDate(data.date);
        setStack(data.stack.join(', '));
        setRole(data.role.join(', '));
        setLink(data.link);
        setDescription(data.description);
        setExistingImages(data.image || []);
      } catch (err) {
        console.error('❌ Gagal mengambil data project:', err);
      }
    };

    fetchProject();
  }, [id]);

  const handleUpdate = async () => {
    const editorContent = editorRef.current ? editorRef.current.getContent() : '';

    const formData = new FormData();
    formData.append('ProjectName', projectName);
    formData.append('description', editorContent);
    formData.append('link', link);
    formData.append('date', date);
    formData.append('stack', JSON.stringify(stack.split(',').map(s => s.trim())));
    formData.append('role', JSON.stringify(role.split(',').map(r => r.trim())));

    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }

    try {
      const res = await axios.put(`https://api-portov2.rakis.my.id/api/projects/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('✅ Project berhasil diperbarui!');
      window.location.reload();
    } catch (err) {
      console.error('❌ Gagal update:', err.response?.data || err.message);
      alert('❌ Update gagal. Cek server atau koneksi!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="bg-white p-6 rounded shadow w-full mt-20 lg:px-40 space-y-4">
        <h1 className="text-xl font-bold">Update Project</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Project Name"
          />

          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Tanggal project"
          />

          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Masukin link porject anda"
          />

          <input
            type="text"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Stack (pisahkan dengan koma)"
          />

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Role (pisahkan dengan koma)"
          />

          <div>
            <label className="block font-medium mb-1">Gambar saat ini:</label>
            <div className="flex flex-wrap gap-2">
              {existingImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`preview-${idx}`}
                  className="w-20 h-20 object-cover border rounded"
                />
              ))}
            </div>
          </div>
        </div>
        <input
          type="file"
          multiple
          onChange={(e) => setImages([...e.target.files])}
          className="w-full border px-3 py-2 rounded"
        />



        <Editor
          apiKey="m1vzrisqzhcslkwnqqe1osswwhef8tqqxz7i8y0mdm1tv8jh"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={description}
          init={{
            height: 400,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
              'preview', 'anchor', 'searchreplace', 'visualblocks',
              'code', 'fullscreen', 'insertdatetime', 'media', 'table',
              'help', 'wordcount', 'formatselect'
            ],
            toolbar:
              'formatselect | bold italic backcolor | ' +
              'alignleft aligncenter alignright alignjustify | ' +
              'bullist numlist outdent indent | removeformat | image preview | undo redo | help',
            block_formats:
              'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Pre=pre',
            placeholder: 'Edit deskripsi proyek...',
          }}
        />

        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Project
        </button>
      </div>
    </div>
  );
}
