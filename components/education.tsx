import React from 'react'

function Education() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-4 shadow-md rounded-md">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-8">
        <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
        </div>
        <div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-200">Computer Science And Engineering</h3>
                <p className="text-gray-400">Southeast University - 8th Semester</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-200">Diploma in Computer Technology</h3>
                <p className="text-gray-400">Kurigram Polytechnic Institute</p>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work</h2>
        </div>
        <div>
            <div className="mb-4 max-w-2xl">
                <h3 className="text-lg font-medium text-gray-300">Junior Software Engineer</h3>
                <p className="text-gray-400">European IT Solutions Institute - January 2022 - July 2022</p>
                <p className="text-gray-400">Worked with the front-end team and developed a single-page application with Sanity CMS API for displaying JSON-retrieved data using ReactJs.</p>
            </div>
        </div>
    </div>
</div>



  )
}

export default Education