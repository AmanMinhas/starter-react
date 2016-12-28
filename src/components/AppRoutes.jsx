import React,{Component} from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes.js';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}

// export default class AppRoutes extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//       	{routes}
//       </Router> 
//     );
//   }
// }


// render( 
// 	<Router history={ browserHistory }>
// 		<Route path="/" component={ MainLayout } >
// 			<IndexRoute component = {GameComponent} />
// 			<Route path="*" name="Page404" component={Page404}></Route>
// 		</Route>
// 	</Router>, 
// 	document.getElementById( 'app-body' ) 
// );