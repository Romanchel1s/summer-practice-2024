import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './shared/ui/layout/layout'
import { Caharacters } from './pages/characters/characters'
import { Comics } from './pages/comics/comics'
import { CharacterDetails } from './pages/character-details.tsx/character-details'
import { ComicsDetails } from './pages/comics-details.tsx/comics-details'

function App() {
   return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
              path="/"
              element={ <Navigate to="/characters" /> }
            />

            <Route
              path="/characters"
              element={<Caharacters />}
            />
            <Route
              path="/comics"
              element={<Comics />}
            />
            <Route
              path="/characters/:id"
              element={<CharacterDetails />}
            />
            <Route
              path="/comics/:id"
              element={<ComicsDetails />}
            />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
