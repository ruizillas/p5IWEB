import React from 'react';
import './ActionBar.css'
export default class Game extends React.Component {
    render() {
        return (
            <div className="ActionBar">
                <div className='buttons'>

                    <button id='Anterior' onClick={() => { this.props.onChangeQuiz(-1); }}>Anterior</button>
                    <button id='Submit' onClick={() => { this.props.onSubmit(); }}>Submit</button>
                    <button id='Siguiente' onClick={() => { this.props.onChangeQuiz(1); }}>Siguiente</button>
                    
                </div>
                <span className="Score">Tu puntuación es: {this.props.score}</span>
            </div >
        )
    }
}