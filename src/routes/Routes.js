import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './routeNames';
import HomePageContainer from '../pages/HomePage/containers/homePageContainer';
import CounterPageContainer from '../pages/counterPage/containers/CounterPageContainer';

const Routes = () => {
	return (
		<Switch>
			<Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
			<Route exact path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>
		</Switch>
	);
};

export default Routes;