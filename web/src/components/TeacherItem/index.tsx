import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/13384512?s=400&v=4" alt="Eduardo M Gomes" />
                <div>
                    <strong>Eduardo M Gomes</strong>
                    <span>C & C++</span>
                </div>
            </header>
            <p>
                Para1
                <br /><br />
                Paragrafo 2
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 39,90</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;