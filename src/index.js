import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const API = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZWVhMWJkYWItY2FmNi00ZWEwLWFhMmItNTAxMzI4Yzg0MGRjIn0.TaUWU0Pwv9WnIldK_lI0rIIXmBZ1OBM86J9zuoFum6I';
const client = new ApolloClient({
	link: new HttpLink({ uri: API }),
	cache: new InMemoryCache
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider >,
	document.getElementById('root'));

registerServiceWorker();
