import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbarmenu() {
return(
		<header>
			<nav>
				<ul>
				  <li><NavLink to={`/`}> Home </NavLink> </li>
				  <li><NavLink to={`/about`}> 關於 </NavLink> </li>
				  <li><NavLink to={`/channels`}> 頻道列表 </NavLink> </li>
                  <li><NavLink to={`/login`}> 登入/註冊 </NavLink> </li>
                  <li><NavLink to={`/dashboard`}> 儀表板 </NavLink> </li>
                </ul>
          </nav>    
		</header>
    );
}
export default Navbarmenu;