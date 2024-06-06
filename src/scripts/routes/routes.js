import HOME from '../views/pages/home';
import HIDDEN_GEM from '../views/pages/hiddenGem';
import Pariwisata from '../views/pages/pariwisata';
import About from '../views/pages/about';
import DETAIL from '../views/pages/detail'; 
const routes = {
  '/': HOME,
  '/hidden-gem': HIDDEN_GEM,
  '/pariwisata': Pariwisata,
  '/about': About,
  '/detail/:id': DETAIL, 
};

export default routes;
