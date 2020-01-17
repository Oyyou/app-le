import React, { Component } from 'react'
import './questions.scss'

class Questions extends Component {
    render() {
        const { colour, day, soup, updateColour, updateDay, updateSoup, getResult } = this.props.props;

        return (
            <>
                <form>
                    <h1>Pick your favourites:</h1>
                    <section className="options">
                        <div className="option">
                            <select className={"control dropdown" + (this.props.props.state.errors.colour !== "" ? " error" : "")} value={colour} onChange={updateColour}>
                                <option value="0" defaultValue>(Colour)</option>
                                <option value="Blorange">Blorange</option>
                                <option value="Fled">Fled</option>
                                <option value="Muurple">Muurple</option>
                                <option value="Splank">Splank</option>
                                <option value="Jellow">Jellow</option>
                            </select>
                            {this.props.props.state.errors.colour !== "" && <p>{this.props.props.state.errors.colour}</p>}
                        </div>
                        <div className="option">
                            <select className={"control dropdown" + (this.props.props.state.errors.day !== "" ? " error" : "")}  value={day} onChange={updateDay}>
                                <option value="0" defaultValue>(Day)</option>
                                <option value="Flensday">Flensday</option>
                                <option value="Floopday">Floopday</option>
                                <option value="Flangaday">Flangaday</option>
                                <option value="Fluteday">Fluteday</option>
                                <option value="Flinkday">Flinkday</option>
                                <option value="Flynsday">Flynsday</option>
                                <option value="Friday">Friday</option>
                            </select>
                            {this.props.props.state.errors.day !== "" && <p>{this.props.props.state.errors.day}</p>}
                        </div>
                        <div className="option">
                            <select className={"control dropdown" + (this.props.props.state.errors.soup !== "" ? " error" : "")}  value={soup} onChange={updateSoup}>
                                <option value="0" defaultValue>(Soup)</option>
                                <option value="Apple">Apple</option>
                                <option value="Apple">Apple</option>
                                <option value="Apple">Apple</option>
                                <option value="Apple">Apple</option>
                            </select>
                            {this.props.props.state.errors.soup !== "" && <p>{this.props.props.state.errors.soup}</p>}
                        </div>
                        <input className="control" type="submit" value="Calculate" onClick={getResult} />
                    </section>
                </form>
            </>
        )
    }
};

export default Questions;