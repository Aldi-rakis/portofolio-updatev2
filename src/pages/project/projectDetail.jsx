import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './projectDetail.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../redux/projectslice';
import { useParams } from 'react-router-dom';
export default function ProjectDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list: projects, status } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

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
    
    <div className="min-h-screen bg-gray-900 dark:bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto rounded shadow p-8 space-y-2">
        <a
          href="/project"
          className="flex items-center text-blue-500 hover:underline mb-4 w-max"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Project
        </a>
        <h1 className="text-3xl  font-bold text-white dark:text-gray-800">{project.ProjectName}</h1>
        
        <div className="flex flex-wrap gap-4">
          {project.image.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Project image ${idx}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          ))}
        </div>

        <div>
          <h1 className="font-bold text-3xl mt-10 text-white dark:text-gray-800">Stack</h1>
          <div className="flex gap-4 ">
            {project.stack.map((item, idx) => (
              <p className='my-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full px-6 py-1 max-w-max' key={idx}>{item}</p>
            ))}
          </div>
        </div>


        <div>
          {/* <h1 className="text-4xl text-white dark:text-gray-800 font-semibold mt-6 mb-2">Deskripsi:</h1> */}
          <div
            className={`${styles.wrapper} prose max-w-none`}
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
