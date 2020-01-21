import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';

function App() {


  return (
    <div id = 'app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class = "input block">
          <label htmlFor = "">Usuário do GitHub</label>
          <input name = "github_user" id = "user_github" required />
          </div>

          <div class = "input block">
          <label htmlFor = "tecnologias">Tecnologias</label>
          <input name = "tecnologias" id = "tecnologias" required />
          </div>

          <div className = "input-group">
            <div class = "input-block">
              <label htmlFor = "latitude">Latitude</label>
              <input name = "latitude" id = "latitude" required />
            </div>

            <div class = "input-block">
              <label htmlFor = "longitude">Longitude</label>
              <input name = "longitude" id = "longitude" required />
            </div>
          </div>
          
          <button type = "submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className = "dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/42447794?s=460&v=4" alt = "Jessica Costa"/>
              <div className = "user-info">
                <strong> Jessica Costa de Jesus </strong>
                <span> NodeJS, ReactJS, MongoDB </span>
              </div>
            </header>
            <p>Geographer | GIS Analyst | Back End Dev Student</p>
            <a href = "https://github.com/jessicacj">Acessar perfil no GitHub</a>
          </li>
          <li className = "dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/42447794?s=460&v=4" alt = "Jessica Costa"/>
              <div className = "user-info">
                <strong> Jessica Costa de Jesus </strong>
                <span> NodeJS, ReactJS, MongoDB </span>
              </div>
            </header>
            <p>Geographer | GIS Analyst | Back End Dev Student</p>
            <a href = "https://github.com/jessicacj">Acessar perfil no GitHub</a>
          </li>
          <li className = "dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/42447794?s=460&v=4" alt = "Jessica Costa"/>
              <div className = "user-info">
                <strong> Jessica Costa de Jesus </strong>
                <span> NodeJS, ReactJS, MongoDB </span>
              </div>
            </header>
            <p>Geographer | GIS Analyst | Back End Dev Student</p>
            <a href = "https://github.com/jessicacj">Acessar perfil no GitHub</a>
          </li>
          <li className = "dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/42447794?s=460&v=4" alt = "Jessica Costa"/>
              <div className = "user-info">
                <strong> Jessica Costa de Jesus </strong>
                <span> NodeJS, ReactJS, MongoDB </span>
              </div>
            </header>
            <p>Geographer | GIS Analyst | Back End Dev Student</p>
            <a href = "https://github.com/jessicacj">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
    
  );
}

export default App;
