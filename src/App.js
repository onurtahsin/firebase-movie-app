// import { userObserver } from "./auth/firebase";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  // useEffect(() => {
  //   userObserver();
  // }, []);

  return (
    <div>
      <div className="bg-[#23242a]">
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default App;
