import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './projectDetail.module.scss';
import { useSelector } from 'react-redux';
export default function ProjectDetail() {
  const { id } = useParams(); // ambil ID dari URL
//   const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

    const projects = useSelector((state) => state.projects.list);
    console.log(projects); // ambil list project dari Redux

  // cari project berdasarkan ID (pastikan tipe datanya sama, string/number)
  const project = projects.find(p => String(p.projectID) === id);
 
//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const res = await axios.get(`http://31.97.50.232:3200/api/projects/${id}`);
//         setProject(res.data.data);
//         console.log(res);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching project:', err);
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id]);

//   if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!project) return <div className="p-10 text-center text-red-500">Project not found.</div>;

  return (
    <div className={`${styles.wrapper} min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6`}>
      <div className="max-w-4xl mx-auto rounded shadow p-8 space-y-6">
        <h1 className="text-3xl font-bold">{project.ProjectName}</h1>

  <div>
          <h2 className="text-lg font-semibold">Stack:</h2>
          <div className="flex gap-4 ml-6">
            {project.stack.map((item, idx) => (
              <p className='my-2 bg-amber-50 rounded-full px-6 py-1 max-w-max' key={idx}>{item}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.image.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Project image ${idx}`}
              className="w-full h-full object-cover rounded "
            />
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold mt-6 mb-2">Deskripsi:</h2>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

      
        <div>
          <h2 className="text-lg font-semibold">Role:</h2>
          <div className="lis ml-6">
            {project.role.map((item, idx) => (
              <p className='my-2 bg-amber-50 rounded p-2' key={idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
