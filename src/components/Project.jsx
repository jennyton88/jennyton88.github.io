


function Project() {
    let project = {
        img_path: "/images/",
        title: "Project",
        description: "Description",
    };
    return (
        <div className="project">
            {/* <img></img> */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
}

export default Project;