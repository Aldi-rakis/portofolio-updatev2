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
  const [bannerImage, setBannerImage] = useState(null);
  const [existingBanner, setExistingBanner] = useState('');

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
        setExistingBanner(data.banner_image || '');
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

    if (bannerImage) {
      formData.append('banner_image', bannerImage);
    }

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
    <div className="min-h-screen bg-gray-900 dark:bg-gray-50 flex justify-center items-start p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-6xl mt-20 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">Update Project</h1>
          <p className="text-gray-600 dark:text-gray-400">Edit dan perbarui detail proyek Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Masukkan nama project"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Tanggal Project</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Contoh: Januari 2024"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Link Project</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="https://example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Technology Stack</label>
            <input
              type="text"
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="React, Node.js, MongoDB (pisahkan dengan koma)"
            />
          </div>

          <div className="space-y-2 lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Role & Responsibilities</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Frontend Developer, UI/UX Designer (pisahkan dengan koma)"
            />
          </div>

          <div className="lg:col-span-1 space-y-4">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Banner Project Saat Ini</label>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              {existingBanner && (
                <div className="relative group">
                  <img
                    src={existingBanner}
                    alt="Current Banner"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          </div>

          
          <div className="lg:col-span-1 space-y-4">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Gambar Project Saat Ini</label>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="flex flex-wrap gap-4">
                {existingImages.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={img}
                      alt={`preview-${idx}`}
                      className="w-45 object-cover border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">Preview</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

           <div className="lg:col-span-1 space-y-2 h-full">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Upload Banner Baru</label>
          <input
            type="file"
            onChange={(e) => setBannerImage(e.target.files[0])}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-200"
          />
        </div>

       


            <div className="lg:col-span-1 space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Upload Gambar Baru</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages([...e.target.files])}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-200"
          />
        </div>
        </div>
        
       

       


        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Deskripsi Project</label>
          <div className="bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
            <Editor
              apiKey="m1vzrisqzhcslkwnqqe1osswwhef8tqqxz7i8y0mdm1tv8jh"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={description}
              init={{
                height: 400,
                menubar: true,
                skin: 'oxide',
                content_css: 'default',
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                  'preview', 'anchor', 'searchreplace', 'visualblocks',
                  'code', 'fullscreen', 'insertdatetime', 'media', 'table',
                  'help', 'wordcount', 'formatselect'
                ],
                toolbar:
                  'quickbars_selection_toolbar | blocks fontfamily fontsize | bold underline strikethrough italic backcolor  | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | removeformat | image preview | undo redo | help',
                block_formats:
                  'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Pre=pre',
                placeholder: 'Tulis deskripsi detail tentang proyek Anda...',
                content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 14px; }',
              }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleUpdate}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            💾 Update Project
          </button>
          <button
            onClick={() => window.history.back()}
            className="flex-1 sm:flex-none bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            ← Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
