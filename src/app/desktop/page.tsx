import { Window } from '../components/Window';
import { DesktopView } from '../components/desktop/DesktopView';
import { Footer } from '../components/desktop/Footer';

export default function DesktopPage() {
  return (
    <section className='bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen'>
      <DesktopView>
        <Window name='dad'>
          <span>POrfa anda</span>
        </Window>
      </DesktopView>
      <Footer />
    </section>
  );
}
