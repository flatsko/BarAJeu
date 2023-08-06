import React, { useState } from 'react'
import { styled } from 'styled-components';
import './adminTabs';
import { adminTabs } from './adminTabs';
import { FiChevronDown } from 'react-icons/fi';
import { theme } from '../../../../theme';

export default function AdminPanel() {

    const [toggle, setToggle] = useState(true);
    const [isLabelShow, seIsLabelShow] = useState();
    let labelshow;
    const handleClickButton = (e) => {
        seIsLabelShow(e.target.value);
        console.log(`Handle ${isLabelShow}`);
        
    }
    const handleClickIcon = () => {
        setToggle(!toggle)
    }

    const defineClasseName = (toggleName) => {
        if(toggleName == isLabelShow)
        {
            return "affiche";
        }
        {
            return "koAffiche";
        }

    }
  return (
    <AdminPanelStyled className={toggle? 'toggle' : 'notToggle' }>
<div className='buttonPanel'>
<FiChevronDown size={42} className='icon' onClick={handleClickIcon} />
    {adminTabs.map(({title, showLabel, Icon}) => {
       return(
        <div>
        
        {console.log(`Camel ${Icon}`)}
        <button value={showLabel} onClick={handleClickButton} className={defineClasseName(showLabel)}>{Icon}{title}</button>
        </div>
       );
      
    }

    )}
 </div>

 ICI SE TROUVE LE TEXTE
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
 &.toggle{
 position: fixed;
  bottom: 0;
  left:0px;
  background-color: ${theme.colors.background_white};;
  text-align:left;
  min-width:100vw;
  min-height:30vh;
  padding: -50px;
 }

 &.notToggle{
    position: fixed;
  bottom: 0;
  left:0px;
  background-color:azure;
  text-align:left;
  min-width:100vw;
  min-height:0vh;
  padding: -40px;

 }
.buttonPanel{
display: flex;
margin-top: -50px;
padding-left: 40px;
align-items:center;
border-radius: ${theme.borderRadius.extraRound};
border:2px;
border-color:blueviolet;
color: ${theme.colors.greyDark};
}

.icon{
    size:32px;
    color: ${theme.colors.greyMedium}
}

button{
    padding:15px 30px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border:2px;
    border-color:blueviolet;
    color: ${theme.colors.dark};
    
&.affiche{
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
}   
}
`;