import React, { useState } from 'react';

const Gretingfuntion = (props) => {

    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(26);

    const birthday = () => {
        setage(age + 1);
    }

    return (
        <div>
            <h1>
                Hola {props.name} desde componente funcional !
            </h1>

            <h2>
                Tu edad es de: {age}
            </h2>

            <div>
                {/* Sin parentesis puesn o quiero que se ejecute */}
                <button onClick={birthday}>
                    Cumplir años =)
                </button>
            </div>
        </div>
    );
}

export default Gretingfuntion;
