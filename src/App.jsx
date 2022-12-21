import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import PageElCarmen from "./pages/elcarmen/PageElCarmen";
import PageGallery from "./pages/gallery/PageGallery";
import PageMaestros from "./pages/maestros/PageMaestros";
import PageNoticias from "./pages/noticias/PageNoticias";
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
        <Route 
          path={`/${PAGE_CODES.EL_CARMEN_DE_VIBORAL}`}
          element={<PageElCarmen pageCode={PAGE_CODES.EL_CARMEN_DE_VIBORAL} />}
        />
         <Route
          path={`/${PAGE_CODES.NOTICIAS}`}
          element={<PageNoticias pageCode={PAGE_CODES.NOTICIAS} />}
        />
        <Route
          path={`/${PAGE_CODES.GALERIA}`}
          element={<PageGallery pageCode={PAGE_CODES.GALERIA} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
