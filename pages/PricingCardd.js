
import React from 'react'
import { request } from "../lib/datocms";
import PricingCard from '@/components/PricingCard';

const PRICING_QUERY = `query {
  course {
    courseDetails {
      ... on PricingSectionRecord {
        __typename
        title
        id
        pricingCard {
          isFree
          priceInRupees
          priceSuffix
          title
          id
          description
          finePrint
          featured
          buttonText
        }
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: PRICING_QUERY
  });

  return {
    props: { data }
  };
}

export default function PricingPage({ data }) {
  const pricingSection = data.course.courseDetails.find(
    section => section.__typename === "PricingSectionRecord"
  );

  return (
    
          <div className=" bg-purple-600 py-20 px-10 max-w-100">
      <h1 className="text-center text-8xl font-bold text-white mb-20 ">{pricingSection.title}</h1>
    
      

<div className="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-4 justify-center wrap max-w-6xl mx-auto items-center">
       {pricingSection.pricingCard.map((card, index) => (
        <PricingCard details={card} key={index}/>
       ))}
      </div>
      
    </div>
  );
}
