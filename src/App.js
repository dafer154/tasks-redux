import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import DetailPosts from './components/posts/DetailPosts';
import Main from './components/shared/Main';
import Navigation from './components/shared/Navigation';

const App = () => {

    return (
    <Provider store={store}>
        <div className="App">
            <Router>
                <Navigation />
                <div className="container p-4">
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/posts" component={Posts}></Route>
                    <Route path="/posts/:id" component={DetailPosts}></Route>
                </div>
            </Router>
        </div>
    </Provider>
        
    );
}

export default App;