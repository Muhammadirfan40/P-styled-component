import React from 'react'
import styled, { css } from 'styled-components'


const Hello = styled.h1`


border:1px solid red;
padding:20px;


  `

function Button() {

    return (
        <>

            {/* styled component */}
            
            <Hello >

                Hello Style Component

            </Hello >

        </>
    )
}

export default Button;
