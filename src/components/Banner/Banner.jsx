import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="shade-layer">
          <div className="banner-info">
            <div className="game-title">
              <div className="game-title-left">
                <img
                  src="../../../public/AAAABQRrN8iBQCvf_kR3ZKFJ9hsJcpklEnkon4tCb7S1hovriKXukaJwvm95QtD6aGkKmv6kTDzjf6ewiHJbPY4PbugtPUzzeYgFww.png"
                  alt=""
                />
              </div>
              <div className="game-title-right">
                <img
                  src="../../../public/AAAABXNL1bZSlHduR8t8CKDLHOUB5EL0cUzSeMZkVlHokRlPFbssCgXOV_FaTCidsRxI7NVAy-wwThzd097ufPGPu5UWkkIMGr0.webp"
                  alt=""
                />
                <h2>Bloons TD 6</h2>
              </div>
            </div>

            <p className="genre-para">
              Mobile Game <span class="dot-symbol">•</span> Strategy
            </p>
            <h3>Included with your membership</h3>
            <p className="desc-para">
              Sharpen those darts! Defend Monkey Towers from an ever-flowing
              stream of colorful invading balloons. As you pop, more new
              abilities and heroes unlock.
            </p>
            <div className="button-group">
              <button id="button1">
                <span className="material-icons">smartphone</span>
                Get Mobile Game
              </button>
              <button id="button2">
                <span className="material-icons send-icon">send</span>
                Send to My Mobile Device
              </button>
            </div>
          </div>

          <div className="bottom-shade-layer"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
