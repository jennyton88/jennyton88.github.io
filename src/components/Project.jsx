


function Project() {
    let project = {
        img_path: "/images/",
        title: "Project",
        description: "Description",
    };
    return (
        <div className="project">
            {/* <img></img> */}
            <h4>{project.title}</h4>
            <p>{project.description}</p>
        </div>
    );
}

export default Project;