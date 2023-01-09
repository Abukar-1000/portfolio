import React from "react";

function ProjectItem(props)
{
    const keyPoints = props.points.map(point => {
        return <li className="keyPoint">{point}</li>
    });

    return (
        <div className="ProjectsContainer">
            <p className="ProjectTitle">{props.title}</p>
            <p className="ProjectDuration">{props.dur}</p>
            <ul className="ProjectKeyPoints">
                {keyPoints}
            </ul>
        </div>
    );
}

class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
        this.formatDivs = this.formatDivs.bind(this);
        
        this.projectItems = this.props.projects.map(project => {
            return <ProjectItem title = {project.title} dur = {project.duration} points = {project.keyPoints} />
        });

        let indexButtons = this.props.projects.map(project => {
            if (!project.key)
            {
                return <button className = "IndexButton active">B</button>
            }
            return <button className = "IndexButton inActive">B</button>
        });
        // manages changing componenets
        this.state = {
            index: 0,
            currentDiv: this.projectItems[0],
            indexButtons: indexButtons
        };

    }

    getDivIndex(direction)
    {
        let currentIndex = this.state.index;
        const maxIndex = this.projectItems.length - 1;
        const minIndex = 0;

        if (direction === "Left Arrow")
        {
            if (currentIndex === minIndex)
            {
                return (this.projectItems.length - 1);
            }
            return (currentIndex - 1);
        }
        else if (direction === "Right Arrow")
        {
            if (currentIndex === maxIndex)
            {
                return 0;
            }
            return (currentIndex + 1);
        }
    }
    formatDivs(e)
    {
        let direction = e.target.alt; 
        let newIndex = this.getDivIndex(direction);
        let newIndexButtons = this.props.projects.map(project => {
            if (project.key === newIndex)
            {
                return <button className = "IndexButton active">B</button>
            }
            return <button className = "IndexButton inActive">B</button>
        })

        console.log(newIndexButtons)
        this.setState({
            index: newIndex,
            currentDiv: this.projectItems[newIndex],
            indexButtons: newIndexButtons
        });
    }
    render()
    {

        return (
            <div className="ProjectsSection">
                <div className="placeCenter">
                    <img src="./imgs/leftArrow.png" onClick={this.formatDivs} className="carouselBtns" alt="Left Arrow"/>
                    <div className="projectDisplayer">
                        {this.state.currentDiv}
                    </div>
                    <img src="./imgs/rightArrow.png" className="carouselBtns" onClick={this.formatDivs} alt="Right Arrow"/>
                </div>
                <div className="ProjectIndexContainer placeCenter">
                    {this.state.indexButtons}
                </div>
            </div>
        );
    }
}

export default Projects;