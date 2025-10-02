/** @format */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import './Recommended.css';
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  // console.log('🚀 ~ Recommended ~ apiData:', apiData);

  const fetchData = async () => {
    const relatedVideo_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=GB&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_Url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);
  return (
    <div className='recommended'>
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className='side-video-list'
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt='Thumbnail1'
            />
            <div className='vid-info'>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
