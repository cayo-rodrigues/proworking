import { ServicePageContainer, NotFound, TopBar } from "./styles";
import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";

import NotFoundImg from "../../assets/svg/not_found.svg";

import SearchBar from "../../components/SearchBar";

const ServicesPage = () => {
  const { workers, refreshWorkers } = useWorkers();

  useEffect(() => {
    window.scrollTo(0, 0);
    refreshWorkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopBar>
        <div>
          <SearchBar />
        </div>
      </TopBar>

      <ServicePageContainer>
        <h2>Todos os serviços</h2>

        {workers.length !== 0 ? (
          <CardBox workers={workers.filter(({ is_active }) => is_active)} />
        ) : (
          <NotFound>
            <img src={NotFoundImg} alt="Não encontrado" />
            <h3>Nenhum prestador de serviço registrado ainda</h3>
          </NotFound>
        )}
      </ServicePageContainer>
    </>
  );
};

export default ServicesPage;
