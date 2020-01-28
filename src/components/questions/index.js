import React, { Component } from 'react'
import './questions.scss'

class Questions extends Component {
    render() {
        const { colour, day, soup, updateColour, updateDay, updateSoup, getResult } = this.props.props;

        const colours = [
            "Blorange",
            "Feld",
            "Muurple",
            "Splank",
            "Jellow",
        ];

        const days = [
            "Flensday",
            "Floopday",
            "Flangaday",
            "Fluteday",
            "Flinkday",
            "Flynsday",
            "Friday",
        ]

        return (
            <>
                <form>
                    <h1>Pick your favourites:</h1>
                    <section className="options">
                        <div className="option">
                            <select className={"control dropdown" + (this.props.props.state.errors.colour !== "" ? " error" : "")} value={colour} onChange={updateColour}>
                                <option value="0" defaultValue>(Colour)</option>
                                {colours.map((c, i) =>
                                {
                                    return (<option value={c} key={i}>{c}</option>)
                                })}
                            </select>
                            {this.props.props.state.errors.colour !== "" && <p>{this.props.props.state.errors.colour}</p>}
                        </div>
                        <div className="option">
                            <select className={"control dropdown" + (this.props.props.state.errors.day !== "" ? " error" : "")}  value={day} onChange={updateDay}>
                                <option value="0" defaultValue>(Day)</option>
                                {days.map((c, i) =>
                                {
                                    return (<option value={c} key={i}>{c}</option>)
                                })}
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