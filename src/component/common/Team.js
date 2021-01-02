import React,{Component} from 'react';
import Teammember from './Teammember';
import img1 from '../assets/img/team/1.jpg';
import img2 from '../assets/img/team/2.jpg';
import img3 from '../assets/img/team/3.jpg';


const team = [
    {name:'Kay Garland',designation:'Lead Designer',image:img1},
     {name:'Larry Parker',designation:'Lead Marketer',image:img2},
    {name:'Diana Petersen',designation:'Lead Developer',image:img3},

]

class Team extends Component{
     render(){
         return(
               <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    
                    {team.map((team ,i)=>{
                        return <Teammember {...team} key={i} />
                    })}
                    
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
         );
     }
}
export default Team;