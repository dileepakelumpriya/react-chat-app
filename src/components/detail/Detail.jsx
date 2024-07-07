import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Dileepa Kelumpriya</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItems">
              <div className=" photoDetail">
                <img src="./bg.jpg" alt="" />
                <span>my background</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItems">
              <div className=" photoDetail">
                <img src="./bg.jpg" alt="" />
                <span>my background</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItems">
              <div className=" photoDetail">
                <img src="./bg.jpg" alt="" />
                <span>my background</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Share Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block The User</button>
        <button className="logOutBtn">Log Out</button>
      </div>
    </div>
  );
};

export default Detail;
