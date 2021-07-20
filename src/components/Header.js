import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";
import { useHistory } from "react-router";

const Container = styled.div`
  background-color: #9e9e9e;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0 24px;
  position: fixed;
  z-index: 999;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;

const Search = styled.div`
  flex-grow: 1;
  position: relative;
  opacity: 1;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: whitesmoke;
      border-radius: 4px;
      width: 218px;
      color: rgba(0, 0, 0, 0.9);
      padding: 4px 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      vertical-align: text-top;
      outline-color: #2977c9;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin-right: 30px;

  .active {
    span:after {
      content: "";
      bottom: 0;
      border: 1px solid rgba(0, 0, 0, 1);
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    min-width: 80px;

    text-decoration: none;
    position: relative;
    cursor: pointer;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 65px;
  background: rgba(0, 0, 0, 1);
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  align-items: center !important;
  font-size: 16px;
  text-align: center;
  margin-right: 100px;

  justify-content: space-around;
  padding: 2px 5px;
  display: none;
  color: white;

  a {
    display: flex;
    align-items: center !important;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    font-weight: 900;
  }

  @media (max-width: 768px) {
    top: -30px;
  }
`;

const User = styled(NavList)`
  a {
    margin-top: 10px;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      display: flex;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.09);
`;

const Header = (props) => {
  const history = useHistory();

  const signOut = async () => {
    console.log("ashiuhasduhuhuashkj");
    await props.signOut();
    history.push("/");
  };
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search"></input>
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a href>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a href>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a href>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a href>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a href>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut onClick={() => signOut()}>
                <a href>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a href>
                <img src="/images/nav-work.svg" alt="" />
                <span>Work</span> <img src="/images/down-icon.svg" alt="" />
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
