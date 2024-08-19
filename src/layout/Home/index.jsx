import { Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu";
import AppHeader from "../../components/AppHeader";
import AppContent from "../../components/AppContent";

const HomeLayout = () => {
  return (
    <>
      <main className={`h-100 `}>
        <Container fluid className={`d-flex p-0 h-100`}>
          <SideMenu />
          <div className="w-100 bg-app-bg h-100">
            <AppHeader />
            <div className={`wrapper custom_scrollbar p-3`}>
              <AppContent />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default HomeLayout;
