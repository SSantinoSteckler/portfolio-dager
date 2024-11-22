import { Window } from '../components/Window';
import { DesktopView } from '../components/desktop/DesktopView';
import { Footer } from '../components/desktop/Footer';
import { DotGPT } from '../components/dotgpt/DotGpt';
import { ProfileCard } from '../components/dotgpt/ProfileCard';
import PlayList from '../components/playlist/PlayList';

export default function DesktopPage() {
  return (
    <section className='bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen overflow-hidden'>
      <DesktopView>
        {/* <div>.</div> */}
        <Window name='dad'>
          <DotGPT />
        </Window>

        <PlayList />
      </DesktopView>
      <Footer />
    </section>
  );
}
