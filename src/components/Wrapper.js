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
    padding: 50px 150px;
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


    .users {
      button {
        border-radius: 20px;
        background: #52A27E;
      }
    }
  }

  .right {
    flex: 0 0 700px;
    border: 1px solid red;
    .user-details {
      display: flex;
      border: 1px solid green;
      padding: 10px;
    }
    .user-name {
      width: 300px;
      border: 1px solid purple;
      /* display: inline-block; */
    }
  }
`

export default MainWrapper
