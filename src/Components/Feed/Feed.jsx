/** @format */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { assets } from '../../assets/assets';
import moment from 'moment/moment';
import { API_KEY, value_converter } from '../../data';

import './Feed.css';
const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  // console.log('🚀 ~ fetchData ~ data:', data);
  const fetchData = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=GB&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_Url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className='feed'>
      {data.map((item, index) => {
        return (
          <Link
            key={index}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className='card'
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt='thumbnail1'
            />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} &bull;{' '}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
