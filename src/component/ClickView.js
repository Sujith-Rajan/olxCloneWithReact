


import React from 'react';
import './ClickView.css';
import { useContext, useEffect, useState } from 'react';
// import { PostContext } from '../store/PostContext';
import { FirebaseContext } from '../store/Context';

import { usePostDetails } from '../store/PostContext';

function ClickView() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = usePostDetails();
  const { firebaseApp } = useContext(FirebaseContext);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
      console.log(postDetails)
    if (typeof postDetails === 'object' && postDetails.hasOwnProperty('id')) {
      const { item_id} = postDetails;

      firebaseApp.firestore().collection('users').where('id', '==', item_id).get().then((snapshot) => {
        snapshot.forEach((doc) => {
          // Destructure doc.data() and include the id
          const userDetailsData = { id: doc.id, ...doc.data() };
    
          // Update userDetails state with the new user details
          setUserDetails(userDetailsData);
        });

        setIsLoading(false);
      }).catch((err) => {
        setError(err);
      });
    } else {
      console.log('postDetails is not a valid object or is undefined.');
    }
  }, [postDetails,firebaseApp]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className='clickView'>
      <div className="view-card">
        <div className='prdct-image'>
          {postDetails && postDetails.image ? (
            <img src={postDetails.image} alt="" />
          ) : (
            ''
          )}
        </div>
        <div>
          <p className='prdct-rate'>&#x20B9;{postDetails && postDetails.item_price}</p>
          <p className='prdct-name'>{postDetails && postDetails.item_name}</p>
          <p className='prdct-catgory'>{postDetails && postDetails.item_catogory}</p>
          <p className='prdct-desc'>{postDetails && postDetails.item_desc}</p>
        </div>
      </div>
      {userDetails &&    <div className="seller-details">
        
          <p>{userDetails.username}</p>
        
        
          <p>{userDetails.phone}</p>
       
      </div>}
    </div>
  );
}

export default ClickView;

