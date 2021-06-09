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
                <section>
                
                </section>
                <section>
                    <table>
                        <tbody>
                            {
                                this.state.tabuleiro.map((linha, i) => (
                                    <tr>
                                        {
                                            linha.map((celula, j) => (
                                                <td key={j}
                                                    onClick={() => this.peca(j)}>
                                                        {
                                                            this.state.tabuleiro[i][j] === 'c' ? "C" : 
                                                            this.state.tabuleiro[i][j] === 'i' ? "I" : ' '
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