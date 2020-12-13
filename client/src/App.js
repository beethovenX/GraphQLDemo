import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  //  uri: 'http://localhost:4000/graphql'
  uri: 'http://ec2-3-89-108-90.compute-1.amazonaws.com:4000/graphql'
  // change this uri
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Kalotra's Reading List</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
