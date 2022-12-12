import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import PageMaestros from "./pages/maestros/PageMaestros";
import Page from "./pages/page/Page";
import PostDetail from "./pages/post-detail/PostDetail";
import { PAGE_CODES } from "./utils/page-codes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Page pageCode="home" />} />
        <Route path="/page" exact element={<Page />} />
        <Route path="/post" exact element={<PostDetail />} />
        <Route
          path={`/${PAGE_CODES.MAESTROS}`}
          element={<PageMaestros pageCode={PAGE_CODES.MAESTROS} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
