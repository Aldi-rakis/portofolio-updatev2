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
  console.log('projects', projects, status);

  useEffect(() => {
    if (status === 'idle' || status === 'loading') {
      dispatch(fetchProjects())
        ;
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

  //   if (loading) return <div className="
  // -10 text-center">Loading...</div>;
  if (!project) {
    return (
      <div className="min-h-screen text-center flex justify-center items-center bg-gray-900 dark:bg-gray-50 py-10 px-6">
        <h1 className="text-3xl font-bold text-white dark:text-gray-800">Project Not Found</h1>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-50 py-10 px-2 md:px-6">
        <div className={`${styles.wrapper} max-w-5xl mx-auto rounded  p-8 space-y-2`}>
          <a
            href="/projects"
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
            <img
              src={project.banner_image}
              alt="Project Banner"
              className="w-full  object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <span className="uppercase text-xl font-clash tracking-widest text-white dark:text-gray-800 font-semibold">Stack</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.stack.map((item, idx) => (
                  <span
                    className=" bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full px-4 py-1 text-xs font-semibold shadow"
                    key={idx}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="uppercase text-Xl font-clash tracking-widest text-white dark:text-gray-800 font-semibold">Role</span>
              <div className="flex flex-row flex-wrap gap-2 mt-1">
                {project.role.map((role, idx) => (
                  <span
                    key={idx}
                    className=" bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full px-4 py-1 text-xs font-semibold shadow"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>






          <div>
            {/* <h1 className="text-4xl text-white dark:text-gray-800 font-semibold mt-6 mb-2">Deskripsi:</h1> */}
            <div
              className={`${styles.wrapper} prose max-w-none`}
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>

       
        </div>
      </div>
    );
  }


}
