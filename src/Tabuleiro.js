import React from 'react';
import './App.css';

class Checkers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabuleiro: [
                [" ", "c", " ", "c", " ", "c", " ", "c"],
                ["c", " ", "c", " ", "c", " ", "c", " "],
                [" ", "c", " ", "c", " ", "c", " ", "c"],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                ["i", " ", "i", " ", "i", " ", "i", " "],
                [" ", "i", " ", "i", " ", "i", " ", "i"],
                ["i", " ", "i", " ", "i", " ", "i", " "],
            ]
        }
    }

    render() {
        return (
            <>
                <div className="fundo" style={{backgroundImage: 'url(fundo.jpg)'}}>

                </div>
                <section>
                    <table className="tabuleiroo">
                        <tbody>
                            {
                                this.state.tabuleiro.map((linha, i) => (
                                    <tr>
                                        {
                                            linha.map((celula, j) => (
                                                <td key={j}
                                                    onClick={() => this.peca(j)}>
                                                        {
                                                            this.state.tabuleiro[i][j] === 'c' ? <img src=
                                                            "/flash.png"/> : 
                                                            this.state.tabuleiro[i][j] === 'i' ? <img src="/thanos.png" /> : ' '
                                                        }
                                                    </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}

export default Checkers;