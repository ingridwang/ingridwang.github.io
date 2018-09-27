import React from "react";
import {
  NavLink
} from 'react-router-dom';
import {
    PageNames
} from "./PageContainer.js"
import "./index.css";
import "./WordSearch.css";

// {/**/} means don't change this letter

class WordSearch extends React.Component {
    mouseEnter = (index) => {
        this.props.onHoverEnter(index);
    }
    mouseLeave = (index) => {
        this.props.onHoverExit(index);
    }

    render() {
        const hover = PageNames.map((pageName, id) => {
            return (
                <NavLink to={"/" + pageName} key={id}>
                    <div 
                        id={pageName} 
                        className="outline" 
                        style={(this.props.hoverIndex === id ? {"opacity": 1} : null)}
                        onMouseEnter={() => this.mouseEnter(id)}
                        onMouseLeave={() => this.mouseLeave(id)}
                    ></div>
                </NavLink>
            )
        });
        return (
            <div className="wordsearch">
                {hover}
                <table>
                    <tbody>
                        <tr>
                            <td>B</td>
                            <td>Z</td>
                            <td>C</td>
                            <td>Q</td>
                            <td>F</td>
                            <td>U</td>
                            <td>O</td>
                            <td>R</td>
                            <td>F</td>
                            <td>I</td>
                            <td>J</td>
                            <td>W</td>
                        </tr>
                        <tr>
                            <td>R</td>
                            <td>S</td>
                            <td>W</td>
                            <td>L</td>
                            <td>P</td>
                            <td>F</td>
                            <td>N</td>
                            <td>Q</td>
                            <td>V</td>
                            <td>Z</td>
                            <td>T</td>
                            <td>Q</td>
                        </tr>
                        <tr>
                            <td>Z</td>
                            <td>D</td>
                            <td>E</td>{/**/}
                            <td>C</td>{/**/}
                            <td>N</td>{/**/}
                            <td>E</td>{/**/}
                            <td>I</td>{/**/}
                            <td>R</td>{/**/}
                            <td>E</td>{/**/}
                            <td>P</td>{/**/}
                            <td>X</td>{/**/}
                            <td>E</td>{/**/}
                        </tr>
                        <tr>
                            <td>K</td>
                            <td className="name">I</td>{/**/}
                            <td className="name">N</td>{/**/}
                            <td className="name">G</td>{/**/}
                            <td className="name">R</td>{/**/}
                            <td className="name">I</td>{/**/}
                            <td className="name">D</td>{/**/}
                            <td>C</td>{/**/}
                            <td>V</td>
                            <td>M</td>
                            <td>P</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>Q</td>
                            <td>H</td>
                            <td>X</td>
                            <td>L</td>
                            <td>M</td>
                            <td>A</td>{/**/}
                            <td>B</td>{/**/}
                            <td>O</td>{/**/}
                            <td>U</td>{/**/}
                            <td>T</td>{/**/}
                            <td>B</td>
                            <td>E</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>L</td>
                            <td className="name">W</td>{/**/}
                            <td className="name">A</td>{/**/}
                            <td className="name">N</td>{/**/}
                            <td className="name">G</td>{/**/}
                            <td>F</td>{/**/}
                            <td>N</td>{/**/}
                            <td>B</td>
                            <td>N</td>
                            <td>C</td>
                            <td>I</td>
                        </tr>
                        <tr>
                            <td>U</td>
                            <td>E</td>
                            <td>F</td>
                            <td>C</td>{/**/}
                            <td>S</td>
                            <td>W</td>
                            <td>Q</td>
                            <td>T</td>{/**/}
                            <td>K</td>
                            <td>H</td>
                            <td>Q</td>
                            <td>Q</td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td>I</td>
                            <td>E</td>{/**/}
                            <td>P</td>
                            <td>F</td>
                            <td>H</td>
                            <td>G</td>
                            <td>A</td>{/**/}
                            <td>S</td>{/**/}
                            <td>O</td>
                            <td>W</td>
                            <td>E</td>
                        </tr>
                        <tr>
                            <td>R</td>
                            <td>U</td>
                            <td>N</td>
                            <td>D</td>
                            <td>A</td>
                            <td>S</td>
                            <td>X</td>
                            <td>C</td>{/**/}
                            <td>L</td>
                            <td>I</td>
                            <td>Y</td>
                            <td>J</td>
                        </tr>
                        <tr>
                            <td>Y</td>{/**/}
                            <td>H</td>{/**/}
                            <td>P</td>{/**/}
                            <td>A</td>{/**/}
                            <td>R</td>{/**/}
                            <td>G</td>{/**/}
                            <td>O</td>{/**/}
                            <td>T</td>{/**/}
                            <td>O</td>{/**/}
                            <td>H</td>{/**/}
                            <td>P</td>{/**/}
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>C</td>
                            <td>Y</td>
                            <td>D</td>
                            <td>O</td>
                            <td>P</td>
                            <td>L</td>
                            <td>K</td>
                            <td>W</td>
                            <td>B</td>
                            <td>N</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td>M</td>
                            <td>K</td>
                            <td>I</td>
                            <td>R</td>
                            <td>B</td>
                            <td>V</td>
                            <td>J</td>
                            <td>K</td>
                            <td>G</td>
                            <td>T</td>
                            <td>I</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WordSearch;