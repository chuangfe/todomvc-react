import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoPage from './Todo'

const PagesRoot = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<TodoPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default PagesRoot
