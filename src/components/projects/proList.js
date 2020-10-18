import React from 'react';
import ProjectCard from '../projects/projects';
import projects from '../../mockDatabase'
import useStyles from "../projects/styles"

export default function ProList(props) {
  const classes = useStyles();
  const projectList = projects.map(project => {
    return (
        <ProjectCard title={project.title} description={project.description} frontEnd={project.frontEnd} backEnd={project.backEnd} img={project.img} link={project.link} />
    )
  })

  return (
    <div>
    <div className={classes.projects}>
      <h1 style={{color: "white", fontFamily: "initial", margin: "40px 0 0", padding: "40px 0 0 ", fontSize: "40px"}}>CHECK OUT MY WORK!</h1>
      {projectList}
    </div>
    </div>
  )
}