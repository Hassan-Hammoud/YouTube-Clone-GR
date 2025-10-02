/** @format */
import moment from 'moment';
import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { API_KEY, value_converter } from '../../data';
import './PlayVideo.css';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  console.log('🚀 ~ PlayVideo ~ commentData:', commentData);

  // console.log('🚀 ~ PlayVideo ~ apiData:', apiData);

  // console.log('🚀 ~ PlayVideo ~ channelData:', channelData);

  const fetchVideoData = async () => {
    // Fetching videos data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((resp) => resp.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    // Fetching Channel data
    if (!apiData) return;
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // Fetching Comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
    fetchOtherData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData, videoId]);

  return (
    <div className='play-video'>
      {/* <video
        src={assets.video1}
        controls
        autoPlay
        muted
      ></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
      <div className='play-video-info'>
        <p>
          {value_converter(apiData ? apiData.statistics.viewCount : '15k')}{' '}
          Views &bull;{' '}
          {/* {apiData?.snippet?.publishedAt &&
            moment(apiData.snippet.publishedAt).fromNow()} */}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        </p>
        <div className=''>
          <span>
            <img
              src={assets.like}
              alt='Like Image'
            />
            {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </span>

          <span>
            <img
              src={assets.dislike}
              alt='DisLike Image'
            />
            2
          </span>
          <span>
            <img
              src={assets.share}
              alt='Share Image'
            />
            Share
          </span>
          <span>
            <img
              src={assets.save}
              alt='Save Image'
            />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ''}
          alt='Logo Image'
        />
        <div className=''>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : '1M'}{' '}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : 'Description Here'}
        </p>
        <p>Subscribe HassanTech To Watch More Tutorials On Web Development</p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}{' '}
          Comments
        </h4>
        {/*  */}
        {commentData.map((item, index) => {
          return (
            <div
              key={index}
              className='comment'
            >
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt='User Profile Image'
              />
              <div className=''>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{' '}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>
                  {item.snippet.topLevelComment.snippet.textDisplay}
                  <div className='comment-action'>
                    <img
                      src={assets.like}
                      alt=''
                    />
                    <span>
                      {value_converter(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}
                    </span>
                    <img
                      src={assets.dislike}
                      alt='DisLike Image'
                    />
                  </div>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
