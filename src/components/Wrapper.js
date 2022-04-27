import styled from 'styled-components';

const MainWrapper = styled.div`
  background: #F4F6F8;
  min-height: 100vh;
  margin: 0;

  .content {
    display: flex;
    width: 100%;
    border: 1px solid blue;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 50px 15vw;
    flex-wrap: wrap;

    h2.title {
      width: 100%;
      border: 1px solid orange;
      margin-bottom: 50px;
    }
  }

  .main {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
  }

  .left {

    flex: 0 0 300px;
    border: 1px solid red;
    max-height: 195px;
    margin-bottom: 20px;

    .users {
      button {
        border-radius: 20px;
        background: #52A27E;
      }
    }
  }

  .right {
    flex: 0 0 60%;
    border: 1px solid red;
    .user-list-header {
      display: flex;
      padding: 10px 35px;
      align-items: center;
      img {
        margin-left: 5px;
        margin-bottom: 2px;
      }

    }
    .user-details {
      display: flex;
      align-items: center;
      border: 1px solid green;
      padding: 10px;
      input {
        margin-right: 10px;
      }
    }
    .user-name {
      width: 50%;
      min-width: 225px;
      border: 1px solid purple;
      /* display: inline-block; */
    }
  }
`

export default MainWrapper
