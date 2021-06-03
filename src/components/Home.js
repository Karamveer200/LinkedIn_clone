import styled from "styled-components";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Main from "./Main";

const Container = styled.div`
  padding-top: 75px;
  max-width: 100%;
`;

const Section = styled.section`
  height: 5px;
  border-radius: 10px;
  padding: 16px 0;
  text-align: center;
  align-items: center;
  box-sizing: content-box;
  background: white;
  display: flex;
  justify-content: center;

  & > h5 {
    color: #2977c9;
    font-size: 16px;

    a {
      font-weight: 700;
    }
  }

  & > p {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: transparent;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  color: white;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    pad: 0 5px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a href>Application is in development phase - </a>
        </h5>
        <p> Users can register, upload posts, links and images</p>
      </Section>

      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

export default Home;
