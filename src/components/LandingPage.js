import styled from "styled-components";

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1182px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }

  & > div {
    margin-right: 20px;

    @media (max-width: 1028px) {
      margin-right: 60px;
    }
  }
`;

const Join = styled.a`
  font-size: 18px;
  padding: 10px 12px;
  text-decoration: none;
  color: white;
  margin-right: 15px;
  border-radius: 4px;

  &:hover {
    background-color: white;
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.3);
    text-decoration: none;
  }
`;

const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    min-height: 0;
  } ;
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 65%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 300;
    line-height: 70px;
    margin-right: 50px;

    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      font-size: 20px;
      line-height: 2;
      margin-bottom: 20px;
    }
  }

  & > img {
    width: 1000px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 1028px) {
      width: 400px;
      height: 370px;
      right: 0px;
      top: 100px;
    }

    @media (max-width: 768px) {
      top: 230px;
      width: 400px;
      height: 370px;
      position: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media (max-width: 768px) {
    margin-top: 20px;
  } ;
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.5);
    color: rgba(0, 0, 0, 1);
  }
`;
const LandingPage = () => {
  return (
    <Container>
      <div className="Login_header">
        <Nav>
          <a href="/">
            <img src="/images/login-logo.svg" alt="" />
          </a>
          <div>
            <Join>Join Now</Join>
            <SignIn>Sign In</SignIn>
          </div>
        </Nav>
      </div>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign In with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default LandingPage;
