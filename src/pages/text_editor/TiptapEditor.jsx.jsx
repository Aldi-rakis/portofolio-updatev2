// components/TiptapEditor.jsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

export default function TiptapEditor({ onSave }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Tulis blog kamu di sini...</p>',
  })

  const handleSave = () => {
    const html = editor.getHTML()
    console.log(html)
    onSave(html)
  }

  return (
    <div className="p-4 mt-40 h-screen border rounded-xl shadow-md bg-white dark:bg-gray-800">
      <EditorContent editor={editor} className="prose max-w-none" />
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Simpan Blog
      </button>
    </div>
  )
}
