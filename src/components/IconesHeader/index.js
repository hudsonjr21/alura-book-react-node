import './style.css';
import perfil from '../../image/perfil.svg';
import sacola from '../../image/sacola.svg';

const icones = [perfil, sacola];

function IconesHeader () {
    return (
        <ul className='icones'>
            { icones.map ( (icone) => (
                <li className='icone'><img src={icone} /></li>
            ))}
        </ul>
    )
}

export default IconesHeader ;