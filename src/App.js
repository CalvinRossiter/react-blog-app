import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';

import './App.css';

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      slug: 'hello-react',
      title: 'Hello React',
      content: 'Lorem.',
    },
    {
      id: 2,
      slug: 'hello-project',
      title: 'Hello Project',
      content: 'Tothe.',
    },
    {
      id: 3,
      slug: 'hello-blog',
      title: 'Hello Blog',
      content: 'Ipsum.',
    },
  ]);

  return(
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path = '/' element={<Posts posts={posts} />} />
          <Route
            path='/post/:postSlug'
            element={(props) => {
              const post = posts.find(
                (post) => post.slug === props.match.params.postSlug
              );
              if (post) return <Post post={post} />;
              else return <NotFound />;
            }}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
