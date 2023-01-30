import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          {
              <nav>

                  <input type="checkbox" name="menu" id="btn-menu"/>
                  <label htmlFor="btn-menu">☰</label>
                  <ul>
                      <li><img src="/raweware.png" className="rawelogo"/></li>
                      <li><a href="#">ПОДДЕРЖКА</a></li>
                      <li><a href="#">ДИСКОРД</a></li>
                      <li><a href="#">СТАТУС</a></li>
                      <li><a href="#">КАТАЛОГ</a></li>
                      <li><a href="#">КУПИТЬ</a></li>
                      <div style={{float:'right'}}>
                          <li><a href="#">ВОЙТИ</a></li>
                          <li><a href="#">РЕГИСТРАЦИЯ</a></li>
                      </div>
                  </ul>
              </nav>
          }
      </header>

        <h1 className="cat-log">КАТАЛОГ</h1>
        <div className="main-container">
            <div className="cards">
                <div className="card card-1">
                    <div className="card__icon"><i className="fas fa-bolt raid">ВОЗМОЖНОСТИ</i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title"><li>AIMASSIST</li><li>WALLHACK</li><li>NORECOIL</li><p>Узнать подробней можно тут!</p></h2>
                    <p className="card__apply">
                        <a className="card__link" href="/buy/rust">RUST <span className="card__status">UNDETECT</span><i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-2">
                    <div className="card__icon"><i className="fas fa-bolt raid">ВОЗМОЖНОСТИ</i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title"><li>AIMASSIST (Legit/Rage)</li><li>VISUAL (20+)</li><li>PLAYER (20+)</li><p>Узнать подробней можно тут!</p></h2>
                    <p className="card__apply">
                        <a className="card__link" href="/buy/csgo">CS:GO <span className="card__status">UNDETECT</span><i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-3">
                    <div className="card__icon"><i className="fas fa-bolt raid">ВОЗМОЖНОСТИ</i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title"><li>AIMBOT (Legit/Rage)</li><li>GODMODE</li><li>PLAYER (20+)</li><p>Узнать подробней можно тут!</p></h2>
                    <p className="card__apply">
                        <a className="card__link" href="/buy/VALORANT">VALORANT <span className="card__status">UNDETECT</span><i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className="card card-4">
                    <div className="card__icon"><i className="fas fa-bolt raid">ВОЗМОЖНОСТИ</i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title"><li>AUTO MATH</li><li>ESP NUMBER</li><li>EASY CALC</li><p>Узнать подробней можно тут!</p></h2>
                    <p className="card__apply">
                        <a className="card__link" href="/buy/CALCULATOR">CALCULATOR <span className="card__status">UNDETECT</span><i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <h1 className="form_title">ПОЧЕМУ МЫ?</h1>
            <div className="form__about form__about_card">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
            </div>
        </div>

        <div>
            <footer className="footer">
                <p className="copyright">RaweWare Copyright © 2021 All rights reserved <a href="t.me/@arnolh">Created by: 2HWILE</a></p>
            </footer>
        </div>
    </div>
  );
}

export default App;
