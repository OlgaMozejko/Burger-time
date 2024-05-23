import { GetServerSideProps } from 'next';
import { wrapper } from '@/store';
import HomePage from '@/layout/pages/homepage/homepage';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {

    const state = store.getState();
    const { places, tags } = state;

    if (places.restaurants.length === 0) {

     // const response = await fetch('https://burger-frontend/api/restaurants');
     // if(response.ok){
     //   const initialRestaurants = await response.json();
     // } 
    
    }

    if (tags.items.length === 0) {

      // another fetch to get the tags / categories

    }

    return {
      props: {},
    };
  }
);

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;
