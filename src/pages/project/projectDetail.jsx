import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './projectDetail.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectById } from '../../redux/projectslice';
import { useParams } from 'react-router-dom';
export default function ProjectDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProject: project, projectDetailStatus, projectDetailError } = useSelector((state) => state.projects);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchProjectById(id));
  }, [id, dispatch]);

  // Loading component
  const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-[#f6f4e5]">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent"></div>
        <p className="text-white dark:text-gray-800 text-lg font-medium">Loading project details...</p>
      </div>
    </div>
  );

  // Error component
  const ErrorMessage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-[#f6f4e5]">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-red-500">Error Loading Project</h1>
        <p className="text-white dark:text-gray-800">{projectDetailError}</p>
        <button 
          onClick={() => dispatch(fetchProjectById(id))}
          className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );

  if (projectDetailStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (projectDetailStatus === 'failed') {
    return <ErrorMessage />;
  }
  if (!project) {
    return (
      <div className="min-h-screen text-center flex justify-center items-center bg-gray-900 dark:bg-[#f6f4e5] py-10 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white dark:text-gray-800">Project Not Found</h1>
          <p className="text-white dark:text-gray-800">The project you're looking for doesn't exist.</p>
          <a 
            href="/projects"
            className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Back to Projects
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen dark:bg-[#f6f4e5] bg-gray-900 py-18 px-2 md:px-6">
        <div className={`${styles.wrapper} max-w-5xl mx-auto rounded p-4 md:p-5 lg:p-8 space-y-2`}>
          <a
            href="/projects"
            className="flex items-center text-white no-underline hover:underline mb-4 w-max"
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

          {project.banner_image && (
            <div className="flex flex-wrap gap-4">
              <img
                src={project.banner_image}
                alt="Project Banner"
                className="w-full  object-cover rounded-2xl"
            />
          </div>
          )}

          <div className=' gap-6 flex flex-col md:flex-row justify-between items-start md:items-center my-6'>
            <h1 className="text-5xl font-clash  font-bold text-white dark:text-gray-800">{project.ProjectName}</h1>

            {project.link && (
              <button
                type="button"
                onClick={() => window.open(project.link, "_blank")}
                className="
                    relative overflow-hidden border-2 py-2 px-4 rounded-full
                    transition-colors duration-300
                    dark:text-black text-white
                    border-gray-200 dark:border-gray-800
                    group cursor-pointer
                    hover:scale-1.2

                  "
              >
                {/* Background animasi */}
                <span
                  className="
                absolute inset-0 h-0 group-hover:h-full
                transition-all duration-500 ease-out
                bg-gray-200 dark:bg-gray-800
                z-0
              "
                  style={{ top: "auto", bottom: 0 }} // animasi isi dari bawah
                ></span>

                {/* Teks */}
                <span
                  className="
        relative z-10
        group-hover:text-gray-800 dark:group-hover:text-white
        transition-colors duration-300
      "
                >
                  Check this out
                </span>
              </button>
            )}









          </div>

          <div className='short-description'>
            <p>
              {project.short_description}

            </p>
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

          <hr />






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
