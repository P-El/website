import React ,{Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpeg';


//common
import Timeline from '../common/Timeline';

class About extends Component{
      render(){
          return(
            <div>
                  <Header 
              title ="About Us"
              subtitle="IT'S REALLY GRAET STORY"
              buttonText="TELL ME MORE"
                 image ={image}
              />
              <Timeline />

             </div>
          );
      }
}export default About;