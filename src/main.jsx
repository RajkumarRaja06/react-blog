import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProviderCreatePost } from './context/createPostContext';
import { UserProvider } from './context/userContext.jsx';
import App from './App';
import CreatePost from './pages/CreatePost';
import Root from './pages/root';
import { MainBlog } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'createPost',
        element: <CreatePost />,
      },
      {
        path: 'mainBlog',
        element: <MainBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <UserProviderCreatePost>
        <RouterProvider router={router} />
      </UserProviderCreatePost>
    </UserProvider>
  </React.StrictMode>
);
