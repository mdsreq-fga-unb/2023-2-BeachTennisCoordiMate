import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ClassPlans from './pages/ClassPlans';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import ViewPlan from './pages/ViewPlan';
import DrillsList from './pages/DrillsList';
import Drill from './pages/Drill';


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/meusDrills" element={<DrillsList />} />
        
        <Route path="/visualizar/:id" element={
          <Suspense fallback={<Loader />}>
            <ViewPlan />
          </Suspense> 
                  } /> 
        <Route path="/" element={<ClassPlans />} />
        <Route path="/drill" element={<Drill />}>
          {/* <Route index element={<ClassPlans />} /> */}
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
