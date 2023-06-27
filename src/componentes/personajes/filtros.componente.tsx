import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchFilterPersonajes, setFiltro } from '../../store/personajesReducer';
import './filtros.css';

const Filtros = () => {
    const filtro = useAppSelector(state => state.personajes.filtro)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (filtro != undefined) {
            dispatch(fetchFilterPersonajes(filtro))
        }
    }, [filtro])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFiltro(e.target.value))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" onChange={onChange} value={filtro} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;