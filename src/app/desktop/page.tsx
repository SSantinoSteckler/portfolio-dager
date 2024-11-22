// import { Window } from '../components/Window';
import { DesktopView } from '../components/desktop/DesktopView';
import { Footer } from '../components/desktop/Footer';
<<<<<<< HEAD
import { ProfileCard } from '../components/dotgpt/ProfileCard';
=======
import PlayList from '../components/playlist/PlayList';
>>>>>>> 3a0d167fc7e329603b8e107f7d1d45a50e8ab29b

export default function DesktopPage() {
  return (
    <section className='bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen '>
      <DesktopView>
        <div>.</div>
        {/* <Window name='dad'>
          <span>POrfa anda</span>
<<<<<<< HEAD
        </Window>
        <ProfileCard content='ddddddddddddddddddddddddddddddddd djioajdoiajoidjoajdai sjodjaojdajdioajdojaid ijdoasjdoaijdiajiodj' />
=======
        </Window> */}

        <PlayList />
>>>>>>> 3a0d167fc7e329603b8e107f7d1d45a50e8ab29b
      </DesktopView>
      <Footer />
    </section>
  );
}
