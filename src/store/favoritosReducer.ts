import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFavoritos, resetFavoritos, toggleFavorito } from '../api/favoritosApi'
import { getPersonajesByArray } from '../api/personajesApi'
import { RootState } from './store'

interface FavoritosState {
    listado: Array<number>,
    personajes: Array<Personaje>,
    textoPorDefecto: string,
}

const initialState: FavoritosState = {
    listado: [],
    personajes: [],
    textoPorDefecto: 'Texto por defecto',
}

export const fetchFavoritos = createAsyncThunk(
    'favoritos/fetchFavoritos',
    async () => {
        const response = getFavoritos()
        return response
    }
)

export const fetchToggleFavorito = createAsyncThunk(
    'personajes/fetchToggleFavorito',
    async (id: number) => {
        const response = toggleFavorito(id)
        return response
    }
)

export const fetchPersonajesFavoritos = createAsyncThunk(
    'personajes/fetchPersonajesFavoritos',
    async (_, { getState }) => {
        const state = getState() as RootState
        const { listado } = state.favoritos
        const response = getPersonajesByArray(listado)
        return response
    }
)

export const fetchResetFavoritos = createAsyncThunk(
    'favoritos/fetchResetFavoritos',
    async () => {
        const response = resetFavoritos()
        return response
    }
)

const favoritosSlice = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoritos.fulfilled, (state, action) => {
                state.listado = action.payload
            })
            .addCase(fetchToggleFavorito.fulfilled, (state, action) => {
                state.listado = action.payload
            })
            .addCase(fetchPersonajesFavoritos.fulfilled, (state, action) => {
                state.personajes = action.payload
            })
            .addCase(fetchResetFavoritos.fulfilled, (state, action) => {
                state.listado = action.payload;
                state.textoPorDefecto = 'No seleccionaste ningún personaje como favorito'
            })
    }
})

export const { } = favoritosSlice.actions
export default favoritosSlice.reducer