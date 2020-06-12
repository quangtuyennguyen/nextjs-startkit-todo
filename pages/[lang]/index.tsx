
import 'isomorphic-fetch';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import Todo from '../../components/Todo';

function Index() {
	return <Todo />

}

export default withLocale(Index);
