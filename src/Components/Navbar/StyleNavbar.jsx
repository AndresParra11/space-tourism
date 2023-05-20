import styled from "styled-components"
import Hamburguer from '../../assets/icon/hamburguer.svg';
import Close from '../../assets/icon/close.svg';

export const StyleHome = styled.div`
    position: absolute;
    z-index: 9999;
    background: white;
    color: dark; 
    padding: .5em 1em;
    margin-inline: auto;
    transform: translateY(-100%);
    transition: transform 250ms ease-in;

    :focus {
    transform: translateY(0);
}
`

export const StyleHeader = styled.div`

justify-content: space-between;
align-items: center;

display: flex;
gap: var(--gap, 1rem);


::after {   
         content: '';
         display: block;
         position: relative;
         height: 1px;
         width: 100%;
         margin-right: -2.5rem;
         background: white;
         order: 1;
     }

`

export const StyleLogo = styled.div`
img{
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
}
`

export const StyleButton = styled.button`
display: none;
@media (max-width: 35rem){
    display: block;
        position: absolute;
        z-index: 2000;
        right: 1rem;
        top: 2rem;
        background: transparent;
        background-image: url(${Hamburguer});
        background-repeat: no-repeat;
        background-position: center;
        width: 1.5rem;
        aspect-ratio: 1;
        border: 0;

        [aria-expanded="true"] {
        background-image: url(${Close});

        :focus-visible {
        outline: 5px solid white;
        outline-offset: 5px;
    }
    }
}
`

export const StyleNav = styled.nav`
order: 2;

ul{
    --gap: clamp(1.5rem, 5vw, 3.5rem);
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: hsl(0 0% 100% / 0.05);
    backdrop-filter: blur(1.5rem);

    margin-block: 2rem;
    padding-inline: clamp(3rem, 7vw, 7rem);
    
    display: flex;
    gap: var(--gap, 1rem);
}

a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2.7px;
    font-family: var(--font-primary);
    color: var(--color-secondary);
    background-color: transparent;

    > span {
    font-weight: 700;
    margin-right: .5em;
}
}
`