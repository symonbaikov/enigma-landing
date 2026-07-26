import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import ProductPage from './pages/ProductPage.jsx';
import SolutionPage from './pages/SolutionPage.jsx';
import ResourcePage from './pages/ResourcePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import ChapterPage from './pages/ChapterPage.jsx';
import AeoFaqPage from './pages/AeoFaqPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import { getProducts, getSolutions, getResources } from './content/index.js';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const { t } = useTranslation();
  const products = getProducts(t);
  const solutions = getSolutions(t);
  const resources = getResources(t);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="pricing" element={<Pricing/>}/>

          {/* Product pages */}
          <Route path="product/axp"           element={<ProductPage {...products.axp}/>}/>
          <Route path="product/agent-traffic"  element={<ProductPage {...products['agent-traffic']}/>}/>
          <Route path="product/site-maps"      element={<ProductPage {...products['site-maps']}/>}/>
          <Route path="product/monitoring"     element={<ProductPage {...products.monitoring}/>}/>
          <Route path="product/insights"       element={<ProductPage {...products.insights}/>}/>

          {/* Solution pages */}
          <Route path="solutions/b2b-saas"    element={<SolutionPage {...solutions['b2b-saas']}/>}/>
          <Route path="solutions/ecommerce"    element={<SolutionPage {...solutions.ecommerce}/>}/>
          <Route path="solutions/agencies"     element={<SolutionPage {...solutions.agencies}/>}/>

          {/* Resource pages */}
          <Route path="resources/geo-playbook"  element={<ResourcePage {...resources['geo-playbook']}/>}/>
          <Route path="resources/research-lab"  element={<ResourcePage {...resources['research-lab']}/>}/>
          <Route path="resources/changelog"     element={<ResourcePage {...resources.changelog}/>}/>
          <Route path="resources/aeo-faq"       element={<AeoFaqPage {...resources['aeo-faq']}/>}/>

          {/* Blog — AI-search trends */}
          <Route path="blog"        element={<BlogPage/>}/>
          <Route path="blog/:slug"  element={<BlogPostPage/>}/>

          {/* Research lab article pages */}
          <Route path="resources/research-lab/:slug" element={<ArticlePage/>}/>

          {/* GEO Playbook chapter pages */}
          <Route path="resources/geo-playbook/:slug" element={<ChapterPage/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
