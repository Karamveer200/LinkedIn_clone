import styled from "styled-components";

const Leftside = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>

        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>

        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Item
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>

        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>

        <a>
          <span>Follow Hashtags</span>
        </a>

        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  color: black;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: #fff;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  height: 72px;
  width: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-position: center;
  background-color: white;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  text-decoration: none;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const Widget = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        line-height: 1.4;

        &:first-child {
          color: rgba(0, 0, 0, 0.65);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const Item = styled.a`
  text-align: left;
  padding: 12px;
  display: block;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    padding: 4px 12px 4px 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

export default Leftside;
