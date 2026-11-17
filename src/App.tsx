import { allProjects } from './data/portfolio';
import HomePage from './pages/HomePage';
import { NotFoundPage, ProjectDetailPage } from './pages/ProjectDetailPage';

export default function App() {
  const projectPathMatch = window.location.pathname.match(/^\/projects\/([^/]+)$/);
  const selectedProject = projectPathMatch
    ? allProjects.find((project) => project.slug === projectPathMatch[1])
    : undefined;

  if (projectPathMatch) {
    return selectedProject ? <ProjectDetailPage project={selectedProject} /> : <NotFoundPage />;
  }

  return <HomePage />;
}
