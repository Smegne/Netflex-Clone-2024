import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='allFooter'>
        <div>
            <FacebookOutlinedIcon/>
            <InstagramIcon />
            <YouTubeIcon/>


      

        <div className='footer1'>
            <ul>
                <li>AudioDescription</li>
                <li>Inveter Relation</li>
                <li>Legal Notice</li>
            </ul>
            </div>
            <div>
            &copy2024:Simegnew 
        </div> 
        </div>

        <div  className='footer1'>
        <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie prefernces</li>

        </ul>
        
        </div>


        <div className='footer1'>
        <ul>
        <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie prefernces</li>

        </ul>
        
        </div>


        <div className='footer1'>
        <ul><li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie prefernces</li>
</ul>
       
        </div>

        
    </div>
  )
}

export default Footer