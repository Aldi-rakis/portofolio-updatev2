import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export default function CreateProject() {
  const editorRef = useRef(null);
  const [projectName, setProjectName] = useState('');
  const [date, setDate] = useState('');
  const [stack, setStack] = useState('');
  const [role, setRole] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async () => {
    if (!editorRef.current) return;

    const description = editorRef.current.getContent();

    const formData = new FormData();
    formData.append('ProjectName', projectName);
    formData.append('description', description);
    formData.append('stack', JSON.stringify(stack.split(',').map(s => s.trim())));
    formData.append('role', JSON.stringify(role.split(',').map(r => r.trim())));

    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }

    try {
      const res = await axios.post('http://localhost:3200/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('✅ Success:', res.data);
      // Reset form after successful submission
       alert('✅ Project berhasil disimpan!');
      setProjectName('');
      setStack('');
      setRole('');
      setImages([]);
      // refresh the page
      window.location.reload();
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="bg-blue-50 p-6 rounded shadow w-full mt-20 max-w-1xl lg:px-40 space-y-4">
        <h1 className="text-xl font-bold">Create Project</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input
    type="text"
    placeholder="Project Name"
    value={projectName}
    onChange={(e) => setProjectName(e.target.value)}
    className="w-full border px-3 py-2 rounded"
  />

    <input
    type="text"
    placeholder="Tanggal project"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="w-full border px-3 py-2 rounded"
  />

  <input
    type="text"
    placeholder="Stack (pisahkan dengan koma, contoh: React, Node.js)"
    value={stack}
    onChange={(e) => setStack(e.target.value)}
    className="w-full border px-3 py-2 rounded"
  />

  <input
    type="text"
    placeholder="Role (pisahkan dengan koma, contoh: frontend, backend)"
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full border px-3 py-2 rounded"
  />

  <input
    type="file"
    multiple
    onChange={(e) => setImages([...e.target.files])}
    className="w-full border px-3 py-2 rounded"
  />
</div>


       <Editor
  apiKey='m1vzrisqzhcslkwnqqe1osswwhef8tqqxz7i8y0mdm1tv8jh'
  onInit={(evt, editor) => (editorRef.current = editor)}
  initialValue="<p>Deskripsi proyek di sini...</p>"
  init={{
    height: 400,
    menubar: true,
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
      'preview', 'anchor', 'searchreplace', 'visualblocks',
      'code', 'fullscreen', 'insertdatetime', 'media', 'table',
      'help', 'wordcount', 'formatselect' // ✅ penting!
    ],
  toolbar:
  'blocks | Horizontal line | bold italic backcolor | ' +
  'alignleft aligncenter alignright alignjustify | ' +
  'bullist numlist outdent indent | removeformat | help | image preview | undo redo',
    block_formats:
      'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Pre=pre', // ✅ ini yang munculin pilihan
    placeholder: "Start typing here..."
  }}
/>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Project
        </button>
      </div>
    </div>
  );
}
