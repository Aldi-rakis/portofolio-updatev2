// pages/BlogPage.jsx
import { useState, useEffect } from 'react'
import TiptapEditor from './TiptapEditor.jsx'

export default function BlogPage() {
  const [savedContent, setSavedContent] = useState('')

  // Load dari localStorage
  useEffect(() => {
    const stored = localStorage.getItem('my_blog_post')
    if (stored) setSavedContent(stored)
  }, [])

  const handleSave = (html) => {
    localStorage.setItem('my_blog_post', html)
    setSavedContent(html)
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Editor Blog</h1>
      <TiptapEditor onSave={handleSave} />
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Preview Konten:</h2>
        <div
          className="prose max-w-none border rounded p-4 bg-gray-50"
          dangerouslySetInnerHTML={{ __html: savedContent }}
        />
      </div>
    </div>
  )
}
