import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import controllerIcon from '../files/images/controllerIcon.svg';
 
import '../styles/home.scss';

export function Home() {
   const history = useHistory();

   function handleProfileManager() {
      history.push(`/profile-manager`);
   }

   return (
      <div id="main">
         <main className="login">
            <div>
               <img src={controllerIcon} alt="Logo do aplicativo" />
               <h1>
                  Entrar
               </h1>
            </div>
            <form>
               <input type="text" placeholder="Email ou nome de usuário" />
               <input type="password" placeholder="Senha" />
               <button type="submit" onClick={handleProfileManager}>Entrar</button>
            </form>
            <a className="reminderMe">
               <input type="checkbox" />
               <span>
                  Lembre-se de mim
               </span>
            </a>
         </main>
      </div>
   )
}