import React from 'react'
import CalloutRecord from './CalloutRecord';
import CourseHeaderRecord from './CourseHeaderRecord';
import LearningSectionRecord from './LearningSectionRecord';
import PricingCard from './PricingCard';
import PricingSectionRecord from './PricingSectionRecord';
import CalloutSectionRecord from './CalloutSectionRecord';
import PricingCardd from '@/pages/PricingCardd';

export default function CourseSection({details}) {
   
    if(details .__typename == "CourseHeaderRecord"){
        return <CourseHeaderRecord details={details}/>
    }

    else if(details .__typename == "CalloutRecord"){
    return <CalloutRecord details={details}/>}

    else if(details .__typename == "PricingCard"){
    return <PricingCard details={details}/>}

    else if(details .__typename == "PricingSectionRecord"){
        return <PricingSectionRecord details={details}/>}

        else if(details .__typename == "LearningSectionRecord"){
            return <LearningSectionRecord details={details}/>}

            
                else if(details .__typename == "CalloutSectionRecord"){
                    return <CalloutSectionRecord details={details}/>}
                    
                    

                    

                    
    

                
    




    

       
    
    


    

    
  return (
    <div><h1>Course Section</h1> </div>
  )

  }