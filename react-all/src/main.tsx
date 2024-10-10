import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { Users } from './apps/array_list/Users/Users'
// import { ImageList } from './apps/array_list/ImageList/ImageList.tsx'
// import { RemoveImage } from './apps/array_list/RemoveImage/removeImage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ImageList /> */}
    {/* <RemoveImage /> */}
    <Users />
  </StrictMode>,
)
