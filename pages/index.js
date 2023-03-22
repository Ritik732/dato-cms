import { request } from "../lib/datocms";
import CourseSection from "@/components/CourseSection";
const HOMEPAGE_QUERY = `query { course {
  id
  name
  slug
 courseDetails {
  ...on CourseHeaderRecord{
   __typename
  smallTitle 
  bigTitle 
  buttonText 
  description
  }
   ... on CalloutRecord {
    __typename
    bigTitle
    smallTitle
    description
    id
    image{
      url
      width
      height
    }
  }
  ... on LearningSectionRecord {
   __typename
    hoursOfContent
    numberOfLessons
    title
    id
    learningPoint {
      title
      id
    }
  }
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
    query: HOMEPAGE_QUERY

  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  console.log(data);
  return <div> 
     {data.course.courseDetails.map(section => <CourseSection details= {section} key={section.id}/>)} 
  </div> 
  
}