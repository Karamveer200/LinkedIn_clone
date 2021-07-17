import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Share a Post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.png" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.png" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.png" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/article-icon.png" alt="" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #9e9e9e;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  margin: 0 0 8px;
  background-color: #9e9e9e;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 1);
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      font-weight: 600;
      align-items: center;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 8px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid #fff;

        &:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          border-radius: 10px;
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 10px;
      padding-top: 10px;
      button {
        flex-direction: column;

        &:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
`;
export default Main;
