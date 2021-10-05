import { useHistory } from 'react-router-dom';

import iconR from '../files/images/iconR.svg';
import backgroundMain from '../files/images/backgroundMain.jpg';
 
import '../styles/home.scss';

export function Home() {
   const history = useHistory();

   function handleProfileManager() {
      history.push(`/profile-manager`);
   }

   return (
      <div id="page-home">
         <img src={backgroundMain} alt="Imagem de fundo" />
         <div className="login">
            <main>
               <div className="home-principal">
                  <div>
                     <img src={iconR} alt="Logo do aplicativo" />
                     <h1>
                        Entrar
                     </h1>
                  </div>
                  <form>
                     <input type="text" placeholder="Email ou nome de usuário" />
                     <input type="text" placeholder="Senha" />
                  </form>
                  <button type="submit" onClick={handleProfileManager}>Entrar</button>
                  <div>
      
                  </div>
               </div>
            </main>
         </div>
      </div>
   )
}