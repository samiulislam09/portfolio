import React from 'react'

function Education() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-8">
        <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
        </div>
        <div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-muted-foreground">Computer Science And Engineering</h3>
                <p className="text-muted-foreground">Southeast University - 8th Semester</p>
                <p className="text-muted-foreground">CGPA: -.--</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-muted-foreground">Diploma in Computer Technology</h3>
                <p className="text-muted-foreground">Kurigram Polytechnic Institute</p>
                <p className="text-muted-foreground">CGPA: 3.33</p>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work</h2>
        </div>
        <div>
            <div className="mb-4 max-w-2xl">
                <h3 className="text-lg font-medium text-muted-foreground">Junior Software Engineer</h3>
                <p className="text-muted-foreground">European IT Solutions Institute - January 2022 - July 2022</p>
                <p className="text-muted-foreground">Worked with the front-end team and developed single-page application with Sanity CMS API for displaying JSON-retrieved data using ReactJs.</p>
            </div>
        </div>
    </div>
</div>



  )
}

export default Education