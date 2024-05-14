import styles from './Home.module.css';
import DownloadApp from './components/home/downloadApp/DownloadApp';
import Features from './components/home/features/Features';
import ManageWork from './components/home/manageWork/ManageWork';
import Newsletter from './components/home/newsletter/Newsletter';
import Showcase from './components/home/showcase/Showcase';
import Slider from './components/home/slider/Slider';
import TopTools from './components/home/topTools/TopTools';

export default function Home() {
  return (
    <main>
        <Showcase />
        <Features />
        <Slider />
        <ManageWork />
        <DownloadApp />
        <TopTools />
        <Newsletter />
    </main>
  );
}
