import styled from 'styled-components';

const MainWrapper = styled.div`
  background: #F4F6F8;
  min-height: 100vh;
  margin: 0;

  .content {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 50px 8vw;
    flex-wrap: wrap;

    h2.title {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  .main {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .left {
    flex: 0 0 300px;
    max-height: 195px;

    .retrieve-users {
      button {
        border-radius: 20px;
        background: #52A27E;
      }
    }
  }

  .right {
    flex: 0 0 60%;
    min-width: 300px;
    .user-list-header {
      display: flex;
      padding: 10px 30px;
      align-items: center;
      img {
        margin-left: 5px;
        margin-bottom: 2px;
        cursor: pointer;
      }
    }
    .users {
      max-height: 400px;
      overflow-y: scroll;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .user-details {
      display: flex;
      align-items: center;
      padding: 10px;
      input {
        margin-right: 10px;
      }
    }
    .user-name {
      width: 50%;
      min-width: 180px;
    }
    .user-age {
      min-width: 50px;
    }
  }
`

export default MainWrapper
