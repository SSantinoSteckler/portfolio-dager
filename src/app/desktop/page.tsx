import { Window } from '../components/Window';
import { DesktopView } from '../components/desktop/DesktopView';
import { Footer } from '../components/desktop/Footer';
import { ProfileCard } from '../components/dotgpt/ProfileCard';
import PlayList from '../components/playlist/PlayList';

export default function DesktopPage() {
  return (
    <section className='bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen '>
      <DesktopView>
        {/* <div>.</div> */}
        <Window name='dad'>
          <ProfileCard content='bdadkabdakdjbakdbkah dasjdkjhadkhakdhad dhaskdhakjhdkjah dajsdh' />
        </Window>

        <PlayList />
      </DesktopView>
      <Footer />
    </section>
  );
}
